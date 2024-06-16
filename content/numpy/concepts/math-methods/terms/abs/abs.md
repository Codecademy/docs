---
Title: '.abs()'
Description: 'Calculates the absolute value of a given number or each element in an array.'
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
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In Numpy, the **`.abs()`** function calculates the absolute value of a given number or each elements in an array. The absolute value of a number is its non-negative value or the number's distance from zero. This function can be applied to both real and complex numbers.

> **Note:** `.abs()` is identical to `numpy.absolute()`, and they can be used interchangeably.

## Syntax

```pseudo
numpy.abs(input_value, out=None, where=True)
```

or alternatively,

```pseudo
numpy.absolute(input_value, out=None, where=True)
```

- `input_value`: The input number or array for which the absolute value will be computed.
- `out` (optional): A location where the result of the absolute value will be stored. If no value is provided, the default value of `None` is used and a new array is returned.
- `where` (optional): A boolean array that determines which elements of the input array should have the absolute value function applied:
  - If the condition is `True` at a given position, the absolute value is computed for that element.
  - If the condition is `False`, the original value is retained.
  - If no value is provided, the absolute value is computed for every element.

## Example 1

This example demonstrates using `.abs()` function to calculate the absolute value of an array:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating a numpy array
arr = np.array([1, -1.5, 0, -3])

# Computing the absolute value of the array
arr = np.abs(arr)

print(arr)
```

The above example code results in the following output:

```shell
[1. 1.5 0. 3.]
```

## Example 2

This example shows how the `where` parameter of `.abs()` function is used to specify which elements of the array undergo the absolute value function:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating a numpy array
arr = np.array([-1, -2, -3, -4])

# Computing the absolute value of only the elements that are less than -2
np.abs(arr, out=arr, where=arr<-2)

print(arr)
```

The above example code results in the following output:

```shell
[-1 -2  3  4]
```

> **Note:** The `where` array must be the same length as the input array. Additionally, when using the `where` parameter, the `out` parameter should also be used to avoid errors with uninitialized memory.

## Codebyte Example

In this codebyte example, the `.abs()` method computes the absolute value of the elements in the array that are greater than `-100`:

```codebyte/python
import numpy as np

arr = np.array([-1.2, -23, -101, -400, 20, -100, -99])

np.abs(arr, out=arr, where=arr>-100)

print(arr)
```
