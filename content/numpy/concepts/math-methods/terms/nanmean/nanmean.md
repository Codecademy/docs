---
Title: '.nanmean()'
Description: 'Calculates the arithmetic mean along a specified axis of an array ignoring NaNs.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.nanmean()`** function computes the arithmetic mean of the elements in an array over a specified axis, while ignoring `NaN` (Not a Number) values. This is useful when working with arrays that contain missing or undefined values represented as `NaN`.

## Syntax

```pseudo
numpy.nanmean(a, axis=None, dtype=None, out=None, keepdims=<no value>, *, where=<no value>)
```

**Parameters:**

- `a`: The data for which the mean is computed. It can be a NumPy array or any array-like object (e.g., list).
- `axis` (Optional): Used to specify the axis along which the mean is calculated. If `None` (default), the mean is computed over the flattened array.
- `dtype` (Optional): The data type used for the calculation. If not specified, the result will have the same data type as the input (unless `a` is an integer, where the result will be `float64` by default).
- `out` (Optional): A location where the result is stored. The array must have the same shape as the expected output. If not provided, a new array is created.
- `keepdims` (Optional): If set to `True`, the reduced axes are retained in the result with size one. This can be useful for broadcasting purposes.
- `where` (Optional): A condition that allows the function to compute the mean only on elements where the condition is `True`. It can be a boolean array or a condition (usually `True`).

**Return value:**

The `.nanmean()` function returns the mean of the array, ignoring `NaN` values:

- If `axis` is `None` or if no axis is specified, it returns a single value representing the mean of the entire array.
- If `axis` is specified, it returns an array of mean values along the specified axis of the data `a`.

## Example 1: Basic Usage of `.nanmean()`

The example below shows how to calculate the mean value from an array:

```py
import numpy as np

# Creating a numpy array with NaN values
arr = np.array([6, 13, 1, np.nan, 7])

# Computing the mean of the array, ignoring NaNs
result = np.nanmean(arr)

print(result)
```

The example code above results in the following output:

```shell
6.75
```

## Example 2: Using `.nanmean()` Along an Axis

This example shows how to use `.nanmean()` function along a specific axis:

```py
import numpy as np

# Creating a 2D numpy array with NaN values
arr = np.array([[8, np.nan, 3], [4, 2, 9]])

# Computing the mean along axis 0 (columns)
result = np.nanmean(arr, axis=0)

print(result)
```

The example code above results in the following output:

```shell
[6. 2. 6.]
```

## Codebyte Example: Using `.nanmean()` with `keepdims`

In this codebyte example, the `.nanmean()` method computes the mean of the elements in the array, demonstrating the use of `keepdims` parameter:

```codebyte/python
import numpy as np

arr = np.array([[np.nan, 2, 5], [3, 4, np.nan], [1, 6, 9]])

result = np.nanmean(arr, keepdims=True)

print("Original array:\n" + str(arr))
print("Result:\n" + str(result))
```
