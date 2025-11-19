---
Title: 'mean()'
Description: 'Computes the arithmetic mean of array elements along a given axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Array'
  - 'Data'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`mean()`** method of a NumPy `ndarray` computes the arithmetic average of the array elements. The calculation can be performed across the entire array or along a specified axis. The result is either a scalar value or an array of means, depending on the chosen axis.

## Syntax

```pseudo
ndarray.mean(axis=None, dtype=None, out=None, keepdims=False, initial=<no value>, where=True)
```

**Parameters:**

- `axis` (optional): Axis or axes along which the mean is computed. If omitted, the mean of all elements is returned.
- `dtype` (optional): Data type used during the calculation.
- `out` (optional): Output array for storing the result.
- `keepdims` (optional): Preserves reduced dimensions when set to True.
- `initial` (optional): Starting value for the sum.
- `where` (optional): A boolean mask that selects elements included in the mean.

**Return value:**

Returns a scalar or `ndarray` containing the computed arithmetic mean.

## Example 1

In this example, the mean is computed across both axes: once for the entire array and once along each individual row:

```py
import numpy as np

arr = np.array([
  [2, 4, 6],
  [8, 10, 12]
])

# Mean of all elements
overall_mean = arr.mean()

# Mean along each row
row_mean = arr.mean(axis=1)

print("Overall mean:", overall_mean)
print("Row-wise mean:", row_mean)
```

The output of this code is:

```shell
Overall mean: 7.0
Row-wise mean: [4. 10.]
```

## Example 2

In this example, a boolean mask is used with where to compute the mean only across selected elements:

```py
import numpy as np

arr = np.array([10, 20, 0, 40, 0])
mask = arr > 0  # select only non-zero values

masked_mean = arr.mean(where=mask)

print("Mean of non-zero values:", masked_mean)
```

The output of this code is:

```shell
Mean of non-zero values: 23.333333333333332
```

## Codebyte Example

Use this Codebyte to compute the mean along a specific axis in a 2-D array:

```codebyte/python
import numpy as np

scores = np.array([
  [80, 90, 85],
  [70, 75, 78],
  [88, 92, 95]
])

# Compute mean of each column
column_mean = scores.mean(axis=0)

print("Column-wise mean:", column_mean)
```

## Frequently Asked Questions

### 1. What is a NumPy Ndarray in Python?

A NumPy ndarray is a multidimensional, fixed-size array optimized for numerical computation. It stores elements of the same data type and supports fast vectorized operations, making it the core data structure of NumPy.

### 2. What is NumPy mean in NumPy?

The `mean()` function computes the arithmetic average of the selected array elements. It supports axes, masks, and type casting, making it suitable for both simple and high-performance statistical calculations.

### 3. How does `mean()` work in Python?

The method sums the selected elements of the array and divides by the number of included elements. When an axis is specified, this process is applied along that dimension, returning an array of means.
