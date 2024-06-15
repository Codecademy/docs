---
Title: '.abs()'
Description: 'Calculates the absolute value of a number or each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Arrays'
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.abs()`** function calculates the absolute value of a number or the absolute value of all of the elements in an array. The absolute value of a number is the number but without a sign, or the number's distance from zero. `.abs()` can also compute the absolute value of complex numbers. Additionally, `.absolute()` can be used instead of `.abs()`.

## Syntax

```psuedo
`numpy.abs(array, out=None, where=True)`
```

- `array`: The number or an array containing the elements to which the absolute value will be computed.
- `out`: The location where the result of the absolute value will be stored. If no value is provided, the default value of `None` is used and a new array is returned.
- `where`: An array of boolean values used to determine which elements of the array the absolute value function should be applied.
  - If the condition is `True` at a given position, the absolute value is computed for that element.
  - If the condition is `False`, the original value is retained.
  - If no value is provided, the absolute value is computed for every element.

## Example 1

This example shows `.abs()` being used to calculate the absolute value of an array:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating a numpy array
arr = np.array([1, -1.5, 0, -3])

# Computing the absolute value of the array
arr = np.abs(arr)

print(arr)
```

Output:
```shell
[1. 1.5 0. 3.]
```

## Example 2

This example shows how the `where` parameter of `.abs()` is used to specfiy which elements of the array undergo the absolute value function:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating a numpy array
arr = np.array([-1, -2, -3, -4])

# Computing the absolute value of only the elements that are less than -2
np.abs(arr, out=arr, where=arr<-2)

print(arr)
```

Output:
```shell
[-1 -2  3  4]
```
> **Note:** The `where` variable must be the same length as the input array. Additionally, when using the `where` parameter, the `out` parameter should also be used to avoid errors with uninitialized memory.

## Codebyte Example

In this codebyte example, the `.abs()` method computes the absolute value of the elements of the array that are greater than -100:

```codebyte/python
import numpy as np

arr = np.array([-1.2, -23, -101, -400, 20, -100, -99])

np.abs(arr, out=arr, where=arr>-100)

print(arr)
```