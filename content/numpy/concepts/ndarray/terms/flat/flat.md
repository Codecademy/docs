---
Title: '.flat'
Description: 'Returns a 1-D iterator over the elements of an array, allowing linear access to multi-dimensional data.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Array'
  - 'Iterator'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.flat`** attribute is a powerful feature of the NumPy `ndarray`. It returns a **1-D iterator** over all the elements of a multi-dimensional array, allowing you to access or iterate through the array's elements as if it were a single, flat list.

This is highly useful for loops where the actual dimensionality or shape of the array is irrelevant, and you simply need to process every element in a linear fashion. The order of iteration follows the standard C-style (row-major) ordering.

## Syntax

The `.flat` attribute is accessed directly on the NumPy array object.

```pseudo
array.flat
```

## Parameters

The attribute takes no parameters.

## Return Value

Returns an object of type `numpy.flatiter`, which is an iterator designed for efficient, single-dimension traversal of the array data.

## Example

This example demonstrates how to use `.flat` to iterate through every element of a 2x3 array without needing nested loops.

```python
import numpy as np

# Create a 2x3 array
multi_dim_array = np.array([[1, 2, 3], [4, 5, 6]])

print("Original Array:")
print(multi_dim_array)

print("\nIterating using .flat:")
for element in multi_dim_array.flat:
  print(element)

# .flat can also be used for assignment
flat_view = multi_dim_array.flat
flat_view[0] = 99

print("\nArray after assignment via .flat:")
print(multi_dim_array)
```

Output:

```
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

## Codebyte

Use the Codebyte below to access elements of a multi-dimensional array using a single index via `.flat`.

```python
import numpy as np

my_array = np.array([
    [10, 11], 
    [20, 21], 
    [30, 31]
])

# Access the element at the flattened index 3 (which is element 2,1)
flat_index_3 = my_array.flat[3]

print(f"Original array shape: {my_array.shape}")
print(f"Element at flat index 3: {flat_index_3}")
```