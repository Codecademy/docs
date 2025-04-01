---
Title: '.split()'
Description: 'Divides an array into multiple sub-arrays along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.split()`** function divides an array into multiple sub-arrays along a specified axis.

## Syntax

```pseudo
numpy.split(array, indices_or_sections, axis=0)
```

- `array`: The input array to split.
- `indices_or_sections`:
  - If an integer, it divides the array into equal-sized sub-arrays.
  - If a list of indices, it splits at the specified positions.
- `axis` (Optional): The axis along which the array is split (default is `0`, i.e., row-wise).

## Example

The following example shows splitting arrays in different configurations using the `.split()` function:

```py
import numpy as np

# Split a 1D array into 3 equal parts
arr = np.array([1, 2, 3, 4, 5, 6])
print(np.split(arr, 3))

# Split a 2D array into 2 parts along rows (axis=0)
nd = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
print(np.split(nd, 2, axis=0))

# Split a 2D array at column indices [1, 2]
print(np.split(nd, [1, 2], axis=1))
```

This produces the following output:

```shell

[array([1, 2]), array([3, 4]), array([5, 6])]

[array([[1, 2, 3],
        [4, 5, 6]]), 
 array([[ 7,  8,  9],
        [10, 11, 12]])]

[array([[ 1],
        [ 4],
        [ 7],
        [10]]), 
 array([[ 2],
        [ 5],
        [ 8],
        [11]]), 
 array([[ 3],
        [ 6],
        [ 9],
        [12]])]
```
