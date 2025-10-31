---
Title: '.diagonal()'
Description: 'Returns the specified diagonal elements of an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Linear Algebra'
  - 'Matrices'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.diagonal()`** method returns the specified diagonal elements of a [NumPy](https://www.codecademy.com/resources/docs/numpy) array. For 2D arrays, the diagonal consists of elements where the row index equals the column index (or with an offset). For multi-dimensional arrays, the axes specified by `axis1` and `axis2` define the matrix dimensions from which to extract the diagonal.

Unlike [`.trace()`](https://www.codecademy.com/resources/docs/numpy/ndarray/trace), which returns the sum of diagonal elements, `.diagonal()` returns the actual diagonal elements as an array. This method typically returns a view rather than a copy, making it memory-efficient for large arrays.

## Syntax

```pseudo
ndarray.diagonal(offset=0, axis1=0, axis2=1)
```

**Parameters:**

- `offset` (Optional): The diagonal offset from the main diagonal. A positive value selects a diagonal above the main diagonal, while a negative value selects one below. Default is `0` (main diagonal).
- `axis1` (Optional): The axis to be used as the first axis of the 2D sub-arrays from which the diagonals should be taken. Default is `0`.
- `axis2` (Optional): The axis to be used as the second axis of the 2D sub-arrays from which the diagonals should be taken. Default is `1`.

**Return value:**

Returns an array containing the diagonal elements. For 2D arrays, this is a 1D array. For higher-dimensional arrays, the result has one fewer dimension than the input.

## Example 1: Extracting Diagonals from 2D Arrays

This example demonstrates how to use `.diagonal()` to extract different diagonals from a 2D array:

```py
import numpy as np

# Create a 3x3 array
array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Original array:")
print(array_2d)

# Extract main diagonal
main_diag = array_2d.diagonal()
print("\nMain diagonal:", main_diag)

# Extract diagonal above the main diagonal (offset=1)
upper_diag = array_2d.diagonal(offset=1)
print("Upper diagonal (offset=1):", upper_diag)

# Extract diagonal below the main diagonal (offset=-1)
lower_diag = array_2d.diagonal(offset=-1)
print("Lower diagonal (offset=-1):", lower_diag)
```

The output produced by this code is:

```shell
Original array:
[[1 2 3]
 [4 5 6]
 [7 8 9]]

Main diagonal: [1 5 9]
Upper diagonal (offset=1): [2 6]
Lower diagonal (offset=-1): [4 8]
```

This code creates a 3×3 array and extracts different diagonals using various offset values. The main diagonal contains elements `[1, 5, 9]`, the upper diagonal `[2, 6]`, and the lower diagonal `[4, 8]`.

## Example 2: Working with Rectangular Matrices

This example shows how `.diagonal()` handles non-square matrices:

```py
import numpy as np

# Create a rectangular array (4x3)
rect_array = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
print("Rectangular array (4x3):")
print(rect_array)

# Extract main diagonal
main_diag = rect_array.diagonal()
print("\nMain diagonal:", main_diag)

# Extract upper diagonal
upper_diag = rect_array.diagonal(offset=1)
print("Upper diagonal (offset=1):", upper_diag)

# Extract lower diagonal
lower_diag = rect_array.diagonal(offset=-2)
print("Lower diagonal (offset=-2):", lower_diag)
```

The code generates the following output:

```shell
Rectangular array (4x3):
[[ 1  2  3]
 [ 4  5  6]
 [ 7  8  9]
 [10 11 12]]

Main diagonal: [1 5 9]
Upper diagonal (offset=1): [2 6]
Lower diagonal (offset=-2): [7 11]
```

For rectangular matrices, the diagonal length is limited by the smaller dimension, and different offsets extract different parallel diagonals.

## Example 3: Using `.diagonal()` with Multi-Dimensional Arrays

This example demonstrates how to extract diagonals from higher-dimensional arrays by specifying axes:

```py
import numpy as np

# Create a 3D array (2x3x3)
array_3d = np.array([[[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                     [[10, 11, 12], [13, 14, 15], [16, 17, 18]]])
print("3D array shape:", array_3d.shape)
print("3D array:")
print(array_3d)

# Extract diagonal from the last two dimensions
diag_default = array_3d.diagonal()
print("\nDiagonal (axis1=0, axis2=1):")
print(diag_default)

# Extract diagonal with different axes
diag_12 = array_3d.diagonal(axis1=1, axis2=2)
print("\nDiagonal (axis1=1, axis2=2):")
print(diag_12)
```

The output produced by this code is:

```shell
3D array shape: (2, 3, 3)
3D array:
[[[ 1  2  3]
  [ 4  5  6]
  [ 7  8  9]]

 [[10 11 12]
  [13 14 15]
  [16 17 18]]]

Diagonal (axis1=0, axis2=1):
[[ 1 13]
 [ 2 14]
 [ 3 15]]

Diagonal (axis1=1, axis2=2):
[[ 1  5  9]
 [10 14 18]]
```

For 3D arrays, `.diagonal()` extracts diagonal elements from 2D slices defined by the specified axes, resulting in an array with one fewer dimension.

## Codebyte Example

Run the following codebyte example to understand the usage of the `.diagonal()` method:

```codebyte/python
import numpy as np

# Create a 4x4 matrix
matrix = np.array([[1, 2, 3, 4],
                   [5, 6, 7, 8],
                   [9, 10, 11, 12],
                   [13, 14, 15, 16]])
print("Original matrix:")
print(matrix)

# Extract and display different diagonals
print("\nMain diagonal:", matrix.diagonal())
print("First upper diagonal:", matrix.diagonal(1))
print("Second upper diagonal:", matrix.diagonal(2))
print("First lower diagonal:", matrix.diagonal(-1))
```
