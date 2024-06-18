---
Title: '.round()'
Description: 'Rounds a number or an array of numbers to a specified number of decimal places.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Math'
  - 'Arrays'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In the NumPy library, the **`.round()`** method rounds a number or an array of numbers to a specified number of decimal places. It method returns an array without commas separating the elements. To view the output with commas, use [`.repr()`]((https://github.com/Codecademy/docs/blob/main/content/python/concepts/built-in-functions/terms/repr/repr.md)). Additionally, the `.round()` method rounds to the nearest even number when it is exactly halfway between two numbers.

## Syntax

```psuedo
numpy.round(array, decimals=0, out=None)
```

- `array`: Represents either a single number or an array of numbers. Each element, wheather a float or integer, will be rounded.
- `decimal`: Optional parameter that specifies the number of decimal places to which the numbers or elements in the array will be rounded. The default value is 0, and it accepts both positive and negative integers.
- `out`: Optional parameter that allows specifying an output array where the rounded results will be stored. If not provided, a new array will be created to store the rounded values.

## Example

The below example shows different use cases of the `.round()` method:

```py
# Case 1: np.round() returns with 0 decimal places by default
import numpy as np

number = 5.64
rounded_number = np.round(number)
print("# Case 1")
print(rounded_number)

# Case 2: np.round() accepts arrays as a parameter and will return the elements of the array rounded.
array_unrounded = [4.734, 3.141, 9.567]
array_rounded = np.round(array_unrounded)
print("# Case 2")
print(array_rounded)

# Case 3: np.round() accepts an array, float or integer as it's first and only required parameter. It also accepts a second integer to indicate the decimal place.
# Printing with the repr() function will output the result with commas seperating the elements.
unrounded_list = [4.5674, 19.3455, 56.3946]
rounded_list = np.round(unrounded_list, 2)
print("# Case 3")
print(repr(rounded_list)) # Demonstrating the use of repr() for comma-separated output

# Case 4: np.round() can accept a negative integer as its second parameter.
unrounded_list = [10345.65, 75693.93, 24333.45]
rounded_list = np.round(unrounded_list, -3)
print("# Case 4")
print(rounded_list)

# Case 5: np.round() will round to the nearest even number when exactly halfway between two numbers.
unrounded_list = [2.5, 1.5, 3.55]
rounded_list = np.round(unrounded_list)
print("# Case 5")
print(rounded_list)

# Case 6: np.round() accepts a third optional parameter for the output array.
unrounded = np.array([5.432, 19.846, 13.267])
rounded = np.empty_like(unrounded)
np.round(unrounded, 1, rounded)
print("# Case 6")
print(rounded)
```

Output:

```shell
# Case 1
6.0
# Case 2
[ 5.  3. 10.]
# Case 3
array([ 4.57, 19.35, 56.39])
# Case 4
[10000. 76000. 24000.]
# Case 5
[2. 2. 4.]
# Case 6
[ 5.4 19.8 13.3]
```

## Codebyte Example

```codebyte/python
import numpy as np

unrounded_list = [23.89, 54.843, 17.478]

rounded_list = np.round(unrounded_list, 1)

print(rounded_list)
```
