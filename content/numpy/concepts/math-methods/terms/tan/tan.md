---
Title: '.tan()'
Description: 'Calculates the tangent of each element in an array or a single value in radians.'
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

In NumPy, the **`.tan()`** function calculates the tangent of each element in an array, where the elements are interpreted as angles in radians. It is used for mathematical computations involving trigonometric operations.

## Syntax

```pseudo
numpy.tan(array, out = None, where=True)
```

- `array`: An array-like or scalar containing angles in radians. The function computes the tangent of each element.
- `out`: An optional parameter specifying an array where the result will be stored. If not provided, a new array is created.
- `where`: A condition or boolean array that determines which elements of `array` are used to compute the tangent. The tangent is computed only for elements where the condition is `True`.

## Example

The below example shows the `.tan()` function in use:

```py
import numpy as np

# Array of angles in radians
angles_in_radians = np.array([0, np.pi/6, np.pi/4, np.pi/3])

# Create an empty array to store the results
out = np.empty_like(angles_in_radians)

# Compute the tangent of each angle
tangents = np.tan(angles_in_radians, out=out)

print("Tangents:", out)
```

The output would be:

```shell
Tangents: [0.         0.57735027 1.         1.73205081]
```

## Codebyte Example

Run the following code to understand how the `.tan()` function works:

```codebyte/python
import numpy as np

angles_in_radians = np.array([0, np.pi/6, np.pi/4, np.pi/3, np.pi/2])

out = np.empty_like(angles_in_radians)

np.sin(angles_in_radians, out=out)

print("Angles in radians:", angles_in_radians)
print("Sines:", out)
```
