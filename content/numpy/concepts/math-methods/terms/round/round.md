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

**`.round()`** is a function from the NumPy Python library. It rounds a number or an array of numbers to a specified number of decimal places.

## Syntax

```psuedo
numpy.round(array/number, decimal place, out)
```

- `array/number` is the number or array, whose elements (either a float or integer) will be rounded.
- `decimal place` is the number of decimal places the number or elements in the array will be rounded to. The default value is 0. This parameter is optional and will accept negative integers as well as positive ones.
- `out` is an optional output array which the result will feed into.

> **Note:** Numpy is commonly imported as `import numpy as np`. This allows us to refer to `numpy` as `np`.
> 
> **Note:** `numpy.round()` will return an array without commas separating the elements. To see the output with commas use [`.repr()`](https://github.com/Codecademy/docs/blob/main/content/python/concepts/built-in-functions/terms/repr/repr.md).
>
> **Note:** `numpy.round()` will round to the nearest even number when exactly halfway between two numbers. 

## Example 1 

`np.round()` returns 0 decimal places by default

```py
import numpy as np

number = 5.64

rounded_number = np.round(number)

print(rounded_number)

```
Output: 
```shell
6.0
```
## Example 2

`numpy.round()` accepts arrays as a parameter and will return the elements of the array rounded. 

```py
import numpy 

array_unrounded = [4.734, 3.141, 9.567]

array_rounded = numpy.round(array_unrounded)

print(array_rounded)
```

Output: 
```shell
[5. 3. 10.]
```

## Example 3

`np.round()` accepts an array, float or integer as it's first and only required parameter. It also accepts a second integer to indicate the decimal place.

```py
import numpy as np

unrounded_list = [4.5674, 19.3455, 56.3946]

rounded_list = np.round(unrounded_list, 2)

print(repr(rounded_list))
```

Output:
```shell
[4.57, 19.35, 56.39]
```

## Example 4 

`np.round()` can accept a negative integer as its second parameter.

```py
import numpy as np

unrounded_list = [10345.65, 75693.93, 24333.45]

rounded_list = np.round(unrounded_list, -3)

print(rounded_list)
```
Output:
```shell
 [10000. 76000. 24000.]
 ```

## Example 5
`np.round()` will round to the nearest even number. When exactly halfway between two numbers.  

```py
import numpy as np

unrounded_list = [2.5, 1.5, 3.55]

rounded_list = np.round(unrounded_list)

print(rounded_list)
```
Output:
```shell
 [2. 2. 4]
```

## Example 6
`np.round()` accepts a third optional parameter. This parameter is where the output of `np.round()` will go. 

```py
import numpy as np

unrounded = np.array([5.432, 19.846, 13.267])

rounded = np.empty_like(unrounded)

np.round(unrounded, 1, rounded)

print(rounded)
```
Output:
```shell
[ 5.4 19.8 13.3]
```