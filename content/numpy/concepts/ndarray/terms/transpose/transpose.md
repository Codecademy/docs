---
Title: '.transpose()'
Description: 'Reverses or permutes the axes of an ndarray.'
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

The **`.transpose()`** method reverses or permutes the axes of an [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray).

## Syntax

```pseudo
numpy.transpose(axes)
```

Where `axes` is a [`tuple`](https://www.codecademy.com/resources/docs/python/tuples) or list with as many entries as there are dimensions, listing the 0-based indices of each index in the new order in which they'll appear in the permuted array. If `axes` is omitted, `.transpose()` will reverse the order of axes.

Unlike the built-in [`numpy.transpose()`](https://www.codecademy.com/resources/docs/numpy/built-in-functions/transpose) function, the `numpy.ndarray.transpose()` method can accept the axes as separate arguments, as well as in the form of a tuple (i.e., `array.transpose(2,0,1)` is the same as `array.transpose((2,0,1))`).

If possible, the `ndarray` returned will be a view of the original `ndarray`'s data.

## Example

The below example creates an `ndarray` and then uses `.transpose()` on it.

```py
import numpy as np

nd1 = np.array([[1,2,3],[4,5,6]])

print(nd1)
print(nd1.transpose())
```

This produces the following output:

```shell
[[1 2 3]
 [4 5 6]]

[[1 4]
 [2 5]
 [3 6]]
```
