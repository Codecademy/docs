---
Title: '.sum()'
Description: 'Sums the elements of an array over a given axis.'
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

The `.sum()` function sums the elements of an array over a given axis.

## Syntax

```pseudo
numpy.sum(a, axis, dtype, out, keepdims, inital, where)
```

All arguments except `a`, the array of elements to sum, are optional. Using `a` by itself will result in a scalar that sums all the elements of the array.

`.sum()` provides the following arguments:

- `a`: the array of elements to sum.
- `axis`: An int or tuple of ints specifying the axis/axes along which to sum.
- `dtype`: The type of the returned array and the accumulator used to sum elements. Defaults to the dtype of `array`.
- `out`: An [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) to receive result. Must have the same shape as expected output.
- `keepdims`: A boolean if true will keep reduced axes in the result as dimensions with size one.
- `inital`: The starting value for sum.
- `where`: A boolean array that maps to `array` and selects elements to include into the sum.

## Example

The following example creates an array then uses some `.sum` operations to sum the elements.

```python
import numpy as np

nd = np.array([[1,2,3],[4,5,6]])

print(np.sum(nd))
print(np.sum(nd, axis=0))
print(np.sum(nd, axis=1))
```

This produces the following output:

```shell
21
[5 7 9]
[ 6 15]
```
