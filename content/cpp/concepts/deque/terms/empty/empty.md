---
Title: '.empty()'
Description: 'Checks if the Deque container is empty or not.'
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

In C++, the **`.empty()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) checks if the deque container is empty (size is 0) or not.

## Syntax

```pseudo
dequeName.empty();
```

- Has no parameters passed.
- Returns `true` if empty and returns `false` if not empty.

## Example

The example below showcases the use of the `.empty()` method:

```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of integers
  std::deque<int> numbers;

  // Add elements to the deque
  numbers.push_back(100);
  numbers.push_back(150);

  std::cout << "Deque is empty: ";
  if (numbers.empty()) {
    std::cout << "True";
  }
  else {
    std::cout << "False";
  }

  std::cout << std::endl;

  return 0;
}
```

The above code generates the following output:

```shell
Deque is empty: False 
```

## Codebyte Example

The following codebyte removes all values prior to calling the `.clear()` method.
Run the following example to understand the use of the `.clear()` method:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  std::deque<std::string> myDeque;

  myDeque.push_back("Car");
  myDeque.push_back("Bus");
  myDeque.push_back("Train");
  
  if (myDeque.empty()) {
    std::cout << "Deque is empty";
  }
  else {
    std::cout << "Vehicles:";
    for (const auto& value : myDeque) {
      std::cout << ' ' << value;
    }
  }
}
```
