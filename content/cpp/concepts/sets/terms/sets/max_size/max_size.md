---
Title: 'max_size()'
Description: 'Returns the maximum number of elements a set can hold in C++.'
Subjects:
  - 'C++'
  - 'Data Structures'
Tags:
  - 'sets'
  - 'member functions'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/c-plus-plus'
---

The **`max_size()`** method of a C++ set returns the maximum number of elements that the set can hold>

## Syntax

```cpp
size_type max_size() const noexcept;
```

- **Return Value**: A value of type `size_type` (typically `std::size_t`), representing the maximum n>
- **Parameters**: None.
- **Complexity**: Constant time, O(1).
- **Exception Safety**: `noexcept`, meaning it does not throw exceptions.
- **Notes**: The actual value is implementation-dependent and may vary across different systems or co>

## Example

To check the maximum number of elements a `std::set` can hold:

```cpp
#include <iostream>
#include <set>

int main() {
    std::set<int> mySet;
    std::cout << "Maximum size of the set: " << mySet.max_size() << std::endl;
    return 0;
}
```

**Output** (example, actual value depends on the system):
```
Maximum size of the set: 4611686018427387903
```

## Codebyte Example

Below is a runnable example demonstrating `max_size()` with a `std::set<std::string>`:

```codebyte/cpp
#include <iostream>
#include <set>

int main() {
    std::set<std::string> stringSet;
    std::cout << "Maximum size of the string set: " << stringSet.max_size() << std::endl;
    return 0;
}
```

**Expected Output** (example, actual value depends on the system):
```
Maximum size of the string set: 2305843009213693951
```
