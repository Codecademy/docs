---
Title: '.size()'
Description: 'Returns the number of elements in the vector.'
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

The **`.size()`** method returns the number of elements in the vector. It follows the consistency of other standard library containers, such as [maps](https://www.codecademy.com/resources/docs/cpp/maps) and [strings](https://www.codecademy.com/resources/docs/cpp/strings).

## Syntax

```pseudo
vector.size();
```

The `vector` must be defined using `std::vector` before the `.size()` method can be used.

## Example

In the example below, `.size()` is called on the `numbers` vector:

```cpp
#include <iostream>
#include <vector>

int main() {
    // Declaring a vector with 4 integers
    std::vector<int> numbers = {1, 2, 3, 4};

    // Print out vector size
    std::cout << numbers.size();
}
```

The output of the above code is:

```shell
4
```
