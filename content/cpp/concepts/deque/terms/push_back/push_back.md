---
Title: '.push_back()'
Description: 'Adds an element to the end of the deque.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'OOP'
  - 'Classes'
  - 'Deques'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.push_back()`** method adds an element to the end of the `deque`.

## Syntax

The `push_back()` method is called on a `deque` using the following syntax:

```pseudo
dequeName.push_back(value);
```

> **Note:** Each `value` in `dequeName` must be of the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types).

## Codebyte Example

The following example adds several values to `myDeque` with the `.push_back()` method:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  std::deque<std::string> myDeque;

  myDeque.push_back("A");
  myDeque.push_back("B");
  myDeque.push_back("C");
  myDeque.push_back("D");

  for (const auto& value : myDeque) {
    std::cout << ' ' << value;
  }
}
```
