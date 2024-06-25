---
Title: '.power()'
Description: 'The power method raises each element in the first array to the corresponding element in the second array and then calulates it.'
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

In the NumPy library, the **`.power()`** method raises each element in the first array to the corresponding element in the second array and then calculates it. It returns an array without commas separating the elements. To view the output with commas, use [`.repr()`](https://www.codecademy.com/resources/docs/python/built-in-functions/repr).

## Syntax

```pseudo
numpy.round(array1, array2, out=None, where=True)
```

- `array1`: A number or an array of numbers which will be used as a base.
- `array2`: A number or an array of numbers which will be used as exponent for elements in `array1`.
- `out`: An optional parameter that allows us to store the output array. If not provided, a new array will be created.
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

Output array :  [ 64 243 256  25  36]
```

## Codebyte Example

In this codebyte example, the `.power()` computes the power of the given elements in the in the `array1` as base with elements in `array2` as exponent for corresnpoding elements in `array1`:

```codebyte/python
import numpy as np

# Input Array
array1 = [2, 3, 4]
array2 = [6, 5, 4]

result = np.power(array1, array2)

print(result)
```