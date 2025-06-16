---
Title: '.cbegin'
Description: 'Returns a constant iterator to the beginning of a container.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Containers'
  - 'Iterators'
CatalogContent:
  - 'learn-c++'
  - 'paths/computer-science'
---

**`.cbegin()`** is a member function of C++ containers (like `vector`, `list`, `map`, etc.) that returns a constant iterator to the first element of the container. This iterator cannot be used to modify the element it points to. It's commonly used when read-only access to the container’s elements is desired.

`.cbegin()` is typically used when iterating over a container without modifying its elements. It enforces const-correctness and is a safer choice when the container is `const` or when preventing accidental modification is desired.

## Syntax

```pseudo
container.cbegin();
```

**Parameters:**

- The `.cbegin()` does not take any parameters.

**Return value:**

- Returns a constant iterator pointing to the first element of the container.

## Difference Between `begin()` and `cbegin()`

| Feature         | `begin()`                                | `cbegin()`                             |
| --------------- | ---------------------------------------- | -------------------------------------- |
| **Return Type** | Mutable iterator                         | Constant iterator                      |
| **Mutability**  | Supports modification of elements        | Prevents modification of elements      |
| **Use Case**    | Suitable when element updates are needed | Ideal for read-only access to elements |
| **C++ Version** | Available since C++98                    | Introduced in C++11                    |

## Example

In this example, `.cbegin()` returns a constant iterator pointing to the first element of the array, ensuring that the value cannot be modified through the iterator:

```cpp
#include <iostream>
#include <array>

int main() {
  std::array<int, 5> nums = {10, 20, 30, 40, 50};

  // Using cbegin to get a constant iterator to the beginning
  std::array<int, 5>::const_iterator it = nums.cbegin();

  std::cout << "First element: " << *it << std::endl;

  return 0;
}
```

The output of this code will be:

```shell
First element: 10
```

## Codebyte Example

In this example, `.cbegin()` is used to iterate over a vector in read-only mode, preventing accidental modification of its elements:

```codebyte/cpp
#include <iostream>
#include <vector>

int main() {
  std::vector<int> numbers = {1, 2, 3, 4, 5};

  // Using cbegin to get a const iterator to the beginning
  for (auto it = numbers.cbegin(); it != numbers.cend(); ++it) {
    std::cout << *it << ' ';
    // *it = 10; // Error: can't modify element through const_iterator
  }

  return 0;
}
```
