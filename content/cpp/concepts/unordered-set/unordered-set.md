---
Title: 'Unordered Sets'
Description: 'Unordered sets are associative containers that store unique elements in no specific order, offering fast retrieval through a hash-based implementation.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Types'
  - 'Elements'
  - 'Hash Maps'
  - 'Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, **unordered sets** are associative containers that store unique elements in no particular order, offering fast look-ups, insertions, and deletions through a hash table. Unlike [`std::set`](https://www.codecademy.com/resources/docs/cpp/sets), which maintains elements in sorted order using a binary tree, unordered sets provide better performance with average constant time complexity for key operations. If elements are needed in a sorted order, `std::set` can be used, although it comes with higher overhead due to its tree-based structure.

## Syntax

```pseudo
#include <unordered_set>
std::unordered_set<data_type> set_name;
```

- `data_type`: The [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the elements to be stored in the unordered set (e.g., `int`, `string`). Each element in the unordered set will be of this type.
- `set_name`: The name of the unordered set being defined.

## Example

In this example, an unordered set is initiated and elements are inserted using the [`.insert()`](https://www.codecademy.com/resources/docs/cpp/sets/insert) method. The elements are then printed:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  // Initiate an unordered set of elements (integers in this example)
  std::unordered_set<int> numSet;

  // Insert the elements
  numSet.insert(10);
  numSet.insert(20);
  numSet.insert(30);
  numSet.insert(40);

  // Print out the set elements
  std::unordered_set<int> :: iterator iter;
  for (iter = numSet.begin(); iter != numSet.end(); iter++) {
  std::cout<< *iter << " ";
  }
}
```

The output would be:

```shell
20 40 30 10
```

> **Note**: The element order is not guaranteed to be consistent across executions.

## Ordered vs Unordered Sets

| Feature     | Ordered Set (`std::set`)                        | Unordered Set (`std::unordered_set`)                          |
| ----------- | ----------------------------------------------- | ------------------------------------------------------------- |
| Order       | Elements in sorted order                        | No particular order                                           |
| Structure   | Tree-based                                      | Hash table                                                    |
| Time        | O(log n)                                        | O(1)                                                          |
| Memory      | More efficient memory usage                     | Higher memory usage as a result of hashing                    |
| Performance | Consistent performance across all cases         | Can degrade to O(n) if hashing is poor                        |
| Usage       | Use when element ordering is useful or required | Use when efficiency is required and ordering is not important |

> **Note**: Neither `std::set` nor `std::unordered_set` allows duplicate elements.

## Codebyte Example

This example builds on the previous example, adding a duplicate element to show it won't be included, and then checking if an element exists:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  // Initiate an unordered set of elements (integers in this example)
  std::unordered_set<int> numSet = {10, 20, 30, 40};

  // Add a duplicate element
  numSet.insert(20);

  // Print out the set elements
  std::unordered_set<int> :: iterator iter;
  for (iter = numSet.begin(); iter != numSet.end(); iter++) {
  std::cout<< *iter << " ";
  }

  // Add a line break
  std::cout << "\n";

  // Check if an element exists
  if (numSet.find(20) != numSet.end()) {
  std::cout << "20 is in the set.";
  } else {
    std::cout << "20 is not in the set.";
  }
}
```
