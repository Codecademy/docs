---
Title: '.trace()'
Description: 'Returns the sum of the elements along the diagonal of an array.'
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

The **`.trace()`** method returns the sum of the elements along the diagonal of a NumPy array. For 2D arrays, the diagonal consists of elements where the row index equals the column index. For multi-dimensional arrays, the axes specified by axis1 and axis2 define the matrix dimensions for diagonal summation.

The `.trace()` method supports optional parameters to select a diagonal offset or specify axes, making it versatile for arrays of different shapes and orientations.

## Syntax

```pseudo
ndarray.trace(offset=0, axis1=0, axis2=1, dtype=None, out=None)
```

**Parameters:**

- `offset` (Optional): The offset of the diagonal from the main diagonal. A positive value selects a diagonal above the main diagonal, while a negative value selects one below. Default is `0` (main diagonal).
- `axis1` (Optional): The axis to be used as the first axis of the 2D sub-arrays from which the diagonals should be taken. Default is `0`.
- `axis2` (Optional): The axis to be used as the second axis of the 2D sub-arrays from which the diagonals should be taken. Default is `1`.
- `dtype` (Optional): The data type of the returned array. If not specified, it is determined from the input array.
- `out` (Optional): An alternative output array in which to place the result. It must have the same shape as the expected output.

**Return value:**

Returns the sum of the diagonal elements as a scalar or array, depending on the input array's dimensions and the specified parameters.

## Example

This example demonstrates how to use `.trace()` to calculate the sum of the main diagonal elements of a 2D array:

```py
import numpy as np

# Create a 2D array
array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Original array:")
print(array_2d)

# Calculate the trace (sum of main diagonal)
trace_value = array_2d.trace()
print("\nTrace (sum of diagonal elements):", trace_value)
```

The output produced by this code is:

```shell
Original array:
[[1 2 3]
 [4 5 6]
 [7 8 9]]

Trace (sum of diagonal elements): 15
```

This code creates a 3×3 array and calculates the trace by summing the diagonal elements (1 + 5 + 9 = 15).

## Codebyte Example

```codebyte/python
import numpy as np

# Create a 3x3 matrix
matrix = np.array([[2, 0, 1], [1, 1, 0], [0, 1, 2]])
print("Matrix:")
print(matrix)

# Calculate the trace
trace_result = matrix.trace()
print("\nTrace of the matrix:", trace_result)

# Calculate trace with offset
trace_offset_1 = matrix.trace(offset=1)
trace_offset_minus_1 = matrix.trace(offset=-1)
print("Trace with offset 1 (above diagonal):", trace_offset_1)
print("Trace with offset -1 (below diagonal):", trace_offset_minus_1)
```
