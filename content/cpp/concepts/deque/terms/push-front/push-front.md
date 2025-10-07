---
Title: '.push_front()'
Description: 'Adds an element to the beginning of the deque.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Deques'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.push_front()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) adds an element to the beginning of the deque.

## Syntax

```pseudo
dequeName.push_front(value);
```

**Parameters:**

- `value`: The element to be added to the front of the deque. It can be of any [data type](https://www.codecademy.com/resources/docs/cpp/data-types) that the `dequeName` holds.

**Return value:**

`void` (no value is returned).

## Example

The example below showcases the use of the `.push_front()` method:

```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of integers
  std::deque<int> numbers;

  // Use .push_front() to add elements to the beginning of the deque
  numbers.push_front(30);
  numbers.push_front(20);
  numbers.push_front(10);

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

The following codebyte adds several values to `myDeque` with the `.push_front()` method:

```codebyte/cpp
#include <iostream>
#include <deque>

int main() {
  std::deque<int> myDeque;

  // Add elements to the front of the deque
  myDeque.push_front(100);
  myDeque.push_front(200);
  myDeque.push_front(300);

  // Display the deque
  std::cout << "Deque elements: ";
  for (int element : myDeque) {
    std::cout << element << " ";
  }
  std::cout << std::endl;

  return 0;
}
```
