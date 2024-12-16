---
Title: '.deg2rad()'
Description: 'Converts angles from degrees to radians.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.deg2rad()`** function converts an angle from degrees to radians.

> **Note:** In NumPy, the default unit for angles is radians. Therefore, the `.deg2rad()` function is used to convert angle values from degrees to radians.

## Syntax

```pseudo
numpy.deg2rad(x, out=None)
```

- `x`: The input array (or scalar) containing angles in degrees that need to be converted to radians.
- `out` (Optional): A location where the result is stored. If not specified, a new array is returned.

## Example

In this example, the code converts an angle measured in degrees to radians using the `numpy.deg2rad()` function:

```py
import numpy as np

# Angle of the board on a table measured in degrees
angle_degrees = 45

# Convert the angle to radians
angle_radians = np.deg2rad(angle_degrees)

# Output the result
print(f"Angle in degrees: {angle_degrees}")
print(f"Angle in radians: {angle_radians}")
```

The code above produces the following output:

```shell
Angle in degrees: 45
Angle in radians: 0.7853981633974483
```

## Codebyte Example

Run the codebyte example below to understand how the `.deg2rad()` function works:

```codebyte/python
import numpy as np

degrees = 170
radians = np.deg2rad(degrees)

print(f"{degrees} degrees is {radians} radians.")
```
