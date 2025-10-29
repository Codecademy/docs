---
Title: 'round()'
Description: 'Returns a new array with each element rounded to the specified number of decimals.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.round()`** method in NumPy rounds each element of an [array](https://www.codecademy.com/resources/docs/numpy/ndarray) to the nearest integer or to a specified number of decimal places. Values exactly halfway between two numbers are rounded to the nearest even value (also known as banker’s rounding).

## Syntax

```pseudo
ndarray.round(decimals=0, out=None)
```

**Parameters:**

- `decimals` (int, optional): Number of decimal places to round to. Default is 0. Can be negative to round to the left of the decimal point.
- `out` (ndarray, optional): An alternative output array where results are stored. Must be the same shape as the input.

**Return value:**

Returns an array with elements rounded to the specified number of decimals. If `out` is provided, the result is stored in that array, and a reference to it is returned.

## Example 1: Round to the nearest whole number

This example rounds all elements in a NumPy array to the nearest integer:

```py
import numpy as np

arr = np.array([1.34566, 4.55, 7.788, 2.09, 9.45])
rounded_arr = arr.round()

print(rounded_arr)
```

This produces the following output:

```shell
[1. 5. 8. 2. 9.]
```

## Example 2: Round to specific decimal places

This example rounds all elements in a NumPy array to two decimal places:

```py
import numpy as np

ndarray = np.array([1.34566, 4.55, 7.788, 2.09, 9.45])
two_decimal_places = np.round(ndarray, decimals=2)

print(two_decimal_places)
```

This produces the following output:

```shell
[1.35 4.55 7.79 2.09 9.45]
```

## Codebyte Example

This example shows how to round NumPy array elements to various decimal places using `.round()`:

```codebyte/python
import numpy as np

ndarray = np.array([1.34566, 4.55, 7.788, 2.09, 9.45])

# Round off to the nearest whole number
nearest_whole_number = np.round(ndarray)
print(nearest_whole_number)

# Round off to 2 decimal places
two_decimal_places = np.round(ndarray, decimals=2)
print(two_decimal_places)
```
