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

The **`.mean()`** method calculates and returns the arithmetic mean, i.e., average, for an array of numbers. If the axis is specified, the average is calculated over that axis. Otherwise, the mean is calculated across the flattened array.

## Syntax

```pseudo
numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>, *, where=<no value>)
```

- `a`: The array of numbers for which the mean is to be calculated. If the input is not a list, an error is raised.
- `axis` (Optional): The axis or axes over which the mean is to be computed.
- `dtype` (Optional): The data type for which the mean is to be calculated. By default, `float64` is used for integers and for floating point inputs, it is the same as the input `dtype`.
- `out` (Optional): Allows storing the calculated mean in an existing array instead of creating a new array. It must have the same shape that is expected of the resulting mean.
- `keepdims` (Optional): If `True`, it specifies whether the reduced dimensions should be kept in the result.
- `where` (Optional): It clarifies which elements should be included in the mean calculation.

## Example

The following example creates an array and then uses the `.mean()` method with different attributes to compute the mean of its elements:

```py
import numpy as np

A = np.array([[0,1,2,3],[4,5,6,7],[8,9,10,11]])

print("A:", A)
print("np.mean(A):", np.mean(A))
print("np.mean(A, axis=0):", np.mean(A, axis=0))
print("np.mean(A, axis=0, keepdims=True):", np.mean(A, axis=0, keepdims=True))
print("np.mean(A, axis=1):", np.mean(A, axis=1))
print("np.mean(A, axis=1, keepdims=True):", np.mean(A, axis=1, keepdims=True))
print("np.mean(A, dtype=np.float64):", np.mean(A, dtype=np.float64)) # Computing the mean in 'float64' is more accurate
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
