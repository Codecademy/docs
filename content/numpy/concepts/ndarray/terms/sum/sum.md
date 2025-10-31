---
Title: '.sum()'
Description: 'Returns the sum of array elements over a given axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.sum()`** method returns the sum of array elements over a given axis. It can compute the sum of all elements or along specific axes in multi-dimensional arrays.

## Syntax

```pseudo
ndarray.sum(axis=None, dtype=None, out=None, keepdims=False, initial=0, where=True)
```

**Parameters:**

- `axis` (int or tuple of ints, optional): Axis or axes along which to compute the sum. Default is `None`, which sums over all elements.
- `dtype` (data-type, optional): Type of the returned array and of the accumulator. If not specified, defaults to the data type of the array.
- `out` (ndarray, optional): Alternative output array to place the result.
- `keepdims` (bool, optional): If `True`, keeps the reduced dimensions with size 1. Default is `False`.
- `initial` (scalar, optional): Starting value for the sum. Default is 0.
- `where` (array_like of bool, optional): Elements to include in the sum. Default is `True`.

**Return value:**

Returns an ndarray containing the sum of elements. If `axis` is `None`, returns a scalar. Otherwise, returns an array with reduced dimensions.

## Example 1: Sum of All Elements

In this example, the `.sum()` method calculates the total of all elements in the array:

```py
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
result = arr.sum()
print(result)
```

The above code gives the following output:

```shell
21
```

## Example 2: Sum Along Specific Axis

In this example, the `.sum()` method computes sums along specific axes, by columns (`axis=0`) and by rows (`axis=1`):

```py
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
# Sum along axis 0 (columns)
col_sum = arr.sum(axis=0)
print("Column sums:", col_sum)

# Sum along axis 1 (rows)
row_sum = arr.sum(axis=1)
print("Row sums:", row_sum)
```

The above code gives the following output:

```shell
Column sums: [5 7 9]
Row sums: [ 6 15]
```

Here, `axis=0` sums each column, and `axis=1` sums each row.

## Codebyte Example: Using Initial Value and Where Parameter

In this example, the `.sum()` method demonstrates how to use an initial value for the sum and how to conditionally include elements using the `where` parameter:

```codebyte/python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
# Sum with initial value
result1 = arr.sum(initial=10)
print("Sum with initial value:", result1)

# Conditional sum using where parameter
mask = arr > 2
result2 = arr.sum(where=mask)
print("Conditional sum:", result2)
```

> **Note:** For integer arrays, large sums may overflow. Use `dtype=np.int64` or `float` for safe accumulation.
