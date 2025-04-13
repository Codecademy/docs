---
Title: '.reshape()'
Description: 'Rearranges the data of a ndarray into a new shape.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.reshape()` function rearranges the data in an [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) into a new shape. The new shape must be compatible with the old one, though an index of `-1` can be used to infer one dimension.

## Syntax

```pseudo
numpy.reshape(array, newshape, order = 'C')
```

- `array`: The input array to be reshaped.
- `newshape`: An integer or a [`tuple`](https://www.codecademy.com/resources/docs/python/tuples) representing the desired shape of the new array. If one dimension is set to -1, that dimension will be inferred based on the size of the original array.
- `order`: Specifies how elements should be read from the original array and placed into the reshaped array. It can be set to `'C'`, `'F'`, or `'A'`:
  - `C`: Read/write elements in row-major order (C-like), where the last axis (columns) changes fastest, and the first axis (rows) changes slowest. The elements are placed row by row.
  - `F`: Read/write elements in column-major order (Fortran-like), where the first axis (rows) changes fastest, and the last axis (columns) changes slowest. The elements are placed column by column.
  - `A`: Use Fortran-like index order if the array is Fortran contiguous in memory (i.e., stored sequentially without gaps), or C-like order otherwise.

Using `'C'` or `'F'` in `.reshape()` affects the indexing order but does not alter the physical layout of the data in memory.

If possible, the `ndarray` returned will be a view of the data from the original `ndarray`.

## Example

The following example creates an `ndarray` then uses `.reshape()` to change its dimensions:

```py
import numpy as np

nd1 = np.array([[1,2,3],[4,5,6]])

print(nd1)
print(np.reshape(nd1,(3,2)))
print(np.reshape(nd1,(-1,1)))
```

This produces the following output:

```shell
[[1 2 3]
 [4 5 6]]

[[1 2]
 [3 4]
 [5 6]]

[[1]
 [2]
 [3]
 [4]
 [5]
 [6]]
```

## Codebyte Example

The following example creates a `ndarray` and then uses `order` as an optional parameter for `.reshape()` to change its dimensions:

```codebyte/python
import numpy as np

nd1 = np.array([[10, 20, 30], [40, 50, 60]])

print(nd1)
print(np.reshape(nd1, (3, 2), order='C'))
print(np.reshape(nd1, (3, 2), order='F'))
```
