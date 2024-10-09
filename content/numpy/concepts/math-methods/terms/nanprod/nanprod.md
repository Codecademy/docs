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
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In NumPy, the **`.nanprod()`** function calculates the product of array elements over a specified axis, treating `NaN` (Not a Number) values as 1. This function is particularly useful when working with arrays that may contain missing or undefined values represented as `NaN`.

## Syntax

```pseudo
numpy.nanprod(a, axis=None, dtype=None, out=None, keepdims=False)
```

- `a`: An array for which the product is calculated.
- `axis`: An optional parameter used as the axis along which the product is computed. If not specified, the product of all elements is calculated.
- `dtype` : An optional parameter used as the data type of the output. If not specified, then the data type the input is used.
- `out`: An optional parameter specifying the array to store the result. If not provided, a new array is created.
- `keepdims`: An optional parameter if set to True, the axes that are reduced are left in the result as dimensions with size one.

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

This example showcases how `.nanprod()` handles NaN values and maintains the dimensions of the output when `keepdims=True`.