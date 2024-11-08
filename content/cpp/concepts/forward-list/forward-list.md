---
Title: 'Forward List'
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

A **`Forward List`** is a sequence container that allows efficient insertions and deletions from the front of the list. Forward lists work by storing a memory address to the first element of the list and having each element store data and a pointer to the memory location of the next element. Compared to arrays, forward lists offer quicker insertions and deletions at the start of the list, at the cost of direct access to elements by index.

## Syntax

```pseudo
#include <forward_list>

std::forward_list<type> forwardlist;
```

> **Note:** To use `foward_list`, the header `<forward_list>` must be included.

## Example 1

The following example shows how to create a forward list and iterate over it.

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

> **Note:** Unlike arrays, forward lists do not support direct access to elements through indices so to access a certain element, all elements before that element must be iterated over.

## Codebyte Example

The following codebyte example demonstrates the use of `forward_list` in C++ by initializing a list, inserting an element at the front, and removing an element.

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
