---
Title: '.cos()'
Description: 'Computes the cosine of each element in an array or a single value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.cos()`** function computes the cosine of each element in an array. This trigonometric function is essential for various mathematical computations, especially in physics, engineering, computer graphics, signal processing, and more.

## Syntax

```pseudo
numpy.cos(array, out = None, dtype = None)
```

- `array`: The Python library that provides support for large, multi-dimensional arrays and matrices, along with a large collection of mathematical functions to operate on these arrays.
- `out`: Optional. This is an alternative output array in which to place the result. It must have the same shape as the expected output. If not provided, a new array is returned.
- `dtype`: Optional. The desired data type for the output array. If not provided, the data type of the input array is used.


## Example

The below example shows the `.cos()` function in use:

```py
import numpy as np

# A single angle in radians
angle = np.pi / 4

# Calculate the cosine of the angle
cos_value = np.cos(angle)

print("Angle (radians):", angle)
print("Cosine value:", cos_value)
```
The above code generates the output as below:

```shell
Angle (radians): 0.7853981633974483
Cosine value: 0.7071067811865476
```

## Codebyte Example

Run the following code to understand how the `.cos()` function works:

```py
import numpy as np

# Example array of angles in radians
angles = np.array([0, np.pi / 4, np.pi / 2, np.pi])

# Calculate the cosine of each angle
cos_values = np.cos(angles)

print("Angles (radians):", angles)
print("Cosine values:", cos_values)
```
