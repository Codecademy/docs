---
Title: '.pop_back()'
Description: 'Removes the last element from a deque.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Containers'
  - 'Deques'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.pop_back()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) removes the element at the back of a [deque](https://www.codecademy.com/resources/docs/cpp/deque).

If the deque is empty, calling `.pop_back()` results in undefined behavior (UB), meaning the program might crash or behave unpredictably. To prevent this, always check if the deque is not empty using `.empty()` before calling `.pop_back()`.

## Syntax

```pseudo
dequeName.pop_back();
```

**Parameters:**

`.pop_back()` method does not take any parameters.

**Return value:**

The `.pop_back()` method does not return a value.

## Example

The example below showcases the use of the `.pop_back()` method, with a safety check using `.empty()` to avoid UB:

```cpp
#include <iostream>
#include <deque>

int main() {

  // Initialize a deque of integers with 4 elements
  std::deque<int> numbers = {10, 20, 30, 40};

  // Check if the deque contains elements
  if (!numbers.empty()) {

    // Display the last element from the deque before removal
    std::cout << "Last element: " << numbers.back() << std::endl;

    // Remove the last element from the deque
    numbers.pop_back();

    // Display the new last element from the deque after removal
    std::cout << "New last element: " << numbers.back() << std::endl;
  } else {

    // Display if the deque is empty
    std::cout << "Deque is empty" << std::endl;
  }

  return 0;
}
```

The above code generates the following output:

```shell
Last element: 40
New last element: 30
```

## Codebyte Example

The following codebyte removes the last element from `myDeque` using the `.pop_back()` method and displays the updated size of the deque:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {

  std::deque<std::string> myDeque = {"A", "B", "C", "D"};

  std::cout << "Last element: " << myDeque.back() << std::endl;
  std::cout << "Deque size: " << myDeque.size() << std::endl << std::endl;

  if (!myDeque.empty()) {
    myDeque.pop_back();
  }

  std::cout << "New last element: " << myDeque.back() << std::endl;
  std::cout << "Deque size: " << myDeque.size() << std::endl;

  return 0;
}
```
