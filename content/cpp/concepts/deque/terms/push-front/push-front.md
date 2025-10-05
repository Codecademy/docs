---
Title: '.push_front()'
Description: 'Adds an element to the front of the deque.'
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

In C++, the **`.push_front()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) inserts an element at the front of the deque, pushing existing elements toward the back.

## Syntax

```pseudo
dequeName.push_front(value);
```

- `value`: The element added to the front of the deque. It must match the [data type](https://www.codecademy.com/resources/docs/cpp/data-types) stored in `dequeName`.

## Example

The example below uses `.push_front()` to place new values at the front of a deque:

```cpp
#include <iostream>
#include <deque>

int main() {
  std::deque<int> numbers = {20, 30};

  // Add elements to the front of the deque
  numbers.push_front(10);
  numbers.push_front(5);

  std::cout << "Deque contents: ";

  for (int num : numbers) {
    std::cout << num << ' ';
  }

  std::cout << std::endl;

  return 0;
}
```

The above code produces the following output:

```shell
Deque contents: 5 10 20 30
```

## Codebyte

This codebyte moves new tasks to the front of the deque with `.push_front()`:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  std::deque<std::string> tasks = {"review code", "write tests"};

  tasks.push_front("update docs");
  tasks.push_front("sync repo");

  for (const auto& task : tasks) {
    std::cout << task << std::endl;
  }
}
```
