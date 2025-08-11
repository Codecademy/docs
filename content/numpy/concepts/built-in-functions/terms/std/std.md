---
Title: '.std()'
Description: 'Calculates the standard deviation of given data along a specified axis.'
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

The NumPy **`.std()`** function calculates the standard deviation of given data along a specified axis. A standard deviation is a statistical measure indicating the spread of a distribution of data, represented by an array, along a specified axis.

## NumPy `.std()` Syntax

```pseudo
np.std(a, axis, dtype, out, ddof, keepdims, where)
```

**Parameters:**

- `a`: [Array](https://www.codecademy.com/resources/docs/numpy/ndarray) of elements used to find the standard deviation.
- `axis`(Optional): The axis along which the standard deviation will be computed. By default, the array is flattened before computation.
  - If `0`, calculates the standard deviation along the vertical axis.
  - If `1`, calculates the standard deviation along the horizontal axis.
  - If a tuple of integers, calculates the standard deviation along multiple specified axes.
- `dtype` (Optional): Type used in computing the standard deviation, if specified. By default, for arrays of integer type, it is float64, while for arrays of float types, it matches the array type.
- `out` (Optional): Specifies an alternative output array to contain the result. This array must have the same shape as the expected output.
- `ddof` (Optional): It stands for _Delta Degrees of Freedom_. It helps adjust the calculation of standard deviation for samples.
- `keepdims` (Optional): It accepts a boolean value and is used to determine whether to retain the dimensions of the given array in the output. By default, it is set to `False`.
- `where` (Optional): It accepts boolean arrays or conditions where `True` values indicate the indices, or elements within the array for which the standard deviation should be calculated.

**Return value:**

If the `out` parameter is `None`, the NumPy `.std()` function returns a new array containing the standard deviation. Otherwise, it assigns the result to the specified output array and returns its reference.

> **Notes:**
>
> 1. For floating-point inputs, the standard deviation is calculated with the same precision as the input data. This may cause inaccuracies, especially with `np.float32` data type.
> 2. For complex numbers, `std` takes the absolute value before squaring for a real, non-negative result.

## Example 1: Basic Usage of NumPy `.std()`

In this example, the NumPy `.std()` function calculates the standard deviation of the given data:

```py
import numpy as np

data = [10, 13, 23, 23, 16, 23, 21, 16]

std_dev = np.std(data)

print("Standard Deviation:", std_dev)
```

Here is the output:

```shell
Standard Deviation: 4.7549316504025585
```

## Example 2: Using NumPy `.std()` with `axis`

In this example, the `axis` parameter is used with the NumPy `.std()` function to calculate the standard deviation of the given data:

```py
import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6]])

col_std = np.std(arr, axis=0)
row_std = np.std(arr, axis=1)

print("Column-wise STD:", col_std)
print("Row-wise STD:", row_std)
```

Here is the output:

```shell
Column-wise STD: [1.5 1.5 1.5]
Row-wise STD: [0.81649658 0.81649658]
```

## Codebyte Example: Using NumPy `.std()` with `ddof`

In this codebyte example, the `ddof` parameter is used with the NumPy `.std()` function to calculate the standard deviation of the given data:

```codebyte/python
import numpy as np

data = [10, 13, 23, 23, 16, 23, 21, 16]

pop_std = np.std(data)
sample_std = np.std(data, ddof=1)

print("Population STD:", pop_std)
print("Sample STD:", sample_std)
```

## frequently Asked Questions

### 1. What is the difference between NumPy `.std()` and `.var()`?

NumPy `.std()` calculates the standard deviation (square root of variance), while `.var()` calculates the variance directly.

### 2. How to calculate sample standard deviation using NumPy `.std()`?

Use `np.std(data, ddof=1)` to apply the sample standard deviation formula.

### 3. Can NumPy `.std()` handle `NaN` values?

By default, NumPy `.std()` returns `NaN` if the array contains `NaN` values. Use `.nanstd()` to ignore NaNs.

### 4. Does NumPy `.std()` work on multi-dimensional arrays?

Yes, you can specify the `axis` parameter in NumPy `.std()` to compute standard deviation along specific dimensions.

### 5. Is NumPy `.std()` fast for large datasets?

Yes, NumPy is optimized for high performance, making `.std()` much faster than manual Python loops.
