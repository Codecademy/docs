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
arrayName.cbegin();
```

**Parameters:**

- The `.cbegin()` does not take any parameters.

**Return value:**

- Returns a constant iterator pointing to the first element of the container.

## Difference Between `begin()` and `cbegin()`

The `.begin()` function returns a modifiable iterator (unless the container itself is `const`), allowing modification of elements through the iterator. In contrast, .cbegin() always returns a constant iterator, which prevents modification of the elements it points to.

Use `.cbegin()` in these cases:

- When working with a `const` container.
- When you want to enforce read-only access to the elements.

## Const-Correctness and Best Practices

Using `cbegin()` helps maintain const-correctness in your code. It prevents bugs caused by unintended modifications and improves code readability by making the developer’s intention explicit.

It’s a good practice to prefer `cbegin()` over `begin()` when mutation is not needed.

## Codebyte Example

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
