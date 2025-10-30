---
Title: '.front()'
Description: 'Returns a reference to the first element of the deque'
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

In C++, the **`.front()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns a reference to the first element in the [deque](https://www.codecademy.com/resources/docs/python/deque).

## Syntax

```pseudo
deque_name.front()
```

**Parameters:**

`.front()` does not take any parameters

**Return value:**

- Returns a reference to the first element of the deque.
  - For a non-const deque, returns `T&` (modifiable).
  - For a const deque, returns const `T&` (read-only).

## Example

The example below demonstrates use of `.front()` to access the first element in a deque:

```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of integers
  std::deque<int> numbers;

  // Add some elements to the deque
  numbers.push_back(100);
  numbers.push_back(200);
  numbers.push_back(300);

  // Access the first element using .front()
  std::cout << "First element: " << numbers.front() << std::endl;

  // Modify the first element
  numbers.front() = 50;

  // Display updated deque contents
  std::cout << "Updated deque: ";
  for (int num : numbers) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  return 0;
}
```

The output of this program will be:

```shell
First element: 100
Updated deque: 50 200 300
```

This shows that `.front()` allows both access and modification of the deque’s first element.

## Codebyte Example

Run the following codebyte example to understand the use of `.front()` method:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  // Create a deque of strings
  std::deque<std::string> myDeque;

  // Add elements to the deque
  myDeque.push_back("Hello");
  myDeque.push_back("World");
  myDeque.push_back("!");

  // Print the front element
  std::cout << "Front element before change: " << myDeque.front() << std::endl;

  // Modify the front element
  myDeque.front() = "Hi";

  // Print the modified front element
  std::cout << "Front element after change: " << myDeque.front() << std::endl;

  // Print all elements of the deque
  std::cout << "Complete deque: ";
  for (const auto& str : myDeque) {
    std::cout << str << " ";
  }
  std::cout << std::endl;

  return 0;
}
```
