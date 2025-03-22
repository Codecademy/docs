---
Title: '.capacity()'
Description: 'Returns the currently allocated storage space for a vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Methods'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.capacity()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns the currently allocated storage space for a vector. It differs from the [`.size()`](https://www.codecademy.com/resources/docs/cpp/vectors/size) method, which represents the current number of elements in a vector. The value of `.capacity()` can be equal to or greater than the value of `.size()`. It indicates the total number of elements that a vector can hold without requiring reallocation. This value is automatically assigned to a vector during initialization.

## Syntax

The `.capacity()` method requires no parameters and can be used as:

```pseudo
myvector.capacity()
```

- `myvector`: The vector on which the method is to be applied.

## Example

The following example initializes two vectors and returns their capacities using the `.capacity()` method:

```cpp
// Comparing vectors with different capacities
#include <iostream>
#include <vector>

int main()
{
  // Initialize two vectors
  std::vector<int> vector_1 = {1, 2, 3};
  std::vector<int> vector_2;

  // Add elements to vector_2
  for (int i = 0; i < 6; i++)
    vector_2.push_back(i);

  // Print the capacity of each vector
  std::cout << "Capacity of vector_1: " <<  vector_1.capacity() << '\n';
  std::cout << "Capacity of vector_2: " <<  vector_2.capacity() << '\n';

  return 0;
}
```

The above code results in the following output:

```shell
Capacity of vector_1: 3
Capacity of vector_2: 8
```
