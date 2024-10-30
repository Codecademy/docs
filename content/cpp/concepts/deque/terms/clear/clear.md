---
Title: '.clear()'
Description: 'Removes all elements from the deque.'
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

In C++, the **`.clear()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) removes all elements from the deque container, leaving the container with a size of 0.

## Syntax

```pseudo
dequeName.clear();
```

- Has no parameters passed.

## Example

The example below showcases the use of the `.clear()` method:

```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of integers
  std::deque<int> numbers;

  // Add elements to the deque
  numbers.push_back(50);
  numbers.push_back(100);
  numbers.push_back(150);
  numbers.push_back(200);

  // Display the elements of the deque
  std::cout << "My deque contains: ";
  for (int num : numbers) {
    std::cout << num << " ";
  }

  numbers.clear();
  std::cout << std::endl;

  numbers.push_back(200);

  std::cout << "My deque contains: ";
  for (int num : numbers) {
    std::cout << num << " ";
  }

  std::cout << std::endl;

  return 0;
}
```

The above code generates the following output:

```shell
My deque contains: 50 100 150 200 
My deque contains: 200 
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

  myDeque.push_back("A");
  myDeque.push_back("B");
  myDeque.push_back("C");
  
  myDeque.clear();
  myDeque.push_back("D");
  
  for (const auto& value : myDeque) {
    std::cout << ' ' << value;
  }
}
```
