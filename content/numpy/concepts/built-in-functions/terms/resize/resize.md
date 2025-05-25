---
Title: '.resize()'
Description: 'Resizes a NumPy array and returns a new array with the new size.'
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

> **Note:** If only the shape and not the size of an array is changed, using the function **`.reshape()`** is recommended.

## Syntax

```pseudo
numpy.resize(a, new_shape)
```

Parameters:

- `a`: The array to resize.
- `new_shape`: An integer or tuple of integers representing the size of each axis. Providing a single integer will result in a 1D array with the specified size. Providing a tuple of integers will result in a multi-dimensional array with the specified size of each dimension.

Returns:

- `resized_array`: A new array with the specified shape and size. If the specified size is *larger* than the original array, the elements are repeated. If the new array is *smaller* than the original array, the elements are truncated.

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
print("Resized array:")
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
