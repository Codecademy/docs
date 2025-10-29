---
Title: '.back()'
Description: 'Returns a reference to the last element in the deque.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Data Structures'
  - 'Deques'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.back()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns a reference to the last element in a [deque](https://www.codecademy.com/resources/docs/cpp/deque). It allows direct access to that element for reading or modifying without removing it.

> **Note:** Calling `.back()` on an empty deque leads to undefined behavior. Check with [`.empty()`](https://www.codecademy.com/resources/docs/cpp/deque/empty) before using `.back()`.

## Syntax

```pseudo
dequeName.back();
```

**Parameters:**

This method does not take any parameters.

**Return value:**

Returns a reference to the last element of the deque. If the deque is `const`, it returns a const reference.

## Example: Accessing and Updating the Last Element

This example retrieves the last number in a deque, updates it, and displays the change:

```cpp
#include <deque>
#include <iostream>

int main() {
  std::deque<int> scores = {45, 67, 89};

  std::cout << "Last score: " << scores.back() << std::endl;

  // Update the last element
  scores.back() = 100;

  std::cout << "Updated last score: " << scores.back() << std::endl;
  return 0;
}
```

This program produces the following output:

```shell
Last score: 89
Updated last score: 100
```

## Codebyte Example: Using `.back()` in a Conditional Check

This example shows how `.back()` can be used to verify or modify the final value in a deque:

```codebyte/cpp
#include <deque>
#include <iostream>

int main() {
  std::deque<std::string> tasks = {"plan", "write", "review"};

  if (tasks.back() == "review") {
    tasks.back() = "submit"; // Update the last task
  }

  std::cout << "Final task: " << tasks.back() << std::endl;
  return 0;
}
```
