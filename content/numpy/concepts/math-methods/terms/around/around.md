---
Title: '.around()'
Description: 'Rounds each element of an array to the specified number of decimal places.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'NumPy'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.around()`** method is used to round each element in an [array](https://www.codecademy.com/resources/docs/numpy/ndarray) to the given number of decimal places. It is useful for formatting numerical results or when working with floating-point numbers that need to be rounded to a specific precision.

## Syntax

```pseudo
numpy.around(x, decimals=0, out=None)
```

- `x`: This is the input array containing the numbers to be rounded.
- `decimals`: The number of decimal places to which each element will be rounded. The default value is `0`, which rounds to the nearest integer. Negative values are allowed to be rounded to the left of the decimal point.
- `out`: This is an optional parameter. It specifies an output array to store the result. If not provided or set to `None`, a new array is created for the result.

## Example

The following example demonstrates the usage of the `.around()` method:

```py
# Importing the 'numpy' library as 'np'
import numpy as np

# Defining an input array with floating-point numbers
a_input = np.array([1.56789, 2.34567, 3.45678, 4.12345])

# Rounding each element to 2 decimal places
result_2dec = np.around(a_input, decimals=2)
print("result_2dec:", result_2dec)

# Rounding each element to 0 decimal places (nearest integer)
result_0dec = np.around(a_input)
print("result_0dec:", result_0dec)

# Rounding each element to -1 decimal places (nearest: 10)
result_negdec = np.around(a_input, decimals=-1)
print("result_negdec:", result_negdec)
```

The output of the above code is shown below:

```shell
result_2dec: [1.57 2.35 3.46 4.12]
result_0dec: [2. 2. 3. 4.]
result_negdec: [ 0.  0. 0. 0.]
```

## Codebyte Example

The following codebyte demonstrates the `.around()` method:

```codebyte/python
import numpy as np

result = np.around(3.14159, decimals=3)

print(result)
```

In this example, the number `3.14159` is rounded to three decimal places, resulting in `3.142`.
