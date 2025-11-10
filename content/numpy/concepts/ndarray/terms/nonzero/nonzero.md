---
Title: 'nonzero()'
Description: 'Returns the indices of the array elements that are non-zero.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Array'
  - 'Data'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`numpy.ndarray.nonzero()`** method returns the indices of elements in an [array](https://www.codecademy.com/resources/docs/numpy/ndarray) that are non-zero or evaluate to `True`. It is often used to locate positions of meaningful or valid data within an array.

## Syntax

```pseudo
ndarray.nonzero()
```

**Parameters:**

This method takes no parameters.

**Return value:**

Returns a [tuple](https://www.codecademy.com/resources/docs/python/tuples) of arrays, one for each dimension, containing the indices of elements that are non-zero.

## Example: Finding Non-Zero Elements in a 1D Array

In this example, the indices of all non-zero elements in a 1D NumPy array are returned:

```py
import numpy as np

arr = np.array([0, 2, 0, 4, 5])
result = arr.nonzero()
print(result)
```

The output of this code is:

```shell
(array([1, 3, 4]),)
```

## Codebyte Example

In this example, the positions of non-zero elements in a 2D array are identified:

```codebyte/python
import numpy as np

a = np.array([[0, 5, 0],
              [7, 0, 9]])

rows, cols = a.nonzero()

for r, c in zip(rows, cols):
  print(f"Non-zero element {a[r, c]} found at position ({r}, {c})")
```
