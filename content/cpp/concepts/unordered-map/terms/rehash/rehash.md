---
Title: 'rehash()'
Description: 'Adjusts the number of buckets in an unordered_map to improve hashing performance.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Deques'
  - 'Methods'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`rehash()`** function changes the number of internal buckets in a `std::unordered_map` so the container holds at least the specified number. This operation redistributes all existing elements across the new bucket structure and helps reduce collisions when the container grows.

## Syntax

```pseudo
unordered_map.rehash(n);
```

**Parameters:**

- `n`: Minimum number of buckets the `unordered_map` must allocate.

**Return value:**

This function does not return a value.

## Example 1

In this example, the bucket count of an unordered_map is expanded before inserting more elements:

```cpp
#include <iostream>
#include <unordered_map>

int main() {
  std::unordered_map<std::string, int> scores = {
    {"Alex", 80},
    {"Mia", 92},
    {"Ray", 88}
  };

  std::cout << "Initial bucket count: " << scores.bucket_count() << "\n";

  scores.rehash(30);

  std::cout << "Bucket count after rehash(30): " << scores.bucket_count() << "\n";

  return 0;
}
```

The output of this code is:

```shell
Initial bucket count: 7
Bucket count after rehash(30): 31
```

## Example 2

In this example, the `unordered_map` is rehashed to show how the internal structure adjusts even when the container is small:

```cpp
#include <iostream>
#include <unordered_map>

int main() {
  std::unordered_map<int, int> mapping = {{1, 10}, {2, 20}, {3, 30}};

  std::cout << "Before rehash: " << mapping.bucket_count() << "\n";

  mapping.rehash(50);

  std::cout << "After rehash: " << mapping.bucket_count() << "\n";

  return 0;
}
```

The output of this code is:

```shell
Before rehash: 3
After rehash: 53
```

## Codebyte Example

In this example, the bucket count changes after calling rehash on a small `unordered_map`:

```codebyte/cpp
#include <iostream>
#include <unordered_map>

int main() {
  std::unordered_map<char, int> freq = {{'a', 3}, {'b', 5}, {'c', 2}};

  std::cout << "Bucket count before: " << freq.bucket_count() << "\n";

  freq.rehash(20);

  std::cout << "Bucket count after: " << freq.bucket_count() << "\n";

  return 0;
}
```

## Frequently Asked Questions

### 1. What is the rehash function in C++?

The `rehash()` function forces an unordered container to reorganize its internal bucket count so it has at least the number provided. This helps control the load factor and reduces collisions in hash-based lookups. It is typically used when anticipating container growth.

### 2. What is the difference between `unordered_set` and `unordered_map` in C++?

`unordered_set` stores only unique keys, while `unordered_map` stores key–value pairs. Both provide average constant-time lookups based on hashing, but `unordered_map` supports retrieval of associated values, whereas `unordered_set` focuses solely on whether a key exists.

### 3. What is the use of `unordered_set` in C++?

`unordered_set` offers fast insertion, deletion, and search of unique keys using hash tables. It is useful when values do not need to be associated with keys and when order does not matter, but fast existence checks do.
