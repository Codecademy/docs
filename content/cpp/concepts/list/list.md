---
Title: 'List'
Description: 'List in C++ is a sequential container that stores elements in non-contiguous memory locations, allowing for efficient insertion and deletion at any position.'
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

**List** in C++ is a sequential container and part of the Standard Template Library (STL) that stores elements in non-contiguous memory locations. It is implemented as a doubly linked list, allowing efficient insertion and deletion of elements at any known position with average constant time complexity.

## Syntax

```pseudo
#include <list>

std::list<data-type> name_of_list;
```

- `data-type`: Specifies the type of elements stored in the list, which can be any valid C++ type (e.g., `int`, `double`, or user-defined types).
- `name_of_list`: The variable name for the list instance, used to reference and manipulate the list within the code.

## Example

```cpp
#include <iostream>

#include <list>

int main() {
  // Declare a list of integers
  std::list <int> myList;

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

Run the following codebyte example to understand how List works in C++:

```codebyte/cpp
#include <iostream>

#include <list>

#include <string>

int main() {
  // Create a list of strings
  std::list <std::string> fruits = {
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
