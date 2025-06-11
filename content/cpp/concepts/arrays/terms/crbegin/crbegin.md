---
Title: '.crbegin()'
Description: 'Returns a const_reverse_iterator pointing to the last element of the given array.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Data Structures'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

In C++, the **`.crbegin()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns a `const_reverse_iterator` referring to the last element of the given array, i.e., the first element in reverse order. Because the iterator is constant, it cannot be used to modify the underlying elements.

## Syntax

```pseudo
container.crbegin()
```

**Parameters:**

`.crbegin()` takes no parameters.

**Return value:**

Returns a `const_reverse_iterator` referring to the last element of the given array.

## Example

This example prints the elements of an array in reverse order using constant reverse iterators (`.crbegin()` and `.crend()`):

```cpp
#include <array>
#include <iostream>

int main() {
  std::array<int, 5> nums = {10, 20, 30, 40, 50};

  // Print the array in reverse using .crbegin() and .crend()
  for (auto it = nums.crbegin(); it != nums.crend(); ++it) {
    std::cout << *it << ' ';
  }
  std::cout << '\n';
}
```

Here is the output:

```shell
50 40 30 20 10
```

## Codebyte Example

Run this codebyte example to understand how the `.crbegin()` method works:

```codebyte/cpp
#include <array>
#include <iostream>

int main() {
  std::array<char, 4> letters = {'A', 'B', 'C', 'D'};

  // crbegin() points to the last element (index 3)
  std::cout << "Last letter: " << *letters.crbegin() << '\n';
  return 0;
}
```
