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

```pseudo
numpy.sqrt(array, out=None, where=True)
```

- `array`: A number or array-like structure containing the elements to which the square root function will be applied.

- `out`: An optional parameter that specifies the location where the result will be stored. If provided, it must be an array that matches the shape and data type of the input array. If not provided, the default value is `None`, and a new array is created to store the results.

- `where`: An optional parameter to specify a condition (array of boolean values) that determines where the square root operation should be applied. If the condition is `True` at a given position, the square root is computed for that element; where the condition is `False`, the original value is retained. If not provided, the default value is `True`, meaning the square root is computed for all elements.

## Example

This example below shows `.sqrt()` method in use:

```py
# Import the NumPy library as 'np'
import numpy as np

# Compute the square root of elements in the array [9, -4, 25]
# Only compute the square root where the element is greater than or equal to 5
result = np.sqrt([9,-4,25], where=np.array([9,-4,25]) >= 5)

print(result)
```

The output of the above code is shown below:

```shell
[3.00000000e+000 6.50227506e-310 5.00000000e+000]
```
## Codebyte Example

In this example, an array value is given with a condition to only process numbers above 0.

```codebyte/python
import numpy as np
np.sqrt([144,-10,16], where=np.array([144,-10,16]) >= 0)
```