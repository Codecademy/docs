---
Title: '.median()'
Description: 'Returns the median of the elements in a given array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.median()`** function calculates the median value of elements in an array along the specified axis.

## Syntax

```pseudo
numpy.median(a, axis=None, out=None, overwrite_input=False, keepdims=False)
```

- `a`: The array of elements to calculate the median from.
- `axis`: The axis or axes along which to calculate the median. By default, it considers the array to be flattened (works on all axes). `axis=0` works along the column and `axis=1` works along the row.
- `out`: A different array to place the result. It must have the same shape as the expected result.
- `overwrite_input`: A parameter which, if `True`, allows memory usage of the array for calculations.
- `keepdims`: A parameter which, if `True`, keeps reduced axes in the result as dimensions with size one.

> **Note:** The `a` parameter is the only required parameter for this function. All other parameters are optional.

## Example

The following example creates an array, then applies a few `.median()` operations, and returns each result to the console:

```py
import numpy as np

a = np.array([[0,1,2],[3,4,5]])

print(np.median(a))
# Computes the median of the entire array

print(np.median(a, axis=0))
# Computes the median along the vertical axis (column) of the array

print(np.median(a, axis=1))
# Computes the median along the horizontal axis (row) of the array
```

This produces the following output:

```shell  
2.5
[1.5 2.5 3.5]
[1. 4.]
```

## Codebyte Example

The following example creates a 2-dimensional array of random integers (between 1 and 20) and calculates the median using `.median()`, demonstrating different uses of the `axis` parameter:

```codebyte/python
import numpy as np

randarr = np.random.randint(1,20, size=(2,4))
print("Your randomised array is:")
print(randarr)

print("The median along the flattened array is:")
print(np.median(randarr))

print("The median along the vertical axis (axis=0) is:")
print(np.median(randarr, axis=0))

print("The median along the horizontal axis (axis=1) is:")
print(np.median(randarr, axis=1))

print("The median along the horizontal axis (axis=1) with 'keepdims=True' is:")
print(np.median(randarr, axis=1, keepdims=True))
```
