---
Title: '.clear()'
Description: 'Removes all of the elements in the vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Vectors'
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.clear()`** method is used to remove all elements from a vector.

## Syntax

```pseudo
vector.clear();
```

The `vector` must be defined using `std::vector` before the `.clear()` method can be used.

## Example

In the example below, `.clear()` is called on the `numbers` vector:

```cpp
#include <iostream>
#include <vector>

int main() {
    // Declaring a vector with 4 integers
    std::vector<int> numbers = {1, 2, 3, 4};

    // Print out vector size before clear method is called
    std::cout << 'Before: ' << numbers.size();

    // Call the clear method on numbers vector
    numbers.clear();

    // Print out the size after clear method is called
    std::cout << 'After: ' << numbers.size();
}
```

The output of the above code is:

```shell
Before: 4
After: 0
```
