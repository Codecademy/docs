---
Title: '.sum()'
Description: 'Returns the sum of array elements over a given axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

## Definition

The **`.sum()`** method returns the sum of array elements over a given axis. It can compute the sum of all elements or along specific axes in multi-dimensional arrays.

## Syntax

```pseudo
ndarray.sum(axis=None, dtype=None, out=None, keepdims=False, initial=0, where=True)
```

### Parameters

- `axis` (int or tuple of ints, optional): Axis or axes along which to compute the sum. Default is `None`, which sums over all elements.
- `dtype` (data-type, optional): Type of the returned array and of the accumulator. If not specified, defaults to the data type of the array.
- `out` (ndarray, optional): Alternative output array to place the result.
- `keepdims` (bool, optional): If `True`, keeps the reduced dimensions with size 1. Default is `False`.
- `initial` (scalar, optional): Starting value for the sum. Default is 0.
- `where` (array_like of bool, optional): Elements to include in the sum. Default is `True`.

### Return Value

Returns an **ndarray** containing the sum of elements. If `axis` is `None`, returns a scalar. Otherwise, returns an array with reduced dimensions.

## Example 1: Sum of All Elements

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

## Example 3: Using Initial Value and Where Parameter

```py
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

The above code gives the following output:

```shell
Sum with initial value: 25
Conditional sum: 12
```

## Notes

- For integer arrays, the sum may overflow. Use `dtype=np.int64` or `dtype=float` for large sums.
- The `.sum()` method is more memory efficient than the `np.sum()` function for large arrays.
- When `keepdims=True`, the output shape matches the input shape with reduced dimensions of size 1.

## Related Functions

- [.mean()](https://www.codecademy.com/resources/docs/numpy/ndarray/mean): Computes the arithmetic mean along specified axis
- [.prod()](https://www.codecademy.com/resources/docs/numpy/ndarray/prod): Returns the product of array elements
- [.cumsum()](https://www.codecademy.com/resources/docs/numpy/ndarray/cumsum): Returns the cumulative sum of elements
