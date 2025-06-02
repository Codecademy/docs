---
Title: '.min()'
Description: 'Finds the minimum value of an array or specific parts of an array.'
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

The NumPy function **`.min()`** returns the minimum value of an array. It can find the minimum value of an entire array, the minimum value of selected elements, or the minimum values along specific axes.

## Syntax

```pseudo
numpy.min(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
```

**Parameters:**

- `a`: The input array or sequence of numbers where `.min()` finds the minimum value.
- `axis` (optional): An integer, or tuple of integers, specifying which axis to look for the minimum value. For a 2D array, `axis=0` would return the minimum value of each column, while `axis=1` would return the minimum value of each row. A tuple like `axis=(0, 1)` would return the minimum across both axes.
- `out` (optional): An alternative array where the minimum value can be placed. The array has to have the same shape as `.min()`'s output.
- `keepdims` (optional): A bool determining whether to keep the same number of dimensions as `a`. If `keepdims=True`, the return value will have the same number of dimensions as `a`, which makes it possible to do operations with `a` and the result.
- `initial` (optional): A number determining the starting value for the comparison. The function `.min()` starts with `initial` as the current minimum value until it finds a smaller value in `a`.
- `where` (optional): A boolean condition that determines which elements of the array to include. The parameter `initial` has to be specified when using `where`.

**Return value:**

- `min`: The minimum value of `a`. If `axis` isn't used, the result will be a single number (the minimum value of the whole array). If `axis` is used, the result will be an array with the same number of dimensions as the original array minus the number of specified axes (where each value is the minimum for each slice).

## Example

This example shows how to find the minimum value of an entire array and along specific axes.

```python
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

Run this code to see how `.min()` works with the `where` parameter.

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
