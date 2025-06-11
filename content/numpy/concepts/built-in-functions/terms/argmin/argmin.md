---
Title: '.argmin()'
Description: 'Finds the index of the minimum value in a NumPy array, either across the entire array or along a specified axis.'
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

The **`.argmin()`** function in NumPy returns the index of the smallest value within a NumPy array. It functions across both one-dimensional and multi-dimensional arrays. By specifying an axis, the function locates the index of the minimum value along that dimension.

This method is often utilized in computational tasks and data analysis to determine the position of the minimum element in an array.

## Syntax

```pseudo
numpy.argmin(a, axis=None, out=None, keepdims=<no value>)
```

**Parameters:**

- `a`: Input array containing values for evaluation.
- `axis` (Optional): Axis along which to find the indices of minimum values. If `None` (default), the array is flattened before computation.
- `out` (Optional): If provided, the result will be inserted into this array. It must have the appropriate shape to hold the output.
- `keepdims` (Optional): If set to `True`, the reduced axes are kept in the result as dimensions with size one, which maintains the original number of dimensions. Useful for broadcasting.

**Return value:**

- Without an `axis` specified, returns a scalar index of the smallest value in the flattened array.
- With an axis specified, returns an array with indices of the minimum values along that axis.

## Example

This example showcases how `.argmin()` identifies the index of the smallest element in different configurations:

```py
import numpy as np

arr = np.array([[6, 3, 8],
                [5, 2, 9]])

print(np.argmin(arr))             # Minimum in flattened array
print(np.argmin(arr, axis=0))     # Minimum indices along columns
print(np.argmin(arr, axis=1))     # Minimum indices along rows
```

The output produced by the exammple code will be:

```shell
4
[1 1 0]
[1 1]
```

## Codebyte Example

In this codebyte example, a 2D array of random integers is generated, followed by various applications of `.argmin()`:

```codebyte/python
import numpy as np

data = np.random.randint(1, 20, size=(3, 4))

print("Random 2D array:")
print(data)

print("Index of minimum value (flattened):")
print(np.argmin(data))

print("Minimum indices along columns (axis=0):")
print(np.argmin(data, axis=0))

print("Minimum indices along rows (axis=1):")
print(np.argmin(data, axis=1))
```
