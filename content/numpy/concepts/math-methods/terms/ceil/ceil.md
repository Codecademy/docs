---
Title: '.ceil()'
Description: 'Rounds each element in an array to the nearest greater integer.'
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

In NumPy, the **`.ceil()`** function rounds each element in an array to the nearest integer that is greater than or equal to the element.

This function is applied to real numbers.

## Syntax

```pseudo
numpy.ceil(input_value)
```

- `input_value`: The input array or scalar that contains the elements to be rounded up.
- `out` (optional): A location where the result of the rounding will be stored. If no value is provided, the default is `None`, and a new array is returned.
- `where` (optional): A boolean array that specifies the condition for rounding:
  - If the condition is `True` at a given position, the element will be rounded.
  - If the condition is `False`, the original value is retained.
  - If no value is provided, the `.ceil()` function is applied to all elements.

## Example

This example demonstrates using the `.ceil()` function to round an array of floating-point numbers up to the nearest greater integer.

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating an array of floating-point numbers
arr = np.array([1.4, 2.7, -0.2, -3.1])

# Applying the ceil function
result = np.ceil(arr)

print(result)
```

The above example code results in the following output:

```shell
[ 2.  3. -0. -3.]
```

## Example 2

This example shows how the `where` parameter of `.ceil()` can be used to apply rounding only to certain elements of the array. In this case, only the positive numbers are rounded.

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Creating an array of floating-point numbers
arr = np.array([1.4, 2.7, -0.2, -3.1])

# Applying ceil only where the elements are positive
np.ceil(arr, out=arr, where=arr > 0)

print(arr)
```

The above example code results in the following output:

```shell
[ 2.  3. -0.2 -3.1]
```

## Codebyte Example

In this Codebyte example, the `.ceil()` method rounds the elements in an array of floating-point numbers:

```codebyte/python
import numpy as np

arr = np.array([1.2, 2.5, -0.3, -1.9, 3.7])

result = np.ceil(arr)

print(result)
```

The output of this Codebyte will be:

```shell
[ 2.  3. -0. -1.  4.]
```
