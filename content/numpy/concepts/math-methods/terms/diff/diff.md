---
Title: '.diff()'
Description: 'Calculates the n-th discrete difference along a given axis, effectively subtracting consecutive elements in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.diff()`** function computes the difference between consecutive elements along a specified axis. It returns an array of the same shape with one less element along the specified axis, showing the differences.

## Syntax

```pseudo
numpy.diff(a, n=1, axis=-1, prepend=<no value>, append=<no value>)
```

- `a`: The input array on which to compute the differences.
- `n`: The number of times the difference is computed. Default is `1`.
- `axis`: The axis along which the difference is computed. Default is `-1` (last axis).
- `prepend`: Values to prepend to the array before computing the difference.
- `append`: Values to append to the array after computing the difference.

This function returns an array of differences between consecutive elements along the specified axis, with one fewer element along that axis than the input array.

## Example

In this example, the `.diff()` function computes the difference between consecutive elements of the array:

```py
import numpy as np

# Array of values
arr = np.array([1, 3, 6, 10, 15])

# Compute the difference between consecutive elements
result = np.diff(arr)

print(result)
```

The output of the above code is shown below:

```shell
[2 3 4 5]
```

## Codebyte Example

In this codebyte example, the `.diff()` function computes the difference between consecutive elements along the columns of the 2D array:

```codebyte/python
import numpy as np

# 2D array
arr = np.array([[1, 2, 4], [5, 7, 9]])

# Compute the difference along the second axis (columns)
result = np.diff(arr, axis=1)

print(result)
```
