---
Title: '.reshape()'
Description: 'Rearranges the data of an ndarray into a new shape.'
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
numpy.reshape(array, newshape)
```

Where `array` is the array to be reshaped, and `newshape` can be an integer or a [`tuple`](https://www.codecademy.com/resources/docs/python/tuples) representing the size of the new array. If a dimension is `-1`, that dimension will be inferred from the size of the original array.

If possible, the `ndarray` returned will be a view of the original `ndarray`'s data.

## Example

The following example creates an `ndarray` then uses `.reshape()` to change its dimensions.

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

Optionally, a third parameter can be added to the syntax: `order`.

`order` reads the elements from `array` in the current index order and places the elements into the reshaped array using the same index order. It can be set to `'C'`, `'F'`, or `'A'`. `C` means to read/write the elements using C-like index order, or in other words, the elements are placed row by row. The last axis index (columns) changes first (fastest), and the first axis index (rows) changes afterward (slowest). `F` means to read/write the elements using Fortran-like index order, where the elements are placed column by column. Here, the first axis index (rows) changes faster while the last axis index (columns) changes slower. Using `C` or `F` in `.reshape()` means that the function is only reshaping the way that indexes are placed in the array, and not like data physically stored in the computer memory (memory layout). `A` means to read/write the elements in Fortran-like index order if `array` is Fortran contiguous in memory, meaning, in a sequencial and continuous manner without gaps between elements, or in C-like index order otherwise.

```pseudo
numpy.reshape(array, newshape, order = 'C')
```

The following example creates an `ndarray` then uses `order` as an optional parameter for `.reshape()` to change its dimensions.

```py
import numpy as np

nd1 = np.array([[10, 20, 30], [40, 50, 60]])

print(nd1)
print(np.reshape(nd1, (3, 2), order='C')) # row by row
print(np.reshape(nd1, (3, 2), order='F')) # column by column
```

This produces the following output:

```shell
[[10 20 30]
 [40 50 60]]


[[10 20]
 [30 40]
 [50 60]]


[[10 50]
 [40 30]
 [20 60]]
```

> [!Note]
> The last output just reflects the natural behaviour from Fortran indexation order
