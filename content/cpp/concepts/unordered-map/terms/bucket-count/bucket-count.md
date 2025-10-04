---
Title: 'bucket_count()'
Description: 'Returns the total number of buckets in an unordered_map container.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Data Structures'
  - 'Hash Maps'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`bucket_count()`** method returns the total number of buckets in an `unordered_map` container. Since `unordered_map` is implemented using a hash table, elements are stored in buckets based on the hash value of their keys, and this method allows developers to understand the underlying structure of the container.

## Syntax

```pseudo
unordered_map_name.bucket_count()
```

**Parameters:**

The `.bucket_count()` method does not take any parameters.

**Return value:**

The method returns a value of type `size_type`, which is an unsigned integral type representing the current number of buckets in the `unordered_map`.

## Example 1: Basic Bucket Count

This example demonstrates how to retrieve the total number of buckets in an `unordered_map`:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
  // Create an unordered_map with string keys and integer values
  std::unordered_map<std::string, int> grades;

  // Insert some key-value pairs
  grades["Alice"] = 85;
  grades["Bob"] = 92;
  grades["Charlie"] = 78;
  grades["Diana"] = 95;
  grades["Eve"] = 88;

  // Get the number of buckets
  size_t bucket_total = grades.bucket_count();

  // Display the result
  std::cout << "The unordered_map has " << bucket_total << " buckets." << std::endl;

  return 0;
}
```

This example results in the following output:

```shell
The unordered_map has 13 buckets.
```

The output shows that the `unordered_map` has automatically allocated 13 buckets to store the 5 elements, providing room for efficient hash distribution.

## Example 2: Monitoring Bucket Growth

This example shows how the number of buckets changes as more elements are added to an `unordered_map`:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
  // Create an empty unordered_map
  std::unordered_map<std::string, double> prices;

  std::cout << "Initial bucket count: " << prices.bucket_count() << std::endl;

  // Add elements and monitor bucket count
  prices["apple"] = 1.99;
  std::cout << "After 1 element: " << prices.bucket_count() << " buckets" << std::endl;

  prices["banana"] = 0.89;
  prices["orange"] = 2.49;
  prices["grape"] = 3.99;
  std::cout << "After 4 elements: " << prices.bucket_count() << " buckets" << std::endl;

  // Add more elements to trigger rehashing
  prices["mango"] = 2.99;
  prices["pear"] = 1.79;
  prices["kiwi"] = 0.99;
  prices["melon"] = 4.49;
  prices["peach"] = 2.29;
  std::cout << "After 9 elements: " << prices.bucket_count() << " buckets" << std::endl;

  return 0;
}
```

This example results in the following output:

```shell
nitial bucket count: 1
After 1 element: 13 buckets
After 4 elements: 13 buckets
After 9 elements: 13 buckets
```

As elements are added, the `unordered_map` automatically increases the number of buckets to maintain efficient performance and keep the load factor below a certain threshold.

## Codebyte Example: Analyzing Hash Distribution

This example demonstrates using `bucket_count()` together with other bucket-related methods to analyze how elements are distributed across buckets:

```codebyte/cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
  // Create an unordered_map for product inventory
  std::unordered_map<std::string, int> inventory;

  // Add product stock quantities
  inventory["laptop"] = 45;
  inventory["mouse"] = 120;
  inventory["keyboard"] = 80;
  inventory["monitor"] = 30;
  inventory["headset"] = 65;
  inventory["webcam"] = 25;
  inventory["speaker"] = 55;

  // Get total bucket count
  size_t total_buckets = inventory.bucket_count();
  std::cout << "Total buckets: " << total_buckets << std::endl;
  std::cout << "Total elements: " << inventory.size() << std::endl;
  std::cout << "\nBucket distribution:" << std::endl;

  // Analyze distribution across buckets
  for (size_t i = 0; i < total_buckets; i++) {
    std::cout << "Bucket " << i << " contains " << inventory.bucket_size(i) << " elements";

    // Show which elements are in this bucket
    if (inventory.bucket_size(i) > 0) {
      std::cout << ": ";
      for (auto it = inventory.begin(i); it != inventory.end(i); ++it) {
        std::cout << it->first << " ";
      }
    }
    std::cout << std::endl;
  }

  return 0;
}
```

This analysis helps understand how the hash function distributes elements across the available buckets, which can be useful for performance optimization.

## Frequently Asked Questions

### 1. What is the purpose of `unordered_map` in C++?

An `unordered_map` is an associative container that stores key-value pairs with unique keys. It provides fast average-case O(1) operations for access, insertion, and deletion using hash tables.

### 2. What is `bucket_count`?

The `bucket_count()` method returns the total number of buckets allocated in the `unordered_map`'s hash table. The container automatically adjusts this count to maintain optimal performance as elements are added or removed.

### 3. Is `unordered_map` better than map?

Use `unordered_map` when fast access is the priority and ordering is not needed, as it provides O(1) average operations. Use `map` when sorted order is required or O(log n) worst-case guarantees are needed.
