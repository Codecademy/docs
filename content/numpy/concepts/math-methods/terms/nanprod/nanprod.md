---
Title: '.nanprod()'
Description: 'Calculates the product of array elements.'
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
  - 'paths/computer-science'
---

In NumPy, the **`.nanprod()`** function calculates the product of array elements over a specified axis, treating `NaN` (Not a Number) values as 1. This is useful when working with arrays that contain missing or undefined values represented as `NaN`.

## Syntax

```pseudo
numpy.nanprod(a, axis=None, dtype=None, out=None, keepdims=<no value>)
```

- `a`: An array for which the product is calculated.
- `axis`: An optional parameter used to specify the axis along which the product is computed. If not specified, the product of all elements in the array is calculated.
- `dtype` : An optional parameter used to specify the data type of the result. If not specified, it defaults to the data type of the input array, or the default platform integer if the input contains integers.
- `out`: An optional parameter specifying the array to store the result. If not provided, a new array is created.
- `keepdims`: An optional parameter. If set to `True`, the reduced axes are retained in the result as dimensions with size one, allowing the result to broadcast correctly.

## Example 1

This example demonstrates using `.nanprod()` function to calculate the product of an array containing `NaN` values:

```py
import numpy as np

# Creating a numpy array with NaN values
arr = np.array([1, 2, np.nan, 4, 5])

# Computing the product of the array, treating NaN as 1
result = np.nanprod(arr)

print(result)
```

The above example code results in the following output:

```shell
40.0
```

## Example 2

This example shows how to use `.nanprod()` function along a specific axis:

```py
import numpy as np

# Creating a 2D numpy array with NaN values
arr = np.array([[1, 2, np.nan], [4, 5, 6]])

# Computing the product along axis 0 (columns)
result = np.nanprod(arr, axis=0)

print(result)
```

The above example code results in the following output:

```shell
[4. 10. 6.]
```

## Codebyte Example

In this codebyte example, the `.nanprod()` method computes the product of the elements in the array along both axes, demonstrating the use of the `keepdims` parameter:

```codebyte/python
import numpy as np

arr = np.array([[1, 2, np.nan], [4, np.nan, 6], [7, 8, 9]])

result = np.nanprod(arr, axis=(0, 1), keepdims=True)

print("Original array:")
print(arr)
print("\nResult:")
print(result)
```
