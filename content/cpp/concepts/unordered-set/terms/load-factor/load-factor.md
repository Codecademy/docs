---
Title: 'load_factor()'
Description: 'Returns the current load factor in an unordered set.'
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

In C++, the **`load_factor()`** method returns the current load factor of an `unordered_set`. The load factor is defined as the average number of elements per bucket and is calculated as:

```
number of elements ÷ number of buckets
```

This value helps evaluate how efficiently the hash table is using its buckets and can indicate when rehashing may occur.

## Syntax

```pseudo
unordered_set_name.load_factor();
```

**Parameters:**

This method takes no parameters.

**Return value:**

Returns a floating-point value of type `float` representing the current load factor of the container.

## Example 1: Retrieving the Load Factor

This example shows how to retrieve the load factor after inserting elements into an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers = {1, 2, 3, 4, 5};

  std::cout << "Load factor: " << numbers.load_factor() << std::endl;

  return 0;
}
```

The output of this code is:

```shell
Load factor: 1
```

## Codebyte Example: Observing Load Factor Changes During Insertions

This example demonstrates how the load factor changes as elements are added to an `unordered_set`:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> values;

  for (int i = 1; i <= 20; i++) {
    values.insert(i);
    std::cout << "After inserting " << i
              << " elements, load factor: "
              << values.load_factor() << std::endl;
  }

  return 0;
}
```

## Frequently Asked Questions

### 1. What is the load factor of `unordered_map`?

The load factor of an `unordered_map` is the average number of elements per bucket, calculated as the number of elements divided by the number of buckets.

### 2. What does `unordered_set` do in C++?

An `unordered_set` stores unique elements in no particular order using a hash table, allowing fast average-time insertion, deletion, and lookup.

### 3. How to implement `unordered_set` in C++?

Include the `<unordered_set>` header, create an `unordered_set` object, and insert elements using insert() or initializer lists while relying on hashing for storage and access.
