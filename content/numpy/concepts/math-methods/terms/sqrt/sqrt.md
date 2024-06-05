---
Title: '.sqrt()'
Description: 'Calculates the square root of each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.sqrt()`** function is used to calculate the positive square root of a number or array. It is commonly employed in mathematical computations such as solving the quadratic equation, applying the Pythagorean Theorem, modeling normal distributions, and other mathematical operations.

## Syntax

`numpy.sqrt(array, out=None, where=True)`

***array***
A number or array to apply a square root.

***out***
This is an optional parameter that specifies a location to store the result. If provided, the `out` array must be the same shape and datatype as the input array. If not provided, the default value is `out=None` and a new array is returned.

***where***
This is an optional parameter to specify a condition under which a square root should be applied. If the condition is `True`, the square root is computed; where the condition is `False`, the original value is retained. If not provided, the default value is `where=True`.

### Example

This example `.sqrt()`  in use:

```py
import numpy as np
np.sqrt([9,-4,25], where=np.array([9,-4,25]) >= 5)
```
The output is shown below:

```shell
array([3., nan, 5.])
```

## Codebyte Example

In this example, an array value is given with a condition to only process numbers above 0.

```codebyte/python
import numpy as np
np.sqrt([144,-10,16], where=np.array([144,-10,16]) >= 0)
```