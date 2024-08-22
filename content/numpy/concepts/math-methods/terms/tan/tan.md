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

- `array`: An array passed containing the elements for which tan is computed.
- `out`: An optional field specifies the array where the result of the operation is stored.
- `where`: The condition that determines for which elements in the given array tangent is calculated.

## Example

The below example shows the `.tan()` function in use:

```py
import numpy as np

# Array of angles in radians
angles_in_radians = np.array([0, np.pi/6, np.pi/4, np.pi/3])

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
