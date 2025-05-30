---
Title: '.ones()'
Description: 'Creates a new array of the given shape and type, filled with ones.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Linear Algebra'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In NumPy, the **`.ones()`** function creates a new array of the given shape and type, filled with ones.

This function is particularly useful when there is a need to initialize an array with a placeholder value of `1`, which might be multiplied by another value or used in various numerical computations later.

## Syntax

```pseudo
numpy.ones(shape, dtype=None, order='C', *, like=None)
```

**Parameters:**

`shape`: `int` or tuple of `int`

- Defines the dimensions of the new array.
- If an int, a 1-D array of that length is created.
- If a tuple of ints, an array with those dimensions is created (e.g., (2, 3) for a 2x3 array).

`dtype`: data-type, optional

- The desired data type for the array elements.
- If not specified, it defaults to numpy.float64.
- Examples: numpy.int32, numpy.bool_, float.

`order`: {'C', 'F'}, optional, default: 'C'

- Specifies whether to store multi-dimensional data in row-major (C-style) or column-major (Fortran-style) order in memory.
- 'C' means C-contiguous order (row-major).
- 'F' means Fortran-contiguous order (column-major).

`like`: array_like, optional (New in version 1.20.0)

- Reference object to enable the creation of arrays that are not NumPy arrays.
- If an array_like passed to like supports the `__array_function__` protocol, the result will be defined by it.
- If None (default), a standard NumPy array is returned.

**Return value:**

`out`: ndarray

- An array of ones of the given shape, `dtype`, and order.

## Example

This example demonstrates the usage of the `.ones()` function:

```py
import numpy as np

# Create a 1-D array with 5 ones (default dtype is float64)
arr1 = np.ones(5)
print("Array 1:\n", arr1)
print("Data type of Array 1:", arr1.dtype)
print("Shape of Array 1:", arr1.shape)

# Create a 2-D array (3 rows, 4 columns) of ones with integer type
arr2 = np.ones((3, 4), dtype=int)
print("\nArray 2:\n", arr2)
print("Data type of Array 2:", arr2.dtype)
print("Shape of Array 2:", arr2.shape)

# Create a 3-D array of ones
arr3 = np.ones((2, 3, 2))
print("\nArray 3:\n", arr3)
print("Data type of Array 3:", arr3.dtype)
print("Shape of Array 3:", arr3.shape)
```

Here is the output:

```shell
Array 1:
 [1. 1. 1. 1. 1.]
Data type of Array 1: float64
Shape of Array 1: (5,)

Array 2:
 [[1 1 1 1]
  [1 1 1 1]
  [1 1 1 1]]
Data type of Array 2: int64
Shape of Array 2: (3, 4)

Array 3:
 [[[1. 1.]
   [1. 1.]
   [1. 1.]]

  [[1. 1.]
   [1. 1.]
   [1. 1.]]]
Data type of Array 3: float64
Shape of Array 3: (2, 3, 2)
```
