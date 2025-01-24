---
Title: '.nansum()'
Description: 'Computes the sum of array elements, treating Not a Number (NaN) values as zero.'
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

In NumPy, the **`.nansum()`** function calculates the sum of array elements, treating `NaN` (Not a Number) values as zero. It ignores any `NaN` values in the array during the summation process, ensuring accurate results even with missing data.

## Syntax

```pseudo
numpy.nansum(a, axis=None, dtype=None, out=None, keepdims=False)
```

- `a`: This is the array whose elements are to be summed, with `NaN` values ignored.
- `axis` (Optional): The axis or axes along which the sum is computed. By default, the sum is computed over all the elements in the array.
- `dtype` (Optional): The type of the returned array. If not specified, it is inferred from the input array.
- `out` (Optional): A location to store the result. If provided, the result will be stored in this array. It must have the same shape as the output.
- `keepdims` (Optional): If set to `True`, the reduced axes are retained in the result as dimensions with size one. Otherwise, the axes are removed.

## Example 1

The following example demonstrates the usage of the `.nansum()` function:

```py
import numpy as np

# Array with NaN values
arr = np.array([1, 2, np.nan, 4, np.nan, 6])

# Compute the sum, ignoring NaN values
sum_result = np.nansum(arr)

print(sum_result)
```

The output of the above code is shown below:

```shell
13.0
```

## Example 2

In the example below, the `.nansum()` function computes the sum of the array elements, ignoring any `NaN` values, both for the entire array and along specified axes:

```py
import numpy as np

# 2D array with NaN values
arr = np.array([[1, 2, np.nan, 4],
                [5, np.nan, 7, 8],
                [9, 10, 11, np.nan]])

# Compute the sum along the entire array, ignoring NaN values
sum_result_all = np.nansum(arr)

# Compute the sum along each column (axis=0), ignoring NaN values
sum_result_columns = np.nansum(arr, axis=0)

# Compute the sum along each row (axis=1), ignoring NaN values
sum_result_rows = np.nansum(arr, axis=1)

print("Sum of all elements (ignoring NaN):", sum_result_all)
print("Sum of each column (ignoring NaN):", sum_result_columns)
print("Sum of each row (ignoring NaN):", sum_result_rows)
```

This outputs the following:

```shell
Sum of all elements (ignoring NaN): 57.0
Sum of each column (ignoring NaN): [15. 12. 18. 12.]
Sum of each row (ignoring NaN): [ 7. 20. 30.]
```

## Codebyte Example

Run the following codebyte example to understand how the `.nansum()` function works:

```codebyte/python
import numpy as np

# 2D array with NaN values
arr = np.array([[1, 2, np.nan], [4, 5, 6]])

# Compute the sum of all elements, ignoring NaN
sum_result = np.nansum(arr)

print(sum_result)
```
