---
Title: '.arcsin()'
Description: 'Calculates the inverse sine of each element in an array.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
  - 'Trigonometry'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **'.arcsin()'** method is used to calculate the inverse sine of the elements in an array. It is commonly employed when solving trigonometry problems where an angle of a right sided triangle is unknow, but two of the sides are known. The result should always be in the range -pi/2 to pi/2 (radians).

Conversion of radians to degrees is done by the formula $r*180/\pi$.

## Syntax

```pseudo
numpy.arcsin(x, out=None, where=True)
```

Parameters:

- `x`: array
  - y-coordinate on the unit circle which makes input in the range from -1 to 1.
  - If input is outside range, then nan is returned as a result.
- `out` (Optional):
  - Array for result. If not provided or None, a freshly allocated array is returned.
- `where` (Optional): array_like
  - The condition (array of boolean values) that determines the elements on which the method is to be applied.
  - Output that corresponds to `False` for a particular element will be returned as is.
  - If not provided, the arcsin is calculated for all elements in the input array.

Returns: radian: array

## Example

The below example shows the `.arcsin()` method in use:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Defined input array
a_input = [1, 0.5, 0, -0.5, -1]

# Computing the arcsin of all elements in an array
result_all = np.arcsin(a_input)
print("result_all:", result_all)

# Computing the arcsin of specific elements in the array
result_spec = np.arcsin(a_input, where=np.array([True, True, False, True, False]))
print("result_spec:", result_spec)

# Computing the arcsin of all elements greater than 0
result_gt0 = np.arcsin(a_input, where=list(map(lambda x: x>0, a_input)))
print("result_gt0:", result_gt0)

```

The output of the above code is shown below:

```shell
result_all:  [ 1.57079633  0.52359878  0.         -0.52359878 -1.57079633]
result_spec: [ 1.57079633  0.52359878  0.         -0.52359878 -1.        ]
result_gt0: [ 1.57079633  0.52359878  0.         -0.5        -1.        ]
```
