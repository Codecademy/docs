---
Title: 'argmin()'
Description: 'Returns the index of the minimum value in a NumPy array or along a specified axis.'
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

The **`ndarray.argmin()`** method returns the index position of the minimum value in a NumPy array. The search can be performed on the flattened array or along a specified axis, and the result reflects where the smallest element appears rather than the value itself.

## Syntax

```pseudo
ndarray.argmin(axis=None, out=None, *, keepdims=False)
```

**Parameters:**

- `axis` (optional): Axis along which to find the minimum index.
  - `None`: searches the entire flattened array
  - `0`: searches column-wise
  - `1`: searches row-wise
- `out` (optional): Output array that receives the result. Must have an appropriate shape.
- `keepdims` (optional): If true, the reduced axes are kept with size 1, preserving the dimension structure.

**Return value:**

An integer or array of integers representing the indices of the minimum values.

## Example 1: Finding the Minimum Index in a 1D Array

In this example, the smallest number in the array is identified, and its index is returned:

```py
import numpy as np

arr = np.array([12, 5, 7, 3, 9])
idx = arr.argmin()
print(idx)
```

The output of this code is:

```shell
3
```

## Example 2: Finding Minimum Indices Along Rows

In this example, `argmin()` is applied along axis 1, so each row returns the index of its smallest element:

```py
import numpy as np

arr = np.array([[4, 9, 1],
                [8, 3, 6]])

idx = arr.argmin(axis=1)
print(idx)
```

The output of this code is:

```shell
[2 1]
```

## Codebyte Example

In this example, the minimum index is found both in the flattened array and along each column to show how the output changes with the axis parameter:

```codebyte/python
import numpy as np

arr = np.array([[15, 7, 9],
                [2, 11, 5],
                [6, 4, 8]])

flat_index = arr.argmin()
col_indices = arr.argmin(axis=0)

print("Index of minimum in flattened array:", flat_index)
print("Index of minimum in each column:", col_indices)
```

## Frequently Asked Questions

### 1. What does NumPy argmin do?

NumPy's `argmin()` returns the index location of the smallest element inside an array. Instead of giving the minimum value, it identifies where that value appears, which is essential for position-based analysis.

### 2. What does argmin do?

`argmin()` locates the position of the lowest value in the data. It works on any dimension and can operate on the full array or only along a chosen axis, depending on the analytical need.

### 3. What is the difference between argmin and min in Python?

`min()` (or `ndarray.min()`) returns the smallest value itself, while `argmin()` returns the index where that value occurs. One answers “what is the smallest value,” and the other answers “where is that smallest value located.”
