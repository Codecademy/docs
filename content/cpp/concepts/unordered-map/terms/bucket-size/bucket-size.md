---
Title: 'bucket_size()'
Description: 'Returns the number of elements in a specific bucket of an unordered map.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Hash Maps'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.bucket_size()`** method returns the number of elements stored in a specific bucket of an `unordered_map`. In C++, an `unordered_map` uses a hash table internally where elements are distributed across multiple buckets based on their key's hash value. This method helps analyze the distribution of elements and can be useful for performance optimization and understanding collision handling in the hash table.

## Syntax

```pseudo
unordered_map.bucket_size(n)
```

**Parameters:**

- `n`: The bucket number to query. This value must be less than the total number of buckets returned by `.bucket_count()`. It is of type `size_type`, which is an unsigned integral type.

**Return value:**

The `.bucket_size()` method returns the number of elements in bucket `n` as an unsigned integer of type `size_type`.

## Example 1: Basic Bucket Size Check

This example demonstrates how to use `.bucket_size()` to check the number of elements in each bucket of an `unordered_map`:

```cpp
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

```shell
Total buckets: 5

Bucket 0 has 1 elements
Bucket 1 has 1 elements
Bucket 2 has 2 elements
Bucket 3 has 0 elements
Bucket 4 has 0 elements
```

The output shows how elements are distributed across the buckets. Some buckets may be empty while others contain one or more elements depending on the hash function's distribution.

> **Note:** Output values are implementation-dependent and may vary across different compilers and systems.

## Example 2: Analyzing Load Distribution

This example shows how to use `.bucket_size()` to analyze the load distribution in an `unordered_map` storing product inventory data, which helps identify potential performance issues:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
  // Create an inventory map with product IDs and quantities
  std::unordered_map<std::string, int> inventory = {
    {"PROD001", 150},
    {"PROD002", 200},
    {"PROD003", 75},
    {"PROD004", 300},
    {"PROD005", 125},
    {"PROD006", 50},
    {"PROD007", 180},
    {"PROD008", 90}
  };

  unsigned int total_buckets = inventory.bucket_count();
  int max_bucket_size = 0;
  int empty_buckets = 0;

  // Analyze bucket distribution
  for (unsigned int i = 0; i < total_buckets; i++) {
    int current_size = inventory.bucket_size(i);

    if (current_size > max_bucket_size) {
      max_bucket_size = current_size;
    }

    if (current_size == 0) {
      empty_buckets++;
    }
  }

  // Display distribution statistics
  std::cout << "Total buckets: " << total_buckets << "\n";
  std::cout << "Empty buckets: " << empty_buckets << "\n";
  std::cout << "Maximum elements in a bucket: " << max_bucket_size << "\n";
  std::cout << "Average load factor: " << inventory.load_factor() << "\n";

  return 0;
}
```

This example results in the following output:

```shell
Total buckets: 11
Empty buckets: 5
Maximum elements in a bucket: 2
Average load factor: 0.727273
```

This analysis helps understand how well the hash function distributes elements. A high maximum bucket size might indicate hash collisions that could affect performance.

## Codebyte Example: Identifying Collision Hotspots

This example demonstrates using `.bucket_size()` to identify buckets with multiple elements, which indicates hash collisions in a user authentication system:

```codebyte/cpp
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

This helps identify potential performance bottlenecks where multiple keys hash to the same bucket, requiring additional comparisons during lookup operations.

## Frequently Asked Questions

### 1. What is the bucket in `unordered_map`?

A bucket is a slot in the internal hash table where elements are stored based on their key's hash value. Each bucket can contain zero, one, or multiple elements, numbered from 0 to `bucket_count() - 1`.

### 2. What is the `unordered_map` in C++ with size?

An `unordered_map` is a hash table container that stores key-value pairs. The `.size()` method returns total elements, while `.bucket_count()` returns the number of buckets. Their ratio determines the load factor.

### 3. What is the `unordered_set` bucket size?

The `.bucket_size(n)` method in `unordered_set` works the same as in `unordered_map`, returning the number of elements in bucket `n` to help analyze distribution and collisions.
