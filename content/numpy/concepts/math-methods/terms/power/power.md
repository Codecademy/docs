---
Title: '.power()'
Description: 'Raises each element in the first array to the power of the corresponding element in the second array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In the [NumPy](https://www.codecademy.com/resources/docs/numpy) library, the **`.power()`** method raises each element in the first array to the power of the corresponding element in the second array and computes the result. It returns an array without commas separating the elements. To view the output with commas, use [`.repr()`](https://www.codecademy.com/resources/docs/python/built-in-functions/repr).

## Syntax

```pseudo
numpy.power(x1, x2, out=None, where=True)
```

- `x1`: A number or an array of numbers used as the base.
- `x2`: A number or an array of numbers used as the exponent for elements in `x1`.
- `out`: An optional parameter that allows us to store the output array. If not specified, a new array will be allocated for the result.
- `where`: An optional parameter that determines the elements on which the method is to be applied.
  - If the condition is `True` for a particular element, the power is computed.
  - If the condition is `False` for a particular element, the original element is retained.
  - If not provided, the power is computed for all elements.

## Example

The below example shows how to use `.power()` method:

```py
# Importing the numpy library
import numpy as np

print("2^3 is equal to", np.power(2,3))

# Input Array
array1 = [2, 3, 4, 5, 6]
array2 = [6, 5, 4, 2, 2]

print ("\nOutput array : ", np.power(array1, array2))
```

```shell
2^3 is equal to 8

Output array : [64 243 256  25  36]
```

## Codebyte Example

In this codebyte example, `.power()` method computes the power where each element in `array1` serves as the base raised to the power of the corresponding element in `array2`:

```codebyte/python
import numpy as np

# Input Array
array1 = [2, 3, 4]
array2 = [6, 5, 4]

result = np.power(array1, array2)

print(result)
```
