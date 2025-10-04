---
Title: '.ceil()'
Description: 'Rounds each element in a NumPy array up to the nearest greater or equal integer.'
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

In NumPy, the **`.ceil()`** [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) rounds each element in an [array](https://www.codecademy.com/resources/docs/numpy/ndarray) to the nearest integer that is greater than or equal to the element. This function is applied to real numbers.

## Syntax

```pseudo
numpy.ceil(x, out=None, where=True)
```

**Parameters:**

- `x`: The input array or scalar that contains the elements to be rounded up.
- `out` (Optional): A location where the result will be stored. If no value is provided, a new array is returned.
- `where` (Optional): A boolean array that specifies the condition for rounding.
  - If the condition is `True` at a given position, the element will be rounded.
  - If the condition is `False`, the original value is retained.
  - If no value is provided, the `.ceil()` function is applied to all elements.

**Return value:**

The `.ceil()` function returns a NumPy array with the smallest integers greater than or equal to each element in `x`, returned as floats.

## Example 1: Basic Usage of `.ceil()`

This example demonstrates using the `.ceil()` function to round an array of floating-point numbers up to the nearest greater integer:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating an array of floating-point numbers
arr = np.array([1.4, 2.7, -0.2, -3.1])

# Applying the '.ceil()' function
result = np.ceil(arr)

print(result)
```

The above code results in the following output:

```shell
[ 2.  3. -0. -3.]
```

## Example 2: Using the `where` parameter in `.ceil()`

This example shows how the `where` parameter of `.ceil()` can be used to apply rounding only to certain elements of the array. In this case, only the positive numbers are rounded:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating an array of floating-point numbers
arr = np.array([1.4, 2.7, -0.2, -3.1])

# Applying '.ceil()' only where the elements are positive
np.ceil(arr, out=arr, where=arr > 0)

print(arr)
```

The above code results in the following output:

```shell
[ 2.  3. -0.2 -3.1]
```

## Codebyte Example: Calculating Shipping Boxes

Suppose there is a list of item weights, and each shipping box can carry up to 10 kg. The following example uses `numpy.ceil()` to calculate how many boxes will be needed for each order:

```codebyte/python
import numpy as np

# List of weights (in kg)
weights = np.array([9.5, 20.3, 14.7, 5.0, 0.9])

# Each box carries 10 kg
boxes_needed = np.ceil(weights / 10)

print("Boxes required for each order:", boxes_needed)
```

## Frequently Asked Questions

### 1. What is the difference between `numpy.ceil()` and `numpy.floor()`?

- `numpy.ceil()` rounds up to the nearest higher integer.
- `numpy.floor()` rounds down to the nearest lower integer.

### 2. Does `numpy.ceil()` return integers?

No. Even though the result is a whole number, it is returned as a float.

### 3. Can `numpy.ceil()` be used with negative numbers?

Yes. For negative values, it still rounds up toward zero.

### 4. How is `numpy.ceil()` different from Python’s `math.ceil()`?

- `math.ceil()` works with a single float value and returns an int.
- `numpy.ceil()` works on arrays and returns a NumPy array of floats.
