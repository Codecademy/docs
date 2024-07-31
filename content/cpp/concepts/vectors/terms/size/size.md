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

The **`.size()`** method returns the number of elements in the vector.
`.size()` is there to follow the consistency of other standard library containers (e.g., [maps](https://www.codecademy.com/resources/docs/cpp/maps) and [strings](https://www.codecademy.com/resources/docs/cpp/strings)).

## Syntax

```pseudo
vector.size();
```

The `vector` must be defined with `std::vector` prior to using with the `.size()` method.

## Codebyte Example

In the example below, `.size()` is called on the `numbers` vector:

```codebyte/cpp
#include <iostream>
#include <vector>

int main() {
    // Declaring a vector with 4 integers
    std::vector<int> numbers = {1, 2, 3, 4};

    // Print out vector size
    std::cout << numbers.size();
}
```
