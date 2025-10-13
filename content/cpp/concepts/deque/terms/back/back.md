---
Title: '.back()'
Description: 'Accesses the last element in a deque without removing it.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Deques'
  - 'Methods'
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.back()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns a reference to the last element of a deque. It can be used to read or modify that element without removing it from the container.

> **Note:** Calling `.back()` on an empty deque results in undefined behavior. Check `.empty()` first if the deque might be empty.

## Syntax

```pseudo
dequeName.back();
```

- Returns: A reference to the last element (`T&`); if the deque is `const`, returns `const T&`.
- Complexity: Constant time.
- Precondition: `dequeName` must not be empty.

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

This Codebyte demonstrates reading and modifying the last element of a deque using `.back()`:

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
