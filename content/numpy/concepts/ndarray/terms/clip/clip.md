---
Title: '.clip()'
Description: 'Limits ndarray values to a specified range.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Math'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Numpy's **`.clip()`** is used to limit the values in an array to a specified range by replacing values outside the range with the minimum or maximum specified values.

## Syntax

```pseudo
ndarray.clip(min=None, max=None, out=None)
```

**Parameters:**

- `min`: The minimum value to clip array elements to. All values below this will be set to `min`.
- `max`: The maximum value to clip array elements to. All values above this will be set to `max`.
- `out`: Output array for storing the result. Must have the same shape as the input array.

**Return value:**

Returns an array in which all values are clipped to the specified range. If provided, the result is stored in the output array.

## Example 1: Clipping an Array Using `.clip()`

In this example, `.clip()` is used without the `out` parameter to restrict all values of an array to a given range:

```py
import numpy as np

# Create an array
np_array = np.array([0, 1, 1, 2, 3, 5, 8, 13, 21])

# Clip values between 3 and 9
clipped_array = np_array.clip(min=3, max=9)

# Print clipped array
print("Clipped Array: ", clipped_array)
```

The output of this code is:

```shell
Clipped Array:  [3 3 3 3 3 5 8 9 9]
```

## Example 2: Element-Wise Clipping Using `.clip()`

In this example, `.clip()` is used to clip each element of an array by using an array for `min` and `max`:

```py
import numpy as np

# Create a 2D array
np_array = np.array([[[20, -1, 12], [2, -3, 50]]])

# Create an output array
output_array = np.empty_like(np_array)

# Create element-wise min and max arrays
min_vals = ([[[-1, 4, 7], [10, -13, 16]]])
max_vals = ([[[2, 5, 11], [13, 17, 19]]])

clipped_array = np_array.clip(min_vals, max_vals, output_array)

# Print the output array
print("Clipped Array: \n", output_array)
```

The output of this code is:

```shell
Clipped Array:
 [[[ 2  4 11]
  [10 -3 19]]]
```

## Codebyte Example

In this example, `.clip()` is provided with an integer for `min` and an array for `max`:

```codebyte/python
import numpy as np

# Create an array of 10 integers
np_array = np.array([4, 3, 7, -23, 5, 6, 4, 324, -94, 2])
print("Array: ", np_array)

# Provide an integer for min and an array of 10 for max
clipped_array = np_array.clip(-4, [0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
print("Clipped Array: ", clipped_array)
```
