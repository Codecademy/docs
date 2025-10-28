---
Title: '.prod()'
Description: 'Calculates the product of all elements in a NumPy array, optionally along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Mathematical Functions'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.prod()`** function in NumPy computes the product (multiplication) of all the elements in the array. This function is essential for mathematical and statistical operations and is particularly useful with multi-dimensional arrays where you might need to calculate the product across specific dimensions (rows or columns). The function is also available as the standalone function **`numpy.prod()`**.
## Syntax

```psuedo
ndarray.prod(axis=None, dtype=None, out=None, keepdims=False, initial=1, where=True)
```

- `axis`: Optional. The axis or axes along which the product is computed.
        If None (default), the product of all elements (the array is effectively flattened) is returned.
        If an int (e.g., 0 or 1)the product is calculated along that axis.
- `dtype`:The data type of the returned product. By default, it's often inferred to prevent intermediate overflow, typically using the platform's default integer or float.
- `out`: Alternative output array in which to place the result.
- `keepdims `:If True, the reduced axis is retained in the result with a dimension size of 1.
- `initial `:The starting value for the product, which is multiplied by the product of the array elements. The default is 1.
- `where`:Elements corresponding to False in this array are excluded from the product.

## Example

The following example shows the use of the `.prod()`to calculate the product of all elements in a 1D array and the product along the columns in a 2D array:


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
The following codebyte example demonstrates calculating the product of elements along the rows`(axis=1)`of a 2D array:

```codebyte/python
import numpy as np

arr = np.array([[10, 1], 
                [3, 4]])

# Product along rows (axis=1): (10*1, 3*4)
product_rows = arr.prod(axis=1)

print(product_rows)
```
