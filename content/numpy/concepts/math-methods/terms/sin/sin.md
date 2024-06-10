---
Title: '.sin()'
Description: 'Calculates the trigonometric sine of each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.sin()`** method is used to calculate the trigonometric sine of the elements in an array. It has a wide variety of usages and is commonly used in scientific calculations and solving trigonmetric equations.

## Syntax

```pseudo
numpy.sin(array, out=None, where=True)
```

- `array`: An array-like structure containing the elements for which the sine is computed. Note that the elements should be in radians and not degrees.
- `out` (Optional): The array where the result is to be stored. If not provided, a new array is created to store the results.
- `where` (Optional): The condition (array of boolean values) that determines the elements where the sine function is applied.
  - If the condition is `True` for a particular element, the sine is computed for that element.
  - If the condition is `False` for a particular element, the sine of the element will not be computed and the original element is retained.
  - If not provided, the sine is computed for all elements.

## Example

The below example demonstrates the use of the `.sin()` function to calculate the sine of elements in an array:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# when the elements in the array are already in radians
array1 = np.array([0, np.pi/2, np.pi, 3*np.pi/2])
result1 = np.sin(array1)

# when the elements in the array are originally in degrees
array2 = np.array((0, 30, 45, 90, 180))
result2 = np.sin(array2 * np.pi/180) # convert to radians

# using the where parameter
array3 = np.array([np.pi/6, np.pi/4, np.pi/2, np.pi])
result3 = np.sin(array3, where=array3 >= np.pi/2)

print(result1)
print(result2)
print(result3)
```

The output of the above code is shown below:

```shell
[ 0.0000000e+00  1.0000000e+00  1.2246468e-16 -1.0000000e+00]
[0.         0.5        0.70710678 1.         0.70710678]
[6.90464113e-310 6.90464113e-310 1.00000000e+000 1.22464680e-016]
```

> **Note:** For the last output, the first two elements in the numpy array do not fulfil the `where` condition, and they will remain whatever was in the memory at those positions, in this case: `6.90464113e-310` - the uninitialised value. To preserve the original values, explicitly initialise the `result3` array with the original values before applying `.sin()` method and assigning `out=result3`. Please refer to the following Codebyte example for more details.

## Codebyte Example

In this codebyte example, the `.sin()` method computes the sine of the elements of the array:

```codebyte/python
import numpy as np

array = np.array([np.pi/6, np.pi/4, np.pi/2, np.pi])
result = np.empty_like(array) # create an uninitialised array of same shape
np.copyto(result, array) # copy original values from array to result
np.sin(array, where=array >= np.pi/2, out=result)

print(result)
```
