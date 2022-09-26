---
Title: '.log()'
Description: 'Returns an element-wise natural logarithm for an array.'
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

The `.log()` function returns an element-wise natural logarithm of an array.

## Syntax

```pseudo
numpy.log(array)
```

`.log()` returns an [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) with each element as the natural logarithm of the corresponding element in `array`.

## Example

The following example creates a `ndarray` and applies `.log()` to it:

```py
import numpy as np

nd = np.array([[1,2.71828],[2.71828,1]])

print(nd)
print(np.log(nd))
```

This produces the following output:

```shell
[[1.      2.71828]
 [2.71828 1.     ]]

 [[0.         0.99999933]
 [0.99999933 0.        ]]
```
