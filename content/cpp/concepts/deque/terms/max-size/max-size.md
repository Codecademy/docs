---
Title: '.max_size()'
Description: 'Returns the maximum number of elements a deque can hold.'
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

In C++, the **`.max_size()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns the maximum number of elements a deque can hold. This value reflects the maximum possible size based on system or library constraints. However, it does not guarantee that the container can actually grow to that size—memory allocation may still fail before reaching the reported limit.

## Syntax

```pseudo
dequeName.max_size();
```

**Parameters:**

The method does not take any parameters.

**Return value:**

Returns the maximum number of elements the deque can potentially hold as a value of type `size_type`.

## Example

In this example, the maximum possible number of elements a deque can hold on the system is retrieved:

```cpp
#include <iostream>
#include <deque>

int main() {
  std::deque<int> mydeque;

  // Display the maximum possible number of elements
  std::cout << "Maximum possible elements: " << mydeque.max_size() << '\n';
}
```

Example output on a 64-bit system:

```shell
Maximum possible elements: 4611686018427387903
```

## Codebyte Example

In this example, a requested size is compared with the maximum possible size of a deque, and the container is resized only if the size is allowed:

```codebyte/cpp
#include <iostream>
#include <deque>

int main() {

  std::deque<int> mydeque;
  unsigned int requested_size = 5;  // example requested size

  if (requested_size < mydeque.max_size()) {
    mydeque.resize(requested_size);
    std::cout << "Deque resized to " << requested_size << " elements.\n";
  } else {
    std::cout << "Requested size exceeds maximum allowed.\n";
  }

  std::cout << "Current deque size: " << mydeque.size() << std::endl;

  return 0;
}
```
