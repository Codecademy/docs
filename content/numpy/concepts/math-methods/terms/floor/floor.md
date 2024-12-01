---
Title: '.floor()'
Description: 'Rounds down a number or an array of numbers to the nearest smallest integer.'
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
---

In the NumPy library, the **`.floor()`** method rounds down a number or an array of numbers to the nearest smallest integer. It returns an array without commas separating the elements. To view the output with commas, use the [`.repr()`](https://www.codecademy.com/resources/docs/python/built-in-functions/repr) function.

## Syntax

```psuedo
numpy.floor(array, out=None)
```

- `array`: Represents a single number or an array of numbers. Each element, whether a float or integer, will be rounded down.
- `out` (Optional): An output array where the rounded results will be stored. A new array will be created to store the rounded-down values if not provided.

## Example

The below example shows different use cases of the `.floor()` method:

```py
import numpy as np

# Case 1: np.floor() returns a single number rounded down.
number = 5.64
rounded_number = np.floor(number)
print("# Case 1")
print(rounded_number)

# Case 2: np.floor() accepts arrays as a parameter and will return the elements of the array rounded down.
array_unrounded = [4.734, 3.141, 9.567]
array_rounded = np.floor(array_unrounded)
print("# Case 2")
print(array_rounded)

# Case 3: np.floor() accept arrays as a second parameter and will store the round down values in it.
array_unrounded = [2.5, 1.5, 3.55]
array_rounded = np.zeros_like(array_unrounded)
np.floor(array_unrounded, out=array_rounded)
print("# Case 3")
print(array_rounded)
```

The above use cases produce the following output:

```shell
# Case 1
5.0
# Case 2
[4. 3. 9.]
# Case 3
[2. 1. 3.]
```

## Codebyte Example

Run the following codebyte example to understand how the `.floor()` method works:

```codebyte/python
import numpy as np

unrounded_list = [23.89, 54.843, 17.478]
rounded_list = np.floor(unrounded_list)
print(rounded_list)
```
