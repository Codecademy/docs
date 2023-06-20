---
Title: '.amax()'
Description: 'Returns the maximum of a given array or maximum along an axis.'

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

The **`.amax()`** function returns the maximum value of a given array or the maximum along an axis. The `.amax()` function is equivalent to the NumPy method `ndarray.max()`.

## Syntax

```pseudo
numpy.amax(a, axis, out, keepdims, initial, where)
```

The `a` parameter is required and represents the array of elements to choose the maximum from. All other parameters are optional.

Parameters of the `.amax()` function:

- `a`: (Input) The array of elements to choose the maximum from.
- `axis`: (Default = None) An int or a tuple of ints specifying the axis/axes along which to operate. If a tuple of ints, the maximum is across multiple axes.
- `out`: (Default = None) An [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) to receive result. Must have the same shape as the expected output.
- `keepdims`: (Default = <no value>) A boolean; if `True` will keep reduced axes in the result as dimensions with size one.
- `inital`: (Default = <no value>) The minimum value of an output element.
- `where`: (Default = <no value>) A boolean array that maps to `a` with identical dimensions and selects which elements to compare for the maximum.

Returns:

- If `axis` is None, the result would be a scalar value.
- If `axis` is an integer, the result would be an array of dimension `a.ndim - 1`.
- If `axis` is a tuple, the result would be an array of dimension `a.ndim - len(axis)`.

## Example

The following example creates an array and applies several `.amin()` operations, and returns each result to console.

```py
import numpy as np

nd = np.array([[2,4,6,8],[10,12,14,16]])

print(np.amax(nd))
print(np.amax(nd, axis=0))
print(np.amax(nd, axis=1))
```

This produces the following output:

```shell
16
[10 12 14 16]
[ 8 16]
```

## Codebyte Example

The following example creates a 2-dimensional array composed of random integers (between 1 and 20). The code prints the array, and then prints the result of four `.amax()` operations that use different arguments.

```codebyte/python
import numpy as np

randnums= np.random.randint(1,20, size=(2,8))

print("Your randomised 2-dimensional array of integers is:")
print(randnums)
print("The maximum value contained in the the flattened array is:")
print(np.amax(randnums))

print("Returns maxima along first axis (axis=0):")
print(np.amax(randnums, axis=0))

print("Returns maximum along second axis (axis=1):")
print(np.amax(randnums, axis=1))

print("Returns maximum along second axis (axis=1) when keepdims=True:")
print(np.amax(randnums, axis=1, keepdims=True))
```
