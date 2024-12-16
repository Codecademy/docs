---
Title: '.rint()'
Description: 'Rounds each element of an array to the nearest integer and returns a new array with the rounded values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.rint()`** method rounds each element of an [array](https://www.codecademy.com/resources/docs/numpy/ndarray) to the nearest integer. It returns a new array with rounded values, preserving the input's shape.

## Syntax

```pseudo
numpy.rint(x, /, out=None, *, where=True)
```

- `x`: The input array containing elements that will be rounded to the nearest integer.
- `out`: A location where the result is stored. If provided, the result will be stored in this array. It must have the same shape as `x`.
- `where`: This condition determines where to apply the operation. If `True`, the operation is performed on all elements. If `False`, it is skipped for the corresponding element.

## Example

In the example below, the `.rint()` method rounds each element of the array to the nearest integer:

```py
import numpy as np

x = np.array([1.2, 2.7, 3.5, 4.1])
rounded_x = np.rint(x)

print(rounded_x)
```

The above code outputs the following:

```shell
[1. 3. 4. 4.]
```

## Codebyte Example

Run the following codebyte example to understand how the `.rint()` method works:

```codebyte/python
import numpy as np

x = np.array([1.3, 2.7, 3.5, 4.8, 5.1, 6.6, 7.2, 8.9, 9.4])
rounded_x = np.rint(x)

print(rounded_x)
```

Here, `.rint()` rounds each element in the array `x` to the nearest integer, and the result is stored in the array `rounded_x`.
