---
title: at()
description: Access an element at a specific index within a container such as std::deque with bounds checking.
---

# at()

## Description

The `at()` method in C++ is used to access an element at a specific index within a container, such as a `std::deque`.  
It provides bounds checking, ensuring that the requested index is within the valid range of the container.  
If the index is invalid, it throws an `std::out_of_range` exception instead of causing undefined behavior.

---

## Syntax

```cpp
deque_name.at(index);
````

**Parameters**

* `deque_name` — The name of the `std::deque` instance.
* `index` — The zero-based position of the element to access.

**Returns**
A reference to the element at the specified position.

**Throws**
`std::out_of_range` — If the index is less than 0 or greater than or equal to the size of the deque.

---

## Example

```cpp
#include <iostream>
#include <deque>
#include <stdexcept>

int main() {
  std::deque<int> d = {10, 20, 30, 40, 50};

  try {
    int value = d.at(2);
    std::cout << "Element at index 2: " << value << std::endl;
  } catch (const std::out_of_range& e) {
    std::cout << "Error: " << e.what() << std::endl;
  }

  d.at(0) = 100;
  std::cout << "Modified element at index 0: " << d.at(0) << std::endl;

  try {
    d.at(10) = 999;
  } catch (const std::out_of_range& e) {
    std::cout << "Error accessing invalid index: " << e.what() << std::endl;
  }

  return 0;
}
```

---

## Codebyte

```cpp
#include <iostream>
#include <deque>
#include <stdexcept>

int main() {
  std::deque<char> letters = {'A', 'B', 'C', 'D'};

  char element = letters.at(1);
  std::cout << "Element at index 1: " << element << "\n";

  try {
    letters.at(5);
  } catch (const std::out_of_range& e) {
    std::cout << "Access failed: Out of range exception caught.\n";
  }

  return 0;
}
```