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

The **List** in C++ is a part of the Standard Template Library (STL) and represents a doubly linked list. It allows proficient insertion and deletion of elelments at any position with constant time complexity.

## Syntax

To implement std::list in C++, you need to include the following header:

```pseudo 
#include <list>
```
### Example

```cpp
#include <iostream>
#include <list>
int main() {
// Declare a list of integers

std::list<int> myList;
// Adding elements to the list

myList.push_back(10);  // Adds 10 to the back
myList.push_back(20);  // Adds 20 to the back
myList.push_front(5);  // Adds 5 to the front
// Displaying elements in the list
std::cout << "List elements: ";
for (const auto& value : myList) {
  std::cout << value << " ";  // Output: 5 10 20
  }
std::cout << std::endl;
// Removing an element
myList.remove(10);  // Removes the element with value 10
// Displaying the updated list
std::cout << "Updated list elements after deletion: ";
for (const auto& value : myList) {
  std::cout << value << " ";  // Output: 5 20
  }
std::cout << std::endl;
  return 0;
}

```
The output for the above code is:

Here `5`,`10`,and `20` are the numbers that are inserted in the list and also printed the updated list after deletion of `10`.

```shell
List elements: 5 10 20 
Updated list elements after deletion: 5 20 

```
## Codebyte Example

```codenyte/cpp
#include <iostream>
#include <list>
#include <string>

int main() {
    // Create a list of strings
    std::list<std::string> fruits = {"apple", "banana", "cherry"};

    // Add a fruit to the list
    fruits.push_back("orange");

    // Access elements in the list using an iterator
    for (const auto& fruit : fruits) {
        std::cout << fruit << std::endl;
    }

    return 0;
}

```

  


