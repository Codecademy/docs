---
Title: '.cend()'
Description: 'Returns a constant iterator pointing just past the last element of an array container.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Iterators'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**`.cend()`** is a member function of standard C++ containers (such as arrays, [vectors](https://www.codecademy.com/resources/docs/cpp/vectors), and [sets](https://www.codecademy.com/resources/docs/cpp/sets)) that returns a constant iterator pointing just past the last element of the container. The "c" in `.cend()` stands for "const", indicating that the iterator cannot modify the elements it accesses. This function is commonly used for read-only traversal and is typically employed in range checks or `for` loops to define the end boundary of the container.

## Syntax

```pseudo
array.cend();
```

**Parameters:**

This function does not take any parameters.

**Return value:**

Returns a constant iterator pointing just past the last element of the container.

## Example: Using `.cend()` to Access the Last Element

This example prints the last element of the array by using `.cend()` and moving one step backward:

```cpp
#include <iostream>
#include <array>

int main() {
  std::array<int, 2> array = {1, 2};

  // Get constant iterator just past the last element
  auto it = array.cend();

  // Move one step back to point to the last element
  std::cout << *(std::prev(it)) << "\n";

  return 0;
}
```

The output of this code will be:

```shell
2
```

## Codebyte Example: Using `.cend()` to Print an Array

This codebyte creates an array and uses `.cbegin()` and `.cend()` to print all of its elements:

```codebyte/cpp
#include <iostream>
#include <array>

int main() {
  std::array<int, 4> array = {1, 2, 3, 4};

  // Prints all elements in the array using const iterators
  for (auto i = array.cbegin(); i != array.cend(); ++i) {
    std::cout << *i << " ";
  }

  return 0;
}
```
