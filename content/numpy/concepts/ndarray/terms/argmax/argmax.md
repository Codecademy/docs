---
Title: '.argmax()'
Description: 'Returns the indices of the maximum values along a specified axis'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Arrays'
  - 'NumPy'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

## Definition

The **`.argmax()`** method returns the indices of the maximum values along a specified axis in a NumPy ndarray.

## Syntax

```py
ndarray.argmax(axis=None, out=None)
```

### Parameters

- `axis` (int, optional): The axis along which to find the maximum. If `None`, the index is into the flattened array. Default is `None`.
- `out` (ndarray, optional): Alternative output array for the result. Must have the same shape as the expected output.

### Returns

Returns an ndarray of indices into the array with the same shape as `axis`.

## Example 1: Finding Maximum Index in 1D Array

```py
import numpy as np

arr = np.array([3, 1, 4, 1, 5, 9, 2])
max_index = arr.argmax()

print("Array:", arr)
print("Index of maximum value:", max_index)
print("Maximum value:", arr[max_index])
```

Output:

```shell
Array: [3 1 4 1 5 9 2]
Index of maximum value: 5
Maximum value: 9
```

## Example 2: Finding Maximum Indices Along Axis in 2D Array

```py
import numpy as np

matrix = np.array([[1, 5, 3],
                   [9, 2, 8],
                   [4, 7, 6]])

# Maximum index along axis 0 (columns)
max_col = matrix.argmax(axis=0)

# Maximum index along axis 1 (rows)
max_row = matrix.argmax(axis=1)

print("Matrix:")
print(matrix)
print("\nMax indices along axis 0 (columns):", max_col)
print("Max indices along axis 1 (rows):", max_row)
```

Output:

```shell
Matrix:
[[1 5 3]
 [9 2 8]
 [4 7 6]]

Max indices along axis 0 (columns): [1 2 1]
Max indices along axis 1 (rows): [1 0 1]
```

## Example 3: Flattened Array Maximum

```py
import numpy as np

matrix = np.array([[10, 25, 15],
                   [30, 20, 35]])

# Find index in flattened array
flat_max_index = matrix.argmax()

print("Matrix:", matrix)
print("Index of maximum in flattened array:", flat_max_index)
print("Maximum value:", matrix.flat[flat_max_index])
```

Output:

```shell
Matrix: [[10 25 15]
 [30 20 35]]
Index of maximum in flattened array: 5
Maximum value: 35
```

## Codebyte Example

```codebyte/python
import numpy as np

# Create sample data
scores = np.array([85, 92, 78, 95, 88])
students = ['Alice', 'Bob', 'Carol', 'David', 'Eve']

# Find the student with highest score
top_student_index = scores.argmax()

print(f"Scores: {scores}")
print(f"Highest score index: {top_student_index}")
print(f"Top student: {students[top_student_index]}")
print(f"Score: {scores[top_student_index]}")
```
