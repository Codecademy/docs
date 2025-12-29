---
Title: 'bucket_size()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the number of elements stored in a specific bucket of an unordered_map.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Optimization'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **.bucket_size()** method returns the number of elements stored in a specific bucket of an [`unordered_map](https://www.codecademy.com/resources/docs/cpp/unordered-map). In C++, an unordered_map uses a hash table internally where elements are distributed across multiple buckets based on their key’s hash value. This method helps analyze the distribution of elements and can be useful for performance optimization and understanding collision handling in the hash table.

## Syntax

```pseudo
unordered_map.bucket_size(n)
```
**Parameters:**

*n*: The bucket number to query. This value must be less than the total number of buckets returned by .bucket_count(). It is of type size_type, which is an unsigned integral type.
Return value:

The .bucket_size() method returns the number of elements in bucket n as an unsigned integer of type size_type.

## Example

This example demonstrates how to use .bucket_size() to check the number of elements in each bucket of an unordered_map:

```
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
  // Create an unordered_map with string keys and integer values
  std::unordered_map<std::string, int> ages = {
    {"Alice", 25},
    {"Bob", 30},
    {"Charlie", 35},
    {"Diana", 28}
  };

  // Get the total number of buckets
  unsigned int total_buckets = ages.bucket_count();
  std::cout << "Total buckets: " << total_buckets << "\n\n";

  // Display the number of elements in each bucket
  for (unsigned int i = 0; i < total_buckets; i++) {
    std::cout << "Bucket " << i << " has " << ages.bucket_size(i) << " elements\n";
  }

  return 0;
}
```
This example results in the following output:
```
Total buckets: 5

Bucket 0 has 1 elements
Bucket 1 has 1 elements
Bucket 2 has 2 elements
Bucket 3 has 0 elements
Bucket 4 has 0 elements

```
The output shows how elements are distributed across the buckets. Some buckets may be empty while others contain one or more elements depending on the hash function’s distribution.

## Codebyte Example (if applicable)

This example demonstrates using .bucket_size() to identify buckets with multiple elements, which indicates hash collisions in a user authentication system:

```codebyte/js
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
  // Create a map storing user sessions with session IDs
  std::unordered_map<std::string, std::string> sessions = {
    {"session_a1b2", "user_101"},
    {"session_c3d4", "user_102"},
    {"session_e5f6", "user_103"},
    {"session_g7h8", "user_104"},
    {"session_i9j0", "user_105"},
    {"session_k1l2", "user_106"}
  };

  unsigned int total_buckets = sessions.bucket_count();

  std::cout << "Buckets with collisions (multiple elements):\n";

  // Find and report buckets with more than one element
  for (unsigned int i = 0; i < total_buckets; i++) {
    unsigned int size = sessions.bucket_size(i);

    if (size > 1) {
      std::cout << "Bucket " << i << " has " << size << " elements (collision detected)\n";

      // Display which sessions are in this bucket
      std::cout << "  Sessions in this bucket: ";
      for (auto it = sessions.begin(i); it != sessions.end(i); ++it) {
        std::cout << it->first << " ";
      }
      std::cout << "\n";
    }
  }

  return 0;
}
```