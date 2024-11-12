---
Title: '.empty()'
Description: 'Checks if a given deque container is empty.'
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

In C++, the **`.empty()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) checks if a given deque container is empty (i.e., if its size is 0). The method returns `true` if it is empty and `false` otherwise.

## Syntax

```pseudo
dequeName.empty();
```

- `dequeName`: The [variable](https://www.codecademy.com/resources/docs/cpp/variables) name of the deque being checked for emptiness.

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

The following codebyte uses the **`.clear()`** method on a deque and checks its emptiness by outputting a boolean value using the `.empty()` method:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  std::deque<std::string> myDeque;

  myDeque.push_back("Car");
  myDeque.push_back("Bus");
  myDeque.push_back("Train");

  // Display vehicles before clearing the deque
  std::cout << "Vehicles before clearing:";
  for (const auto& value : myDeque) {
    std::cout << ' ' << value;
  }
  std::cout << std::endl;

  // Clear all elements from the deque
  myDeque.clear();

  // Boolean output indicating if the deque is empty after clearing
  std::cout << "Deque is empty after clearing: " << std::boolalpha << myDeque.empty() << std::endl;

  return 0;
}
```
