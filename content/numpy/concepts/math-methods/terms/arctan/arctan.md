---
Title: '.arctan()'
Description: 'Calculates the inverse tangent of the elements in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.arctan()`** method calculates the inverse tangent of the elements in an [array](https://www.codecademy.com/resources/docs/numpy/ndarray) and returns a new array containing the calculated values. The values are in radians and lie in the range `-pi/2` to `pi/2`. By understanding this method, developers can effectively work with trigonometric calculations and geometric problems in NumPy.

## Syntax

```pseudo
numpy.arctan(arr, out=None, where=True)
```

- `arr`: The array whose inverse tangent is to be calculated.
- `out`: The array to be used for storing the result. If not provided or set to `None`, a new array is returned.
- `where`: A boolean array or condition that specifies the elements for which the inverse tangent is to be calculated. If not provided, it defaults to `True` for all the elements.
  - If the condition is `True` for a specific element, the inverse tangent of that element is calculated.
  - If the condition is `False` for a particular element, that element remains unchanged.

## Example

The following example demonstrates the usage of the `.arctan()` method:

```py
import numpy as np

# Creating an array
arr = np.array([0, 1, 2, -1, -2])

# Calculating the inverse tangent of the elements in the array
res = np.arctan(arr)

print(res)
```

The above code produces the following output:

```shell
[ 0.          0.78539816  1.10714872 -0.78539816 -1.10714872]
```

## Codebyte Example

The following codebyte example shows the use of the `.arctan()` method:

```codebyte/python
import numpy as np

# Creating an array
arr = np.array([10, 11, 12, -11, -12])

# Calculating the inverse tangent of the elements in the array
res = np.arctan(arr)

print(res)
```
