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

In C++, the **`.push_back()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) adds an element to the end of the deque.

## Syntax

```pseudo
dequeName.push_back(value);
```

- `value`: The element to be added to the back of the deque. It can be of any [data type](https://www.codecademy.com/resources/docs/cpp/data-types) that the `dequeName` holds.

## Example

The example below showcases the use of the `.push_back()` method:

```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of integers
  std::deque<int> numbers;

  // Use .push_back() to add elements to the deque
  numbers.push_back(10);
  numbers.push_back(20);
  numbers.push_back(30);

  // Display the elements of the deque
  std::cout << "Deque contents: ";

  for (int num : numbers) {
    std::cout << num << " ";
  }

  std::cout << std::endl;

  return 0;
}
```

The above code generates the following output:

```shell
Deque contents: 10 20 30
```

## Codebyte Example

The following codebyte adds several values to `myDeque` with the `.push_back()` method:

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
