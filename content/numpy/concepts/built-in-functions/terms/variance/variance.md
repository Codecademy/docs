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

The `.var()` [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) computes the variance of the elements in an array, either across all elements or along a specified axis (if provided). Variance is a statistical measurement that shows how far each number in the array is spread out from the _mean_. In other words, it measures the dispersion or spread in the data.

A high variance indicates that the numbers in the array are far from the _mean_, while a low variance indicates that they are close to the _mean_.

## Syntax

```pseudo
numpy.var(array, axis=None)
```

- `array`: The array for which the variance is to be calculated.
- `axis`: An optional parameter that specifies the axis along which the variance is to be calculated.

If `axis` is not specified, the variance is calculated for the entire (flattened) array. If `axis` is specified, then the variance is calculated along that axis. For a 2D array, if `axis=0`, the variance is calculated column-wise, and if `axis=1`, the variance is calculated row-wise.

## Example

The following example creates a 2D array and calculates the overall variance (variance of the flattened array), column-wise variance, and row-wise variance of the array using the `.var()` function:

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
