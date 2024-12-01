---
Title: '.unwrap()'
Description: 'Unwraps a phase angle array by changing deltas greater than a threshold to their 2*pi complement.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.unwrap()`** function is used to unwrap a phase angle array. This function adjusts the phase angles by changing any absolute difference between consecutive angles greater than the specified threshold (default: `pi`) by their `2*pi` complement. It is commonly used in signal processing to correct phase angle discontinuities in wrapped data.

## Syntax

```pseudo
numpy.unwrap(p, discont=pi, axis=-1, period=6.283185307179586)
```

- `p`: The input array of phase angles to be unwrapped.
- `discont` (optional): The discontinuity threshold, which defaults to `pi`. Differences greater than this value will be adjusted by adding or subtracting multiples of `2*pi`.
- `axis` (optional): The axis along which the unwrap operation is applied. Default is the last axis `-1`.
- `period` (optional): The period of the phase angles. Default is `2*pi`, but it can be set to other values to adjust for different periodicities.

## Example 1

This example demonstrates how to use the `.unwrap()` function to correct phase discontinuities in an array of wrapped phase angles.

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating an array of phase angles with discontinuities
angles = np.array([0, np.pi/2, np.pi, -np.pi/2, -np.pi])

# Applying the unwrap function to correct discontinuities
unwrapped = np.unwrap(angles)

print(unwrapped)
```

The above example code results in the following output:

```shell
[0.         1.57079633 3.14159265 4.71238898 3.14159265]
```

> **Note:** NumPy outputs phase angles with high precision. For clarity, these examples use rounded values.

## Example 2

This example shows how to adjust the discontinuity threshold by setting a custom discont value in `.unwrap()`:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating an array of phase angles with large discontinuities
angles = np.array([0, np.pi/2, np.pi, 3*np.pi, -np.pi/2])

# Unwrapping with a custom discontinuity threshold of 2*pi
unwrapped = np.unwrap(angles, discont=2*np.pi)

print(unwrapped)
```

The above example code results in the following output:

```shell
[0.         1.57079633 3.14159265 3.14159265 4.71238898]
```

## Codebyte Example

In this Codebyte example, the `.unwrap()` method corrects discontinuities in an array of phase angles:

```codebyte/python
import numpy as np

angles = np.array([0, np.pi, 2*np.pi, -np.pi])

unwrapped = np.unwrap(angles)

print(unwrapped)
```
