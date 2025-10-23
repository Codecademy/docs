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

In C++, the **`.back()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns a reference to the last element of a deque. It can be used to read or modify that element without removing it from the container.

> **Note:** Calling `.back()` on an empty deque results in undefined behavior. Use `.empty()` to check before accessing elements.

## Syntax

```pseudo
dequeName.back();
```

**Parameters:**

This method does not take any parameters.

**Return value:**

Returns a reference to the last element of the deque. If the deque is `const`, it returns a const reference.

## Example

The following example accesses the last element in a deque and then modifies it via the reference returned by `.back()`:

```cpp
#include <deque>
#include <iostream>

int main() {
  std::deque<int> values = {10, 20, 30};

  std::cout << "Back: " << values.back() << std::endl;

  // Modify the last element through the reference returned by .back()
  values.back() = 99;
  std::cout << "Back after modification: " << values.back() << std::endl;

  return 0;
}
```

This program produces the following output:

```shell
Back: 30
Back after modification: 99
```

## Codebyte Example

This example demonstrates reading and modifying the last element of a deque using `.back()`:

```codebyte/cpp
#include <deque>
#include <iostream>

int main() {
  std::deque<std::string> words = {"alpha", "beta", "gamma"};

  std::cout << words.back() << std::endl; // Prints the last element

  words.back() = "omega";                 // Modify the last element
  std::cout << words.back() << std::endl; // Prints the modified value

  return 0;
}
```
