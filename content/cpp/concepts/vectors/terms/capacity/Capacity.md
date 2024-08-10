---
Title: '.capacity()'
Description: 'Returns the storage space currently allocated for the vector'
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

The **.capacity()** method returns the storage space allocated for a vector. This is different from .size(). Capacity can be equal or greater than size. It is the total number of elements that a vector can hold without reallocation. This is automatically assigned at initialization.

## Syntax

The `.capacity()` method requires no parameters and can be called as follows

```pseudo
myvector.capacity()
```

## Example

The following code initializes the vectors and returns its capacity

```codebyte/cpp
// comparing vectors of two different capacity 

#include <iostream>
#include <vector>

int main ()
{
// initialize vectors
std::vector<int> vector_1={1,2,3};
std::vector<int> vector_2;

// set some content in vector_2:
for (int i=0; i<6; i++) vector_2.push_back(i);

//publish the capacity of each vector
std::cout << "capacity of vector_1: " << (int) vector_1.capacity() << '\n';
std::cout << "capacity of vector_2: " << (int) vector_2.capacity() << '\n';
  
return 0;
}
```

The output of the above code is
```
capacity of vector_1: 3
capacity of vector_2: 8

```

