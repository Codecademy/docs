---
Title: 'forward_list'
Description: 'Forward List is a sequence container that allows efficient insertions and deletions from the front of the list.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Lists'
  - 'Memory'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **`forward_list`** is a sequence container in C++ that allows efficient insertions and deletions at the front of the list. It stores a memory address to the first element, with each element containing data and a pointer to the next element. Compared to arrays, `forward_list` offers faster insertions and deletions at the front but lacks direct access to elements by index.

## Syntax

```pseudo
#include <forward_list>

std::forward_list<type> list_name;
```

- `type`: The type of the elements in the `forward_list`. This can be any data type, such as `int`, `std::string`, or user-defined types.
- `list_name`: The name of the `forward_list` object being declared.

> **Note:** To use `std::forward_list`, the header `<forward_list>` must be included.

## Example

The following example shows how to create a `forward_list` and iterate over it:

```cpp
#include <iostream>
#include <forward_list>

int main() {
  std::forward_list<int> list = {1,2,3,4,5};

  std::cout << "Output:" << std::endl;

  for(auto it = list.begin(); it != list.end(); ++it) {
    std::cout << *it << " ";
  }
  std::cout << std::endl;
}
```

The output of the above program will be:

```shell
Output:
1 2 3 4 5
```

> **Note:** Unlike arrays, `forward_list` does not support direct access to elements through indices. To access a specific element, all preceding elements must be iterated over.

## Codebyte Example

The following codebyte example demonstrates the use of `forward_list` in C++ by initializing a list with elements, inserting an element at the front, removing an element from the front, and iterating over the list to print the remaining elements:

```codebyte/cpp
#include <iostream>
#include <forward_list>

int main() {
    // Initialize a forward_list with some elements
    std::forward_list<int> list = {10, 20, 30};

    // Insert an element at the front
    list.push_front(5);

    // Remove an element from the front
    list.pop_front();

    // Iterate over the list and print each element
    for (auto it = list.begin(); it != list.end(); ++it) {
        std::cout << *it << " ";
    }

    return 0;
}
```
