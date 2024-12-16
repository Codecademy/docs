---
Title: '.rad2deg()'
Description: 'Converts angles from radians to degrees.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Numpy, the **`.rad2deg()`** function converts angles from radians to degrees.

This is useful when working with trigonometric calculations or geometrical operations where angles need to be expressed in degrees.

## Syntax

```pseudo
numpy.rad2deg(x, out=None, where=True, casting='same_kind', order='K', dtype=None, subok=True)
```

- `x`: Input array (or scalar) of angles in radians.
- `out`(Optional): A location to store the output. If not provided, a new array is returned.
- `where`(Optional): Condition to specify which elements are converted. Default is `True`, meaning all elements are converted.

> **Note**: There are additional parameters that are rarely used and control advanced memory and computation behaviors.

## Example 1

Here is an example that demonstrates converting an array of common radian values to their equivalent degree values:

```py
import numpy as np

# Example angles in radians
angle_radians = np.array([0, np.pi / 6, np.pi / 4, np.pi / 2, np.pi])

# Convert to degrees
angle_degrees = np.rad2deg(angle_radians)
print(angle_degrees)
```

The output of the above example will be as follows:

```shell
[  0.  30.  45.  90. 180.]
```

## Example 2

`.rad2deg()` can handle negative radian values as well by converting them to their equivalent negative degree values. Here's an example:

```py
import numpy as np

# Negative radians
angle_radians = np.array([-np.pi / 2, -np.pi, -3 * np.pi / 4])

# Convert to degrees
angle_degrees = np.rad2deg(angle_radians)
print(angle_degrees)
```

The output of the above example will be as follows:

```shell
[ -90. -180. -135.]
```

## Example 3

Additionally, the `where` parameter can used to selectively convert only positive radian values to degrees, while leaving negative values unchanged:

```py
import numpy as np

# Mixed radians
angles = np.array([0, np.pi / 6, -np.pi / 4, -np.pi / 2, np.pi])

# Convert only positive angles
positive_degrees = np.where(angles > 0, np.rad2deg(angles), 0)

print(positive_degrees)
```

The output of the above code will be as follows:

```shell
[  0.  30.   0.   0. 180.]
```

## Codebyte Example

Run the following codebyte example to understand how the `.rad2deg()` function works:

```codebyte/python
import numpy as np

# Angles for robotic arm movements in radians
robot_arm_angles = np.array([0, np.pi / 3, -np.pi / 2, np.pi, -2 * np.pi])

# Convert to degrees for user-friendly display
angles_in_degrees = np.rad2deg(robot_arm_angles)

print("Robot arm angles in radians:", robot_arm_angles)
print("Robot arm angles in degrees:", angles_in_degrees)
```
