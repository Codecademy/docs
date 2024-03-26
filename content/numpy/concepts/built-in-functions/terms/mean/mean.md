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

The **`.mean()`** function computes the arithmetic mean along the specified axis.

The arithmetic mean is the sum of the elements along the axis divided by the number of elements.

`.mean()` returns the average of the array elements. The average is taken over the flattened array by default, otherwise over the specified axis. [float64](https://numpy.org/doc/stable/reference/arrays.scalars.html#numpy.float64) intermediate and return values are used for integer inputs.

## Syntax

```pseudo
numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>, *, where=<no value>)
```

`.mean()` provides the following arguments:

- `a`: Array containing numbers whose mean is desired. If a is not an array, a conversion is attempted. The `a` argument is required. All other arguments are optional.
- `axis`: Axis or axes along which the means are computed. The default is to compute the mean of the flattened array. If this is a tuple of ints, a mean is performed over multiple axes, instead of a single axis or all the axes as before.
- `dtype`: Type to use in computing the mean. For integer inputs, the default is [float64](https://numpy.org/doc/stable/reference/arrays.scalars.html#numpy.float64); for floating point inputs, it is the same as the input `dtype`. 
- `out`: Alternate output array in which to place the result. The default is **None**; if provided, it must have the same shape as the expected output, but the type will be cast if necessary.
- `keepdims`: If this is set to **True**, the axes which are reduced are left in the result as dimensions with size one. With this option, the result will broadcast correctly against the input array.
- `where`: Elements to include in the mean.

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