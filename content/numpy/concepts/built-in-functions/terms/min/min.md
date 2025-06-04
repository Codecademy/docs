---
Title: '.min()'
Description: 'Finds the minimum value in an array or along a specified axis of an array.'
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

The NumPy function **`.min()`** returns the minimum value in an array. It can compute the minimum of the entire array, the minimum along specific axes, or the minimum of selected elements if indexing or conditions are applied.

## Syntax

```pseudo
numpy.min(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
```

**Parameters:**

- `a`: The input array or sequence of numbers from which the minimum value is to be determined.
- `axis` (optional): Axis or axes along which to compute the minimum.
  - `axis=0` returns minimums for each column (vertical).
  - `axis=1` returns minimums for each row (horizontal).
  - A tuple like `(0, 1)` computes over multiple axes (e.g., the entire array for a 2D input).
- `out` (optional): Alternative output array to store the result. Must have the same shape as the expected output.
- `keepdims` (optional): If `True`, retains reduced dimensions with size 1. This is useful for broadcasting in further operations.
- `initial` (optional): Starting value for the comparison. Useful when using `where` or to set a baseline minimum.
- `where` (optional): A boolean mask array that specifies elements to include in the comparison. If used, `initial` must be provided to avoid empty comparisons.

**Return value:**

- `min`: The minimum value of `a`.
  - If `axis` is `None`, returns the overall minimum as a scalar.
  - If `axis` is specified, returns an array with the minimum values along the given axis (or axes). The shape is reduced accordingly, unless `keepdims=True`.

## Example

This example shows how to find the minimum value of an entire array and along specific axes:

```py
import numpy as np

# Create a 2D array
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

# Finding the minimum value of the array
min_of_arr = np.min(arr)

# Finding the minimum value of each column in the array
min_of_col = np.min(arr, axis=0)

# Finding the minimum value of each row in the array
min_of_row = np.min(arr, axis=1)

# Print the results
print("The array:")
print(arr)
print("\nThe minimum value:")
print(min_of_arr)
print("The minimum value of each column:")
print(min_of_col)
print("The minimum value of each row:")
print(min_of_row)
```

The output of this code is:

```shell
The array:
[[1 2 3]
 [4 5 6]]

The minimum value:
1
The minimum value of each column:
[1 2 3]
The minimum value of each row:
[1 4]
```

## Codebyte Example

Run the following code to understand how the `.min()` works with the `where` parameter:

```codebyte/python
import numpy as np

# A 2D array with numbers from 1-9
arr = np.array([[4, 2, 8],
                [9, 5, 3],
                [2, 6, 1]])

# Finding the minimum value with the condition of being above 5
min_condition = np.min(arr, where=(arr > 5), initial=99)

# Print the results
print(min_condition)
```
