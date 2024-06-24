---
Title: '.sin()'
Description: 'Calculates the trigonometric sine of each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.sin()`** method calculates the trigonometric sine of each element in an array. This method operates element-wise on an array and returns a new array containing the sine values of the input array's elements. It is beneficial in mathematical computations involving trigonometric operations.

## Syntax

```pseudo
numpy.sin(x, out=None, where=True)
```

- `array`: An array-like structure containing the elements for which the sine is computed. The elements should be in radians, not degrees.
- `out` (Optional): The array where the result is to be stored. If not provided, a new array is created to store the results.
- `where` (Optional): The condition (array of boolean values) that determines the elements where the sine function is applied.
  - If the condition is `True` for a particular element, the sine is computed for that element.
  - If the condition is `False` for a particular element, the sine of the element will not be computed and the original element is retained.
  - If not provided, the sine is computed for all elements.

## Example

Run the following code to understand how the `.sin()` method works:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# When the elements in the array are already in radians
array1 = np.array([0, np.pi/2, np.pi, 3*np.pi/2])
result1 = np.sin(array1)

# The angles are originally in degrees, so they need to be converted to radians
array2 = np.array((0, 30, 45, 90, 180))
result2 = np.sin(array2 * np.pi/180) # convert to radians

print(result1)
print(result2)
```

The output of the above code is shown below:

```shell
[ 0.0000000e+00  1.0000000e+00  1.2246468e-16 -1.0000000e+00]
[0.00000000e+00 5.00000000e-01 7.07106781e-01 1.00000000e+00
 1.22464680e-16]
```

## Codebyte Example

In this codebyte example, the `.sin()` method computes the sine of the elements of the array:

```codebyte/python
import numpy as np

array = np.array([np.pi/6, np.pi/4, np.pi/2, np.pi])
result = np.sin(array)

print(result)
```
