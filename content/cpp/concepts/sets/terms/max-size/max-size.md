---
Title: 'max_size()'
Description: 'Returns the maximum number of elements the set can hold.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**`max_size()`** is a member function of C++ containers like `std::set` that returns the maximum number of elements the container can hold, based on the system or allocator limitations. It does not reflect the current size, but the theoretical upper bound.

## Syntax

```pseudo
set_name.max_size()
```

**Parameters:**

This function does not take any parameters.

**Return value:**

Returns an integral value of type `size_type` (usually `std::size_t`) representing the maximum number of elements the set can theoretically contain, based on system or allocator limitations.

## Example: Using `max_size()` with `std::set`

This code checks the maximum number of elements a `std::set` can theoretically hold, depending on system and allocator limits:

```cpp
#include <iostream>
#include <set>

int main() {
  std::set<int> mySet;
  std::cout << "Maximum size of the set: " << mySet.max_size() << std::endl;
  return 0;
}
```

The possible output of this code is:

```shell
Maximum size of the set: 4611686018427387903
```

> **Note:** The actual result may vary by system and compiler.

## Codebyte Example: Using `max_size()` with `std::set<std::string>`

Here is a runnable codebyte example that demonstrates how to use `max_size()` with a `std::set<std::string>` to check its theoretical capacity:

```codebyte/cpp
#include <iostream>
#include <set>
#include <string>

int main() {
  std::set<std::string> stringSet;
  std::cout << "Maximum size of the string set: " << stringSet.max_size() << std::endl;
  return 0;
}
```
