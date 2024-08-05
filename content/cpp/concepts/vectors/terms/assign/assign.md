---
Title: '.assign()'
Description: 'Assigns new values to the elements of a vector, replacing its current contents.'
Subjects:
    - 'Computer Science'
    - 'Code Foundations'
Tags:
    - 'Vectors
    - 'Methods'
    - 'Data Structures
CatalogContent:
    - 'learn-c-plus-plus'
    - 'paths/computer-science'
---

In C++, the **`.assign()`** method is used with [`vectors`](https://www.codecademy.com/resources/docs/cpp/vectors) to replace existing elements or add new values. This method can either fill the vector with a specified number of copies of a value or replace the vector's contents with elements from a range, modifying its size if necessary.

> **Note:** To use vectors, it is necessary to `#include` the `vector` library.

## Syntax

```pseudo
vector.assign(n, value);
vector.assign(first, last);
```

- `vector`: The instance of the `std::vector` class where the elements will be assigned.
- `n`: The number of elements to be assigned.
- `value`: The value to be assigned to each element.
- `first`: The iterator pointing to the beginning of the range to be copied.
- `last`: The iterator pointing to the end of the range to be copied.

## Example


//NOTE: I am referencing cppreference.com and cplusplus.com for info on this topic.