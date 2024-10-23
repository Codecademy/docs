---
Title: 'List'
Description: 'List is a sequential container that stores elements non-contiguous memory locations.'
Subjects:
  - 'Game Development'
  - 'Mobile Development'
  - 'Machine Learning'
Tags:
  - 'Data Structures'
  - 'Doubly Linked Lists'
  - 'Lists'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**List** in C++ is a sequential container and a part of the Standard Template Library (STL) that stores elements in non-contiguous memory locations. The list is implemented using a doubly linked list. It allows proficient insertion and deletion of elements at any known position with constant time complexity.

## Syntax

```pseudo
#include <list>

std::list<type> myList;
```

>**Note**: To use `list` in C++, include the `list` library is necessary.

## Example

```cpp
#include <iostream>

#include <list>

int main() {
  // Declare a list of integers
  std::list < int > myList;

  // Adding elements to the list
  myList.push_back(10);
  myList.push_back(20);
  myList.push_front(5);

  // Displaying elements in the list
  std::cout << "List elements: ";
  for (const auto & value: myList) {
    std::cout << value << " ";
  }
  std::cout << std::endl;

  // Removing an element
  myList.remove(10);

  // Displaying the updated list
  std::cout << "Updated list elements after deletion: ";
  for (const auto & value: myList) {
    std::cout << value << " ";
  }
  std::cout << std::endl;
  return 0;
}
```

The output for the above code is:

```shell
List elements: 5 10 20
Updated list elements after deletion: 5 20
```

## Codebyte Example

```codebyte/cpp
#include <iostream>

#include <list>

#include <string>

int main() {
  // Create a list of strings
  std::list < std::string > fruits = {
    "apple",
    "banana",
    "cherry"
  };

  // Add a fruit to the list
  fruits.push_back("orange");

  // Access elements in the list using an iterator
  for (const auto & fruit: fruits) {
    std::cout << fruit << std::endl;
  }

  return 0;
}
```
