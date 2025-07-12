---
Title: `.resize()`
Description: 'Changes the shape of a NumPy array without changing its data.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.resize()`** method in NumPy is used to change the shape of an array without changing its data. It can be particularly useful when you need to reshape an array for further processing or analysis.

## Syntax

```pseudo
numpy.resize(a, new_shape)
```

## Parameters

- **`a`**: array_like
    The input array that you want to resize.
- **`new_shape`**: int or tuple of ints
    The new shape for the array. It must be compatible with the original shape.
- **`order`**: {'C', 'F', 'A', 'K'}, optional
    The order in which the array elements are read and written. Default is 'C' (row-major order).

## Returns

- **`resized_array`**: ndarray
    The resized array with the new shape

## Example

```py
import numpy as np

# Create a 1D array
arr = np.array([1, 2, 3, 4, 5])

# Resize the array to 2x3
resized = np.resize(arr, (2, 3))
print(resized)
```

The code above generates the following output:

```shell
[[1 2 3]
 [4 5 1]]
```

## Notes

- The `resize` function does not modify the original array; it returns a new array with the specified shape.
- If the new shape is larger than the original shape, the new array will be filled with repeated copies of the original array.
- If the new shape is smaller, the array will be truncated.

## Codebyte Example

```codebyte/python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
resized = np.resize(arr, (2, 3))
print(resized)
```
