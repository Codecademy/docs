---
Title: 'min()'
Description: 'Returns the minimum value in a NumPy array or along a specified axis.'
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

The **`ndarray.min()`** method returns the smallest value in a NumPy array. You can get the minimum of the entire array or the minimum along a specific axis. The result is always returned as a scalar or a new array depending on the axis used.

## Syntax

```pseudo
ndarray.min(axis=None, out=None, keepdims=False, initial=<no value>, where=True)
```

**Parameters:**

- `axis` (optional): Axis along which the minimum is computed.
  - `None` (default): computes the minimum of the entire array
  - `0`: computes column-wise minimum
  - `1`: computes row-wise minimum
- `out` (optional): Output array to store the result. Must have the correct shape.
- `keepdims` (bool): If True, retains reduced dimensions with size 1.
- `initial` (optional): Starting value used for comparison before array elements are considered.
- `where` (array_like of bool): Condition that selects elements included in the reduction.

**Return value:**

A scalar or array containing the minimum values. If an axis is specified, the result is returned with one fewer dimension unless keepdims=True is used.

## Example 1: Minimum of an Entire Array

This example computes the minimum of a one-dimensional array:

```py
import numpy as np

arr = np.array([12, 5, 30, 2, 19])
result = arr.min()
print(result)
```

The output of this code is:

```shell
2
```

## Example 2: Minimum Along an Axis

This example finds the smallest value in each row:

```py
import numpy as np

arr = np.array([[4, 7, 1],
                [9, 3, 2]])

result = arr.min(axis=1)
print(result)
```

The output of this code is:

```shell
[1 2]
```

## Codebyte Example

This example calculates the overall minimum and row-wise minimums:

```codebyte/python
import numpy as np

arr = np.array([[15, 6, 9],
                [4, 12, 8],
                [7, 3, 10]])

overall_min = arr.min()
row_min = arr.min(axis=1)

print("Overall minimum:", overall_min)
print("Row-wise minimums:", row_min)
```

## Frequently Asked Questions

### 1. What is a NumPy ndarray in Python?

A multidimensional array object used for efficient numerical computing.

### 2. What is the `min()` function in NumPy?

A reduction method that returns the smallest value in an array or along a specific axis.

### 3. What is %s and %d in Python?

They are old-style string formatting placeholders:

- `%s` inserts a string.
- `%d` inserts an integer.
