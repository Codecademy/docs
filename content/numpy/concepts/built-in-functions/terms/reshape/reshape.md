---
Title: '.reshape()'
Description: 'Changes the shape of a NumPy array without altering its data or total size.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.reshape()`** method gives a new shape to a NumPy array without changing its data. It returns a new array object with the specified shape, while maintaining the same data elements of the original array. The total size of the new array must be the same as the original array.

NumPy's `.reshape()` function is essential for data manipulation and multi-dimensional array transformations. It's commonly used in data preprocessing for machine learning, image processing, and scientific computing, where changing dimensions while preserving data is required.

## Syntax

```pseudo
numpy.reshape(a, shape=None, order='C')
```

**Parameters:**

- `a`(array_like): Array to be reshaped.
- `shape` (array_like): If an integer, the result will be a 1-D array of that length. One shape dimension can be -1, calculated from the length of the array and the remaining dimensions.
- `order` (optional): Specifies the reading/writing order of the elements:
  - `'C'` means C-like index order (last axis index changes fastest).
  - `'F'` means Fortran-like index order (first axis index changes fastest).
  - `'A'` means read/write the elements using Fortran-like index order if `a` is Fortran contiguous, C-like order otherwise.

**Return value:**

It returns a reshaped array. If possible, it returns a view of the original array; otherwise, it returns a new copy.

## Example 1: Reshape 1D to 2D Array

The following example shows how to convert a 1D array into a 2D array:

```py
import numpy as np

# Create a 1D array with 12 elements
arr = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120])

# Reshape the 1D array to a new 2D array having 4 rows and 3 columns
reshaped_arr = arr.reshape(4, 3)

# Display the results
print("Original array:")
print(arr)
print("\nReshaped array (4x3):")
print(reshaped_arr)
```

The output produced by this code will be:

```shell
Original array:
[ 10  20  30  40  50  60  70  80  90 100 110 120]

Reshaped array (4x3):
[[ 10  20  30]
 [ 40  50  60]
 [ 70  80  90]
 [100 110 120]]
```

## Example 2: Using the `-1` Parameter for Automatic Dimension Calculation

This example shows how to use the special `-1` parameter that automatically calculates the size of one dimension based on the array length and other specified dimensions:

```py
import numpy as np

# Create a 1D array with 24 elements
data = np.arange(24)  # Creates [0, 1, 2, ..., 23]

# Reshape to 3D array with shape (2, 3, 4)
# The -1 tells NumPy to infer the appropriate dimension automatically
array_1 = data.reshape(2, 3, 4)
print("Explicit shape (2, 3, 4):")
print(array_1)
print("\nShape of array_1:", array_1.shape)

# Reshape using -1 to automatically determine the first dimension
array_2 = data.reshape(-1, 4)
print("\nAutomatic dimension calculation (-1, 4):")
print(array_2)
print("\nShape of array_2:", array_2.shape)

# Reshape using -1 to automatically determine the last dimension
array_3 = data.reshape(2, -1)
print("\nAutomatic dimension calculation (2, -1):")
print(array_3)
print("\nShape of array_3:", array_3.shape)
```

The output of this code will be:

```shell
Explicit shape (2, 3, 4):
[[[ 0  1  2  3]
  [ 4  5  6  7]
  [ 8  9 10 11]]

 [[12 13 14 15]
  [16 17 18 19]
  [20 21 22 23]]]

Shape of array_1: (2, 3, 4)

Automatic dimension calculation (-1, 4):
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]
 [16 17 18 19]
 [20 21 22 23]]

Shape of array_2: (6, 4)

Automatic dimension calculation (2, -1):
[[ 0  1  2  3  4  5  6  7  8  9 10 11]
 [12 13 14 15 16 17 18 19 20 21 22 23]]

Shape of array_3: (2, 12)
```

## Codebyte Example: Handling Multi-dimensional Transformations

This example demonstrates reshaping between different dimensional structures and the importance of maintaining the same total number of elements:

```codebyte/python
import numpy as np

# Create a 3D array with shape (2, 2, 3)
array_3d = np.array([
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]]
])
print("Original 3D array shape:", array_3d.shape)
print(array_3d)

# Flatten to 1D
flattened = array_3d.reshape(-1)
print("\nFlattened to 1D:")
print(flattened)

# Convert to 2D (4x3)
array_2d = array_3d.reshape(4, 3)
print("\nReshaped to 2D (4x3):")
print(array_2d)

# Try to reshape to a shape that's not compatible
try:
  # This will fail because 2×2×3 = 12 elements can't be reshaped to 3×3 (9 elements)
  wrong_shape = array_3d.reshape(3, 3)
except ValueError as e:
  print("\nError when reshaping to incompatible shape:")
  print(e)
```

## Frequently Asked Questions

### 1. Is `.reshape(-1)` the same as `.flatten()`?

While both `.reshape(-1)` and [`.flatten()`](https://www.codecademy.com/resources/docs/numpy/ndarray/flatten) can convert an array to a 1D array, they have key differences:

- `.reshape(-1)` returns a view of the original array when possible, meaning changes to the reshaped array may affect the original.
- `.flatten()` always returns a copy of the flattened array, so modifying it never affects the original.
- For most use cases where you just need a flat version of an array, they can be used interchangeably, but `.reshape(-1)` may be more memory-efficient.

### 2. Can we reshape into any shape?

No, the total number of elements must remain the same. For example, an array with 12 elements can be reshaped into (4,3), (2,6), (3,4), or (12,), but not into (3,3) or (5,3) because those would require 9 and 15 elements, respectively. The product of the dimensions in the new shape must equal the total number of elements in the original array.

### 3. What happens when using reshape versus resize?

- `.reshape()` returns a new array (or view) with the new shape, leaving the original array unchanged.
- `.resize()` modifies the array in-place and can change the total number of elements (either by truncating or padding with zeros).
- Use `.reshape()` when you want to preserve all data and need the same number of elements.
- Use `.resize()` when modifying the array’s total size, even if it involves truncating data or padding with zeros.

### 4. How does the order parameter affect reshaping?

The `order` parameter determines how elements are read from the original array and placed into the reshaped array:

- With `order='C'` (default), elements are read/written in row-major order (last index changes fastest).
- With `order='F'`, elements are read/written in column-major order (first index changes fastest).
- This impacts the arrangement of elements when reshaping between different dimensions, especially when the array is not contiguous in memory.
