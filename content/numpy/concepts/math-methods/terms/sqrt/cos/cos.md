---
Title: 'NumPy cos'
Description: 'Returns the cos of the argument.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Trig'
  - 'Math'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **cos** function computes the cosine of each element in an array. This trigonometric function is essential for various mathematical computations, especially in physics, engineering, computer graphics, and signal processing, and more.

## Syntax

The generic syntax for the NumPy math methods is as follows:
```pseudo
numpy.cos(argument)
```

- `numpy`: The Python library that provides support for large, multi-dimensional arrays and matrices, along with a large collection of mathematical functions to operate on these arrays.
- `cos`: The trigonometric cosine function provided by NumPy, which computes the cosine of each element in the input array.
- `argument`: The array of angles (in radians) on which the cos function is applied to compute the cosine values.


## Example

The below example shows the `np.cos()` method in use:

```py
import numpy as np

# A single angle in radians
angle = np.pi / 4

# Calculate the cosine of the angle
cos_value = np.cos(angle)

print("Angle (radians):", angle)
print("Cosine value:", cos_value)
```
The output of the above code is shown below:

```shell
Angle (radians): 0.7853981633974483
Cosine value: 0.7071067811865476
```

## Codebyte Example

```py
import numpy as np

# Example array of angles in radians
angles = np.array([0, np.pi / 4, np.pi / 2, np.pi])

# Calculate the cosine of each angle
cos_values = np.cos(angles)

print("Angles (radians):", angles)
print("Cosine values:", cos_values)
```

### All Trigonometric NumPy Functions

- Sine `numpy.sin()`: Computes the sine of each element in the array.
- Cosine `numpy.cos()`: Computes the cosine of each element in the array.
- Tangent `numpy.tan()`: Computes the tangent of each element in the array.
- Inverse Sine `numpy.arcsin()`: Computes the inverse sine of each element in the array.
- Inverse Cosine `numpy.arccos()`: Computes the inverse cosine of each element in the array.
- Inverse Tangent `numpy.arctan()`: Computes the inverse tangent of each element in the array.