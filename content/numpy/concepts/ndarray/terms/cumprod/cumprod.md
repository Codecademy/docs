---
Title: '.cumprod()'
Description: 'Returns the cumulative product of array elements along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Linear Algebra'
  - 'Matrices'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In NumPy, the **`.cumprod()`** method returns the cumulative product of the array elements over a particular axis. This method belongs to the `ndarray` class.

## Syntax

```pseudo
ndarray.cumprod(axis=None, dtype=None, out=None)
```

**Parameters:**

- `axis` (optional): Axis along which the cumulative product is computed. The default (None) flattens the array.
- `dtype` (optional): The data type of the output array. Useful when input elements are of smaller types and may overflow.
- `out` (optional): An alternative output array where results will be stored. It must have the same shape as the expected output.

**Return value:**

Returns a new array that contains the cumulative product of elements along the specified axis. If `out` is provided, the result is placed into it.

## Example 1: Cumulative Product of a 1D Array

This example computes the cumulative product of all elements in a one-dimensional array:

```py
import numpy as np

a = np.array([1, 2, 3, 4])
print("Original array:", a)

result = a.cumprod()
print("Cumulative product:", result)
```

The output of this code is:

```shell
Original array: [1 2 3 4]
Cumulative product: [ 1  2  6 24]
```

Each element in the output represents the product of all elements up to that index in the input array.

## Example 2: Cumulative Product Along Different Axes

This example shows how `.cumprod()` behaves when applied across rows and columns of a 2D array:

```py
import numpy as np

b = np.array([[1, 2, 3],
              [4, 5, 6]])

print("Original array:")
print(b)

# Cumulative product along rows (axis=1)
row_cumprod = b.cumprod(axis=1)
print("\nCumulative product along rows (axis=1):")
print(row_cumprod)

# Cumulative product along columns (axis=0)
col_cumprod = b.cumprod(axis=0)
print("\nCumulative product along columns (axis=0):")
print(col_cumprod)
```

The output of this code is:

```shell
Original array:
[[1 2 3]
 [4 5 6]]

Cumulative product along rows (axis=1):
[[  1   2   6]
 [  4  20 120]]

Cumulative product along columns (axis=0):
[[ 1  2  3]
 [ 4 10 18]]
```

- When `axis=1`, the cumulative product is computed across each row.
- When `axis=0`, it’s computed down each column.

## Codebyte Example

Run this interactive example to experiment with `.cumprod()` on a 2D array:

```codebyte/python
import numpy as np

a = np.array([[2, 3, 4],
              [5, 6, 7]])

print("Original array:")
print(a)

print("\nCumulative product (flattened):", a.cumprod())
print("\nCumulative product along axis=0:\n", a.cumprod(axis=0))
print("\nCumulative product along axis=1:\n", a.cumprod(axis=1))
```
