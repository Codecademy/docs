---
Title: '.crbegin()'
Description: 'Returns a `const_reverse_iterator` pointing to the last element of the `std::array`'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

**`.crbegin()`** returns a `const_reverse_iterator` that points to the first element in the reverse traversal of the array — that is, the element that is physically last in normal order. Because the iterator is _const_, it cannot be used to modify the underlying elements.

## Syntax

```pseudo
container.crbegin()
```

**Parameters:**

`.crbegin()` takes no parameters.

**Return value:**

Returns a `const_reverse_iterator` that:

- Points to the last element in the container (i.e., the first element in reverse order).
- Cannot be used to modify the element it points to because it is const.

## Example

The following example prints the elements of a `std::array` in reverse order using constant reverse iterators (`.crbegin()` and `.crend()`):

```cpp
#include <array>
#include <iostream>

int main() {
  std::array<int, 5> nums = {10, 20, 30, 40, 50};

  // Print the array in reverse using crbegin / crend
  for (auto it = nums.crbegin(); it != nums.crend(); ++it) {
    std::cout << *it << ' ';
  }
  std::cout << '\n';
}
```

The output produced by the code will be:

```shell
50 40 30 20 10
```

## Codebyte Example

Run the following codebyte example to understand how the `.crbegin()` works:

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
