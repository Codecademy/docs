---
Title: '.floor()'
Description: 'Rounds down a number or an array of numbers to the nearest smallest integer.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the NumPy library, the **`.floor()`** method rounds down a number or an [array](https://www.codecademy.com/resources/docs/numpy/ndarray) of numbers to the nearest smallest integer. It returns an array without commas separating the elements. This function is particularly useful in mathematical, statistical, and engineering applications where downward rounding is required.

> **Note:** To view the output with commas, use the [`.repr()`](https://www.codecademy.com/resources/docs/python/built-in-functions/repr) function in Python.

## Syntax

```psuedo
numpy.floor(input, out=None)
```

**Parameters:**

- `input`: Represents a single number or an array of numbers. Each element, whether a float or integer, will be rounded down.
- `out` (Optional): An output array where the rounded results will be stored. A new array is created to store the rounded-down values if not provided.

**Return value:**

- If `input` is a number, the `.floor()` method returns the rounded-down version of the number.
- If `input` is an array, the method returns an array containing the rounded-down versions of the values in `input`.

## Example 1: Using `.floor()` on Arrays

This example uses the `.floor()` method to round down an array of numbers:

```py
import numpy as np

# Create an array of numbers
array_unrounded = [4.734, 3.141, 9.567]

# Round down the numbers in the array
array_rounded = np.floor(array_unrounded)

# Print the result
print(array_rounded)
```

Here is the output:

```shell
[4. 3. 9.]
```

## Example 2: Using `.floor()` on Numbers

This example uses the `.floor()` method to round down a number:

```py
import numpy as np

# Store the number in a variable
num = 5.8

# Round down the number
rounded_num = np.floor(num)

# Print the result
print(rounded_num)
```

Here is the output:

```shell
5.0
```

## Codebyte Example: Using `.floor()` on 2D Arrays

This codebyte example uses the `.floor()` method to round down the numbers in a 2D array:

```py
import numpy as np

# Create a 2D array of numbers
arr_2d = np.array([[3.9, -1.2], [0.5, -0.9]])

# Round down the numbers in the array
floored_2d = np.floor(arr_2d)

# Print the result
print(floored_2d)
```

## Frequently Asked Questions

### 1. What is the difference between NumPy `.ceil()` and `.floor()`?

- `np.floor()` rounds values down to the nearest smallest integer.
- [`np.ceil()`](https://www.codecademy.com/resources/docs/numpy/math-methods/ceil) rounds values up to the nearest biggest integer.

### 2. Does `np.floor()` modify the original array?

No, `np.floor()` returns a new array and does not change the original one unless you explicitly use the `out` parameter to overwrite it.

### 3. What’s the difference between `np.floor()` and `np.trunc()`?

- `np.floor()` rounds down to the nearest smallest integer (toward negative infinity).
- [`np.trunc()`](https://www.codecademy.com/resources/docs/numpy/math-methods/trunc) truncates the decimal part and rounds toward zero.
