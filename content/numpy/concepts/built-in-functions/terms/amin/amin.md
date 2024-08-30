---
Title: '.amin()'
Description: 'Returns the minimum of an array or minimum along an axis.'
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

The **`.amin()`** function returns the minimum of an array or minimum along an axis. The `.amin()` function is equivalent to `ndarray.min()`.

## Syntax

```pseudo
numpy.amin(a, axis, out, keepdims, initial, where)
```

The `a` parameter is required and represents the array of elements to choose the minimum from. All other parameters are optional.

Parameters of the `.amin()` function:

- `a`: The array of elements to choose the minimum from.
- `axis`: An int or a tuple of ints specifying the axis/axes along which to choose the minimum. By default it is set as `axis=None`.
- `out`: An [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) to receive result. Must have the same shape as expected output.
- `keepdims`: A boolean; if `True` will keep reduced axes in the result as dimensions with size one.
- `initial`: The maximum value of an output element.
- `where`: A boolean array that maps to `array` and selects which elements to compare for the minimum.

Returns:

- If axis is None, the result would be a scalar value of the minimum element of the array.
- If axis is an integer, the result would be an array of dimension `a.ndim - 1`.
- If axis is a tuple, the result would be an array of dimension `a.ndim - len(axis)`.

## Example

The following example creates an array then uses a few `.amin()` operations to return the minimum.

```py
import numpy as np

nd = np.array([[1,2,3],[4,5,6]])

print(np.amin(nd))
print(np.amin(nd, axis=0))
print(np.amin(nd, axis=1))
```

This produces the following output:

```shell
1
[1 2 3]
[1 4]
```

## Codebyte Example

The following example creates an array then uses a few `.amin()` operations with various arguments to return the minimum.

```codebyte/python
import numpy as np

nd = np.array([[1,2,3],[4,5,6]])

print("Returns the minimum as a scalar value:")
print(np.amin(nd))

print("Returns minimum along rows (axis=0):")
print(np.amin(nd, axis=0))

print("Returns minimum along columns (axis=1):")
print(np.amin(nd, axis=1))

print("Returns minimum along columns (axis=1) when keepdims=True:")
print(np.amin(nd, axis=1, keepdims=True))
```
