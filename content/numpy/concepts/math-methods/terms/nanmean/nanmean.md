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

In NumPy, the **`.nanmean()`** function calculates the arithmetic mean of the elements of an array over a specified axis, ignoring `NaN` values. This is useful when working with arrays that contain missing or undefined values represented as `NaN`.

## Syntax

```pseudo
numpy.nanmean(a, axis=None, dtype=None, out=None, keepdims=<no value>, *, where=<no value>)
```

**Parameters:**

- `a`: An array containing the data whose mean is wanted.
- `axis` (Optional): Used to specify the axis along which the mean is calculated. If not specified, the mean is computed on a flattened version of the array.
- `dtype` (Optional): Used to specify the data type of the result. For integers, the default output type is `float64`. Otherwise, the output type is the same as the input.
- `out` (Optional): Specify the array in which the result is stored. The provided array needs to be the same shape as the input. If not provided, a new array is created.
- `keepdims` (Optional): If set to `True`, the reduced axes are retained in the result as dimensions with size one, allowing the result to broadcast correctly.
- `where` (Optional): An array indicating which elements to include in the mean.

**Return Value:**

In NumPy, the `.nanmean()` function returns the mean or an array containing the mean values os the data `a`

- If `axis` is `None` or `0`, it returns a single randomly selected value.
- If `axis` is specified, it returns an array of mean values on the specified axis of the data `a`.

## Example 1

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

## Example 2

This example shows how to use `.nanmean()` function along a specific axis:

```py
import numpy as np

# Creating a 2D numpy array with NaN values
arr = np.array([[8, np.nan, 3], [4, 2, 9]])

# Computing the mean along axis 0 (columns)
result = np.nanprod(arr, axis=0)

print(result)
```

The example code above results in the following output:

```shell
[6. 2. 6.]
```

## Codebyte Example

In this codebyte example, the `.nanmean()` method computes the mean of the elements in the array, demonstrating the use of `keepdims` parameter.

```codebyte/python
import numpy as np

arr = np.array([[np.nan, 2, 5], [3, 4, np.nan], [1, 6, 9]])

result = np.nanmean(arr, keepdims=True)

print("Original array:\n" + str(arr))
print("Result:\n" + str(result))
```