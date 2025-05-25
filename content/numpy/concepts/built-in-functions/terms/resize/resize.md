---
Title: '.resize()'
Description: 'Resizes an array and returns a new array with the specified size.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The NumPy **`.resize()`** function resizes an array. It returns a new array with the specified shape and size without changing the shape and size of the original array.

> **Note:** If only the shape and not the size of an array is changed, it's recommended to use **`.reshape()`** instead for performance and clarity.

## Syntax

```pseudo
numpy.resize(a, new_shape)
```

Parameters:

- `a`: The array to resize.
- `new_shape`: An integer or tuple of integers representing the size of each axis. Providing a single integer will result in a 1D array with the specified size. Providing a tuple of integers will result in a multi-dimensional array with the specified size of each dimension.

Returns:

- `resized_array`: A new array with the specified shape and size. If the specified size is _larger_ than the original array, the elements are repeated by cycling through the flattened array. If the new array is _smaller_ than the original array, the elements are truncated.

## Example

This example demonstrates how to resize a 1D array with 3 elements into a 2D array with 6 elements:

```py
import numpy as np

# Create a 1D array with 3 elements
arr = np.array([1, 2, 3])

# Resize the 1D array to a 2D array with 2 rows and 3 columns
resized_arr = np.resize(arr, (2, 3))

# Print the results
print("Original array:")
print(arr)
print("\nResized array:")
print(resized_arr)

```

The output of this code is:

```Shell
Original array:
[1 2 3]

Resized array:
[[1 2 3]
 [1 2 3]]
```

## Codebyte Example

Run this code to see how `.resize()` works with different sizes and shapes:

```codebyte/python
import numpy as np

# Create a 1D array with 5 elements
arr = np.array([1, 2, 3, 4, 5])

# Resize the 1D array to a smaller 1D array with 3 elements
smaller_arr = np.resize(arr, 3)

# Resize the original 1D array to a larger 2D array with 16 elements
arr_2d = np.resize(arr, (4, 4))

# Resize the original 1D array to a larger 3D array with 32 elements
arr_3d = np.resize(arr, (4, 4, 2))

print("Original array:")
print(arr)
print("\nSmaller array (truncated elements):")
print(smaller_arr)
print("\nLarger 2D array (repeated elements):")
print(arr_2d)
print("\nLarger 3D array (repeated elements):")
print(arr_3d)
```
