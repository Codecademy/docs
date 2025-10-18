---
Title: '.at()'
Description: 'Accesses an element at a specified position in the deque with bounds checking.'
Subjects:
  - 'Computer Science'
  - 'Information Technology'
Tags:
  - 'Classes'
  - 'Containers'
  - 'Deques'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.at()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) accesses an element at a specified position in the deque with bounds checking.
## Syntax

The `.at()` method has two variations: one for modifying deques and another for non-modifying (constant) deques.

```pseudo
dequeName.at(size_type position)
const dequeName.at(size_type position) const
```
- `position`: An index (of type size_type) representing the  position of the element to access within the deque. The index must be in the valid range [0, dequeName.size() - 1].

## Example

The example below showcases the use of the `.at()` method:
```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of numbers
  std::deque<int> numbers = {10, 20, 30, 40, 50};

  // Get the element at the third position (index 2)
  int my_number = numbers.at(2);

  // Print the element
  std::cout << "The element at index 2 is: " << my_number << std::endl; // Prints 30

  return 0;
}
```

## Codebyte Example 

Run the following codebyte example to understand the use of the `.at()` method:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>
int main() {
  std::deque<std::string> myDeque;

  myDeque.push_back("Apple");
  myDeque.push_back("Banana");
  myDeque.push_back("Cherry");

  // Access the element at index 1 using .at()
  std::string value = myDeque.at(1);

  // Print the retrieved value
  std::cout << "The element at index 1 is: " << value << std::endl;
}
```