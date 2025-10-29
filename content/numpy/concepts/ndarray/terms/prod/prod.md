---
Title: '.prod()'
Description: 'Calculates the product of all elements in a NumPy array, optionally along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.prod()`** function in NumPy returns the product of array elements over a specified axis. It’s useful in mathematical and statistical operations, especially with multi-dimensional arrays where the product needs to be computed across rows, columns, or the entire array. This function is also available as the standalone function `numpy.prod()`.

## Syntax

```pseudo
ndarray.prod(axis=None, dtype=None, out=None, keepdims=False, initial=1, where=True)
```

**Parameters:**

- `axis` (int or tuple of ints, optional): Axis or axes along which the product is computed.
  - If `None` (default), the product of all elements in the array is returned.
  - If an integer or tuple, the product is computed along the specified axis or axes.
- `dtype` (data-type, optional): The data type of the returned array and of the accumulator used in the computation. If not specified, it’s inferred from the input to avoid overflow when possible.
- `out` (ndarray, optional): An alternate output array in which to place the result. It must have the same shape as the expected output.
- `keepdims` (bool, optional): If `True`, the reduced axes are left in the result as dimensions with size one. Default is `False`.
- `initial` (scalar, optional): The starting value for the product. The default is `1`.
- `where` (array_like of bool, optional): A boolean array indicating elements to include in the product. Elements where `where` is `False` are ignored.

**Return value:**

Returns the product of array elements over the specified axis (or the entire array if `axis=None`). The returned type matches the input or the specified `dtype`.

## Example

The following example shows the use of the `.prod()` to calculate the product of all elements in a 1D array and the product along the columns in a 2D array:

```py
import numpy as np

# 1D array example
arr_1d = np.array([2, 3, 4])
product_all = arr_1d.prod()

# 2D array example:
# [[1, 2],
#  [5, 6]]
arr_2d = np.array([[1, 2], [5, 6]])

# Product along columns (axis=0): (1*5, 2*6)
product_cols = arr_2d.prod(axis=0)

print(f"Product of all elements (1D): {product_all}")
print(f"Product along columns (axis=0) in 2D: {product_cols}")
```

The code above generates the following output:

```shell
Product of all elements (1D): 24
Product along columns (axis=0) in 2D: [ 5 12]
```

## Codebyte Example

The following codebyte example demonstrates calculating the product of elements along the rows `(axis=1)` of a 2D array:

```codebyte/python
import numpy as np

arr = np.array([[10, 1],
                [3, 4]])

# Product along rows (axis=1): (10*1, 3*4)
product_rows = arr.prod(axis=1)

print(product_rows)
```
