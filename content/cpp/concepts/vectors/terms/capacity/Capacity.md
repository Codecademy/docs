---
Title: '.capacity()'
Description: 'Returns the storage space currently allocated for the vector'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.capacity()`** method returns the storage space currently allocated for a vector. This is differs from [`.size()`](https://www.codecademy.com/resources/docs/cpp/vectors/size), which represents the number of elements currently in the vector. Capacity can be equal to or greater than size. It indicates the total number of elements the vector can hold without requiring reallocation. This value is automatically assigned when the vector is initialized.

## Syntax

The `.capacity()` method requires no parameters and can be used as:

```pseudo
myvector.capacity()
```

## Example

The following code initializes the vectors and returns its capacity:

```cpp
// Comparing vectors with different capacities
#include <iostream>
#include <vector>

int main ()
{
  // Initialize vectors
  std::vector<int> vector_1 = {1, 2, 3};
  std::vector<int> vector_2;

  // Add elements to vector_2:
  for (int i = 0; i < 6; i++) 
    vector_2.push_back(i);

  //Print the capacity of each vector
  std::cout << "Capacity of vector_1: " <<  vector_1.capacity() << '\n';
  std::cout << "Capacity of vector_2: " <<  vector_2.capacity() << '\n';
    
  return 0;
}
```

```shell
capacity of vector_1: 3
capacity of vector_2: 8
```
