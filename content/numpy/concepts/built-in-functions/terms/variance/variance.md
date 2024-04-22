---
Title: '.var()'
Description: 'Computes the variance of the array elements.'
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

The `.var()` [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) computes the variance of the elements of an array along the specified axis (if any). This value represents the average of the squared differences from the mean and provides a measure of how spread out the elements are in the array.

## Syntax

```pseudo
numpy.var(array, axis=None)
```

- `array`: The array for which the variance is to be calculated.
- `axis`: An optional parameter that specifies the axis along which the variance is to be calculated.

If `axis` is not provided, the variance is calculated for the entire array. If `axis` is specified, then the variance is calculated along that axis. For a 2D array, if `axis=0`, the variance is calculated column-wise and if `axis=1`, the variance is calculated row-wise.

## Example

The below example creates a 2D array and calculates the overall variance, column-wise variance, and row-wise variance of the array using the `.var()` function:

```py
import numpy as np

# Creating a 2D array
arr = np.array([[1, 2, 3],[4, 5, 6],[7, 8, 9]])

# Calculating the overall variance
variance_all = np.var(arr)
print(variance_all)

# Calculating the column-wise variance (axis=0)
variance_axis_0 = np.var(arr, axis=0)
print(variance_axis_0)

# Calculating the row-wise variance (axis=1)
variance_axis_1 = np.var(arr, axis=1)
print(variance_axis_1)
```

This produces the following output:

```shell
6.666666666666667
[6. 6. 6.]
[0.66666667 0.66666667 0.66666667]
```
