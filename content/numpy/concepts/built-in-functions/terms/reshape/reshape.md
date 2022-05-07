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
