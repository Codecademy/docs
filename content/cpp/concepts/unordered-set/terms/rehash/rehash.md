---
Title: 'rehash()'
Description: 'Sets the number of buckets in an unordered_set to a specified value or more, reorganizing the elements in the container.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Hash Maps'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`rehash()`** method sets the number of buckets in an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set) to a specified value or more, causing the container to reorganize its elements according to their hash values. This can help optimize the performance of the container by reducing the load factor and the number of hash collisions.

The new bucket count will be at least equal to the specified value. If the requested bucket count is smaller than the current number of buckets required to maintain the load factor, the function may have no effect.

## Syntax

```pseudo
unordered_set_name.rehash(n);
```

**Parameters:**

- `n`: The minimum number of buckets to set for the container. This is of type `size_type`.

**Return value:**

This method does not return a value (`void`).

## Example

This example demonstrates using `rehash()` to change the bucket count of an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers = {10, 20, 30, 40, 50};

  std::cout << "Initial bucket count: " << numbers.bucket_count() << "\n";
  std::cout << "Number of elements: " << numbers.size() << "\n";
  std::cout << "Load factor: " << numbers.load_factor() << "\n";

  // Increase the number of buckets
  numbers.rehash(20);

  std::cout << "\nAfter rehash(20):\n";
  std::cout << "New bucket count: " << numbers.bucket_count() << "\n";
  std::cout << "Number of elements: " << numbers.size() << "\n";
  std::cout << "Load factor: " << numbers.load_factor() << "\n";

  return 0;
}
```

This example results in the following possible output:

```shell
Initial bucket count: 7
Number of elements: 5
Load factor: 0.714286

After rehash(20):
New bucket count: 23
Number of elements: 5
Load factor: 0.217391
```

> **Note:** The actual bucket counts may vary depending on the compiler and standard library implementation.

## Codebyte Example

In this example, the code demonstrates how `rehash()` can be used to optimize an `unordered_set` before inserting a large number of elements, reducing the need for automatic rehashing:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> words;

  std::cout << "Initial bucket count: " << words.bucket_count() << "\n";

  // Pre-allocate buckets for expected elements
  words.rehash(100);

  std::cout << "Bucket count after rehash(100): " << words.bucket_count() << "\n";

  // Insert elements
  words.insert("apple");
  words.insert("banana");
  words.insert("cherry");
  words.insert("date");

  std::cout << "Bucket count after insertions: " << words.bucket_count() << "\n";
  std::cout << "Current load factor: " << words.load_factor() << "\n";
  std::cout << "Max load factor: " << words.max_load_factor() << "\n";

  return 0;
}
```
