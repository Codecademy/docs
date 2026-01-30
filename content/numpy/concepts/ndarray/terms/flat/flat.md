---
Title: 'flat'
Description: 'Returns a 1-D iterator over the elements of an ndarray.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Iterators'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`flat`** attribute returns a 1-D [iterator](https://www.codecademy.com/resources/docs/python/iterators) over all elements of an `ndarray`, allowing access to each element as if the array were a single flat list. This is useful for loops where the dimensionality or shape of the array is irrelevant and every element needs to be processed in linear order. Iteration follows standard C-style (row-major) ordering.

## Syntax

The `flat` attribute is accessed directly on the NumPy array object:

```pseudo
array.flat
```

**Parameters:**

The attribute takes no parameters.

**Return value:**

Returns an object of type `numpy.flatiter`, which provides efficient, one-dimensional traversal of the array data.

## Example

This example demonstrates how to use `flat` to iterate through every element of a 2x3 array without needing nested loops:

```py
import numpy as np

# Create a 2x3 array
multi_dim_array = np.array([[1, 2, 3], [4, 5, 6]])

print("Original Array:")
print(multi_dim_array)

print("\nIterating using .flat:")
for element in multi_dim_array.flat:
  print(element)

# flat can also be used for assignment
flat_view = multi_dim_array.flat
flat_view[0] = 99

print("\nArray after assignment via .flat:")
print(multi_dim_array)
```

The output for this code is:

```shell
Original Array:
[[1 2 3]
 [4 5 6]]

Iterating using .flat:
1
2
3
4
5
6

Array after assignment via .flat:
[[99  2  3]
 [ 4  5  6]]
```

## Codebyte Example

Use the codebyte below to access elements of a multi-dimensional array using a single index via `flat`:

```codebyte/python
import numpy as np

my_array = np.array([
  [10, 11],
  [20, 21],
  [30, 31]
])

# Access the element at the flattened index 3 (which is element at position [1, 1])
flat_index_3 = my_array.flat[3]

print(f"Original array shape: {my_array.shape}")
print(f"Element at flat index 3: {flat_index_3}")
```
