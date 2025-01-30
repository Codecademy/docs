---
Title: '.quad()'
Description: 'Calculates the definite integral of a function over a particular limit.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Functions'
  - 'Math'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.quad()`** function in SciPy calculates the definite integral of a given function over a specified interval `[a, b]`. It is part of the [`scipy.integrate`](https://www.codecademy.com/resources/docs/scipy/scipy-integrate) module and provides both the integral value and an estimate of the absolute error. The function is useful for numerical integration, especially when dealing with complicated functions or when an analytical solution is difficult to obtain.

## Syntax

```pseudo
integrate.quad(func, a, b, args=(), full_output=0, complex_func=False, ...)
```

- `func`: The function to integrate.
- `a`: The lower limit to use for integration.
- `b`: The upper limit to use for integration.
- `args` (Optional): A tuple of additional arguments to pass to `func`. Default is an empty tuple `()`.
- `full_output` (Optional): If non-zero, it returns additional information (such as the error estimate and evaluation statistics).
- `complex_func` (Optional): If `True`, the function is assumed to return complex values. Default is `False`.

> **Note:** The ellipsis (`...`) indicates that there can be additional optional parameters beyond those listed here.

## Example

The following example demonstrates the usage of the `.quad()` function to calculate the definite integral of $x^3$ from 1 to 3:

```py
from scipy import integrate

# Define a function
func = lambda x: x**3

# Calculate the definite integral of the function from 1 to 3
res = integrate.quad(func, 1, 3)

# Print the result
print(res)
```

The above code produces the following output:

```shell
(20.0, 2.220446049250313e-13)
```
