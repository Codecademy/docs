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
---

In NumPy, the **`.sqrt()`** method is used to calculate the positive square root of a number or the elements of an array. It is commonly employed in mathematical computations such as solving quadratic equations, applying the Pythagorean Theorem, modelling normal distributions, and more.

## Syntax

```pseudo
numpy.sqrt(array, out=None, where=True)
```

- `array`: A number or array-like structure containing the elements to which the method is to be applied.
- `out` (Optional): The array where the result is to be stored. If not provided, a new array is created and used for storing the results.
- `where` (Optional): The condition (array of boolean values) that determines the elements on which the method is to be applied.
  - If the condition is `True` for a particular element, the square root is computed for that element.
  - If the condition is `False` for a particular element, the square root is not computed for that element and the original element is retained.
  - If not provided, the square root is computed for all elements.

## Example

The below example shows the `.sqrt()` method in use:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Computing the square root of only those elements in the array which is greater than or equal to 5
result = np.sqrt([9,-4,25], where=np.array([9,-4,25]) >= 5)

print(result)
```

The output of the above code is shown below:

```shell
[3.00000000e+000 6.50227506e-310 5.00000000e+000]
```

## Codebyte Example

In this codebyte example, the `.sqrt()` method only computes the square root of the elements of the array which are greater than 0:

```codebyte/python
import numpy as np

result = np.sqrt([144,-10,16], where=np.array([144,-10,16]) >= 0)

print(result)
```
