---
Title: 'bucket_count()'
Description: 'Returns the total number of buckets in an unordered set container.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Methods'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`bucket_count()`** method returns the total number of buckets in an `unordered_set` container. Since `unordered_set` is implemented using a hash table, elements are stored in buckets based on the hash value of the elements, and this method allows developers to understand the underlying structure of the container.

## Syntax

```pseudo
unordered_set_name.bucket_count()
```

**Parameters:**

The `.bucket_count()` method does not take any parameters.

**Return value:**

The method returns a value of type `size_type`, which is an unsigned integral type representing the current number of buckets in the `unordered_set`.

## Example 1: Basic Bucket Count

This example demonstrates how to retrieve the total number of buckets in an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  // Create an unordered_set with string elements
  std::unordered_set<std::string> fruits;

  // Insert some elements
  fruits.insert("apple");
  fruits.insert("banana");
  fruits.insert("cherry");
  fruits.insert("date");
  fruits.insert("elderberry");

  // Get the number of buckets
  size_t bucket_total = fruits.bucket_count();

  // Display the result
  std::cout << "The unordered_set has " << bucket_total << " buckets." << std::endl;

  return 0;
}
```

Here is a sample output for this code:

```shell
The unordered_set has 13 buckets.
```

The output shows that the `unordered_set` has automatically allocated 13 buckets to store the 5 elements, providing room for efficient hash distribution.

> **Note:** The exact number of buckets is implementation-defined and may vary depending on the compiler and standard library.

## Example 2: Monitoring Bucket Growth

This example shows how the number of buckets changes as more elements are added to an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  // Create an empty unordered_set
  std::unordered_set<std::string> colors;

  std::cout << "Initial bucket count: " << colors.bucket_count() << std::endl;

  // Add elements and monitor bucket count
  colors.insert("red");
  std::cout << "After 1 element: " << colors.bucket_count() << " buckets" << std::endl;

  colors.insert("blue");
  colors.insert("green");
  colors.insert("yellow");
  std::cout << "After 4 elements: " << colors.bucket_count() << " buckets" << std::endl;

  // Add more elements to trigger rehashing
  colors.insert("orange");
  colors.insert("purple");
  colors.insert("pink");
  colors.insert("brown");
  colors.insert("black");
  std::cout << "After 9 elements: " << colors.bucket_count() << " buckets" << std::endl;

  return 0;
}
```

This example results in the following output:

```shell
Initial bucket count: 1
After 1 element: 13 buckets
After 4 elements: 13 buckets
After 9 elements: 13 buckets
```

When the first element is added, the `unordered_set` automatically increases the number of buckets from 1 to 13. The bucket count then remained at 13 as more elements were added, maintaining an efficient load factor.

## Codebyte Example: Analyzing Hash Distribution

This example demonstrates using `bucket_count()` together with other bucket-related methods to analyze how elements are distributed across buckets:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  // Create an unordered_set for programming languages
  std::unordered_set<std::string> languages;

  // Add programming languages
  languages.insert("Python");
  languages.insert("Java");
  languages.insert("C++");
  languages.insert("JavaScript");
  languages.insert("Ruby");
  languages.insert("Go");
  languages.insert("Rust");

  // Get total bucket count
  size_t total_buckets = languages.bucket_count();
  std::cout << "Total buckets: " << total_buckets << std::endl;
  std::cout << "Total elements: " << languages.size() << std::endl;
  std::cout << "\nBucket distribution:" << std::endl;

  // Analyze distribution across buckets
  for (size_t i = 0; i < total_buckets; i++) {
    std::cout << "Bucket " << i << " contains " << languages.bucket_size(i) << " elements";

    // Show which elements are in this bucket
    if (languages.bucket_size(i) > 0) {
      std::cout << ": ";
      for (auto it = languages.begin(i); it != languages.end(i); ++it) {
        std::cout << *it << " ";
      }
    }
    std::cout << std::endl;
  }

  return 0;
}
```

This analysis helps understand how the hash function distributes elements across the available buckets, which can be useful for performance optimization.
