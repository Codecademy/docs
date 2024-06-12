---
Title: '.mean()'
Description: 'Computes the arithmetic mean along the specified axis.'
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

## Definition

The **`.mean()`** function calculates and returns the arithmetic mean, i.e. average, of an array of numbers. If the axis is specified, the average is taken over that axis, and if not the mean is calculated across the flattened array.

## Syntax

```pseudo
numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>, *, where=<no value>)
```

`.mean()` provides the following arguments:

- `a`: It is the array of numbers for which the mean is wanted. This argument is mandatory, but all others are optional. If `a` is not a list, an error will be raised.
- `axis`: If the axis is given, the mean is computed over the given axis or axes. Otherwise, it is calculated over the flattened array.
- `dtype`: It is the type which used when the mean is calculated. By default, [float64](https://numpy.org/doc/stable/reference/arrays.scalars.html#numpy.float64) is used for integers, and for floating point inputs, it is the same as the input `dtype`.
- `out`: This option allows to store the calculated mean directly in an already existing array, instead of creating a new array to hold the result. Also, this optional argument must have the same shape that is expected of the resulted mean.
- `keepdims`: This argument is **False** by default. Setting it to **True** specifies whether the dimensions that are reduced should be kept in the result.
- `where`: It clarifies which elements should be included in the mean calcultion.

## Example

The following example creates an array then uses a few `.mean()` operations to compute the mean of the elements.

```py
import numpy as np

A = np.array([[0,1,2,3],[4,5,6,7],[8,9,10,11]])

print("A:", A)
print("np.mean(A):", np.mean(A))
print("np.mean(A, axis=0):", np.mean(A, axis=0))
print("np.mean(A, axis=0, keepdims=True):", np.mean(A, axis=0, keepdims=True))
print("np.mean(A, axis=1):", np.mean(A, axis=1))
print("np.mean(A, axis=1, keepdims=True):", np.mean(A, axis=1, keepdims=True))
print("np.mean(A, dtype=np.float64):", np.mean(A, dtype=np.float64)) # Computing the mean in float64 is more accurate:
print("np.mean(A, where=[[True], [False], [False]]):", np.mean(A, where=[[True], [False], [False]]))
```

This produces the following output:

```shell
A: [[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]
np.mean(A): 5.5
np.mean(A, axis=0): [4. 5. 6. 7.]
np.mean(A, axis=0, keepdims=True): [[4. 5. 6. 7.]]
np.mean(A, axis=1): [1.5 5.5 9.5]
np.mean(A, axis=1, keepdims=True): [[1.5]
 [5.5]
 [9.5]]
np.mean(A, dtype=np.float64): 5.5
np.mean(A, where=[[True], [False], [False]]): 1.5
```
