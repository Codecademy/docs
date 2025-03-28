---
Title: '.cumsum()'
Description: 'Computes the cumulative sum of an array along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.cumsum()`** function in NumPy computes the cumulative sum of an array along a specified axis. It returns an array where each element is the sum of all previous elements up to that index.

## Syntax

```pseudo
numpy.cumsum(a, axis, dtype, out)


## Example
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.cumsum(arr))  # Cumulative sum of the flattened array
print(np.cumsum(arr, axis=0))  # Cumulative sum along axis 0 (columns)
print(np.cumsum(arr, axis=1))  # Cumulative sum along axis 1 (rows)

```

This produces the following output:

[ 1 3 6 10 15 21]
[[1  2  3]
[ 5  7  9]]
[[1  3  6]
[ 4  9 15]]
