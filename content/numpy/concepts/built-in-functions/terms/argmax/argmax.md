Title: '.argmax()'
Description: 'Returns the indices of the maximum values along a specified axis in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Machine Learning'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The NumPy **`.argmax()`** function returns the indices of the maximum values along a specified axis in an array.

## Syntax

```pseudo
numpy.argmax(array, axis=None, out=None, keepdims=<no value>)
```

array: Input array to find the maximum values in.
axis: Optional. The axis along which to find the maximum values. If None, the flattened array is used.
out: Optional. An array to place the result in. Must be of appropriate shape and dtype.
keepdims: Optional. If set to True, the axes which are reduced are left in the result as dimensions with size one.

## Example

The following examples demonstrate how to use the `.argmax()` function with both 1D and 2D arrays.

```python
import numpy as np

# 1D array example
scores = np.array([10, 30, 20, 50, 40])
max_index = np.argmax(scores)
print("Index of max value:", max_index)  # Output: 3
print("Max value:", scores[max_index])   # Output: 50

# Create 2D array
matrix = np.array([[1, 5, 3], 
                  [4, 2, 6]])

# Analyze columns (axis=0)
print("Max indices per column:", np.argmax(matrix, axis=0))  # Output: [1 0 1]

# Analyze rows (axis=1)
print("Max indices per row:", np.argmax(matrix, axis=1))     # Output: [1 2]
```

```shell
Index of max value: 3
Max value: 50
Max indices per column: [1 0 1]
Max indices per row: [1 2]
```

## Codebyte Example

```python
import numpy as np

# Create a 2D array
data = np.array([[10, 20, 30], [40, 50, 60]])

# Find the index of the maximum value along axis 1 (rows)
result = np.argmax(data, axis=1)
print(result)  # Output: [2 2]
```