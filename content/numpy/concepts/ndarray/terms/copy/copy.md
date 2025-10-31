---
Title: '.copy()'
Description: 'Creates and returns a new, independent copy of a NumPy ndarray.'
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

The **`.copy()`** method in NumPy creates a new, independent copy of an array (`ndarray`). Unlike simple assignment, which creates a view that shares the same underlying data, it ensures that changes to the new array do not affect the original, and vice versa. This is useful when you need to modify an array while preserving the original data.

## Syntax

```pseudo
ndarray.copy(order='C')
```

**Parameters:**

- `order` (optional, `str`): Controls the memory layout of the copy.
  - `'C'` (default): C-style (row-major) order.
  - `'F'`: Fortran-style (column-major) order.
  - `'A'`: Preserves the array’s order — Fortran if the original is Fortran-contiguous, otherwise C.
  - `'K'`: Keeps the order as closely as possible to the original.

**Return value:**

Returns a new `ndarray` object that is an independent copy of the original array.

## Example: Basic Usage of `.copy()`

The following example demonstrates the difference between assignment (which shares data) and using `.copy()` (which creates an independent copy):

```py
import numpy as np

# Original array
original = np.array([10, 20, 30])
print(f"Original array: {original}")

# Assignment creates a reference (shares data)
view = original
view[0] = 111
print(f"Original after modifying view: {original}")

# Reset original for clarity
original = np.array([10, 20, 30])

# copy() creates an independent copy
copied_array = original.copy()
copied_array[0] = 999
print(f"Original after modifying copy: {original}")
print(f"Copied array: {copied_array}")
```

Output of the above example:

```shell
Original array: [10 20 30]
Original after modifying view: [111 20 30]
Original after modifying copy: [10 20 30]
Copied array: [999 20 30]
```

## Codebyte Example: Copying a 2D Array Using `.copy()`

This example shows how `.copy()` works with a 2D array. It modifies the copy while leaving the original unchanged:

```codebyte/python
import numpy as np

# Create the original 2D array
original_arr = np.arange(4).reshape((2, 2))
print(f"Original array:\n{original_arr}")

# Create an independent copy
copied_arr = original_arr.copy()

# Modify an element in the copy
copied_arr[0, 1] = 50
print(f"\nCopied array after modification:\n{copied_arr}")

# Verify the original array is unaffected
print(f"\nOriginal array (still unchanged):\n{original_arr}")
```
