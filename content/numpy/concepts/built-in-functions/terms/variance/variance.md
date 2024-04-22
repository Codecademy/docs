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

If `axis` is not specified, the variance is calculated for the entire (flattened) array. If `axis` is specified, then the variance is calculated along that axis. For a 2D array, if `axis=0`, the variance is calculated column-wise, and if `axis=1`, the variance is calculated row-wise.

## Example

The below example creates a 2D array and calculates the overall variance, column-wise variance, and row-wise variance of the array using the `.var()` function:

```py
import numpy as np

# Creating a 2D array
array_2d = np.array([[1, 2, 3],[4, 5, 6],[7, 8, 9]])

# Calculating the overall variance
overall_variance = np.var(array_2d)
print(overall_variance)

# Calculating the column-wise variance (axis=0)
column_variance = np.var(array_2d, axis=0)
print(column_variance)

# Calculating the row-wise variance (axis=1)
row_variance = np.var(array_2d, axis=1)
print(row_variance)
```

This produces the following output:

```shell
6.666666666666667
[6. 6. 6.]
[0.66666667 0.66666667 0.66666667]
```
