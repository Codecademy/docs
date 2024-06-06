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

The **`.abs()`** function calculates the absolute value of a number or the absolute value of all of the elements in an array. The absolute value of a number is the number but without a sign, or the number's distance from zero. `.abs()` can also compute the absolute value of complex numbers in the form of $a + bi$ by computing $\sqrt{a^2 + b^2}$. Additionally, `.absolute()` can be used instead of `.abs()`.

## Syntax

```psuedo
`numpy.absolute(array, out=None, where=True)`
```

- `array`: The number or an array containing the elements to which the absolute value will be computed.
- `out`: The location where the result of the absolute value will be stored. If no value is provided, the default value of `None` is used and a new array is returned.
- `where`: An array of boolean values used to determine which elements of the array the absolute value function should be applied. If the condition is `True` at a given position, the absolute value is computed for that element, whereas if the condition is `False`, the original value is retained. If no value is provided, the default value is `True`, meaning that the absolute value is computed for all of the elements.

## Example 1

This example shows `.abs()` being used to calculate the absolute value of a number:

```py
import numpy as np
x = -3.5
x = np.abs(x)
print(x)
```

Output:
```shell
3.5
```

## Example 2

This example shows `.abs()` being used to calculate the absolute value of an array:

```py
import numpy as np
arr = np.array([1, -1.5, 0, -3])
arr = np.abs(arr)
print(arr)
```

Output:
```shell
[1. 1.5 0. 3.]
```

## Example 3

This example shows how the `out` parameter of `.abs()` is used to specifiy the variable that the result is sent to:

```py
import numpy as np
arr = np.array([1, -1.5, 0, -3])
arr2 = np.array([0., 0, 0, 0])
np.abs(arr, out=arr2)
print(arr2)
```

Output:
```shell
[1. 1.5 0. 3.]
```
> **Note:** The `out` variable must be the same size and type as the input array to avoid unexpected errors.

## Example 4

This example shows how the `where` parameter of `.abs()` is used to specfiy which elements of the array undergo the absolute value function:

```py
import numpy as np
arr = np.array([-1, -2, -3, -4])
np.abs(arr, out=arr, where=[0, 1, 0, 1])
print(arr)
```

Output:
```shell
[-1  2 -3  4]
```
> **Note:** The `where` variable must be the same length as the input array. Additionally, when using the `where` parameter, the `out` parameter should also be used to avoid errors with uninitialized memory.

## Example 5

This example shows `.abs()` calculating the absolute value of complex numbers:

```py
import numpy as np
arr = np.array([3.5-2j, -2+2.3j, 0-3j, 4.2+3j])
arr = np.abs(arr)
print(arr)
```

Output:
```shell
[4.03112887 3.04795013 3. 5.16139516]
```
