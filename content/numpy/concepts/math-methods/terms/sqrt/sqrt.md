---
Title: '.sqrt()'
Description: 'Calculates the square root of each element in an array.'
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
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**numpy.sqrt()** is used to determine a positive square-root of a number or array.

The numpy.sqrt() function is useful for mathematical calculations such as the quadratic equation, Pythagorean Theorem, normal distributions, and more.

## How to use numpy.sqrt()

### Getting Started

To get started with NumPy, follow this link [here](https://numpy.org/doc/stable/user/absolute_beginners.html)

[NumPy sqrt](https://numpy.org/doc/stable/reference/generated/numpy.sqrt.html) accepts up to four parameters and returns a non-negative square-root of an array, element-wise.

## Syntax

***x: array_like***
The values whose square-roots are required.

***out: ndarray, None, or tuple of ndarray and None, optional***
A location into which the result is stored. If provided, it must have a shape that the inputs broadcast to. If not provided or None, a freshly-allocated array is returned. A tuple (possible only as a keyword argument) must have length equal to the number of outputs.

***where: array_like, optional***
This condition is broadcast over the input. At locations where the condition is True, the out array will be set to the ufunc result. Elsewhere, the out array will retain its original value. Note that if an uninitialized out array is created via the default out=None, locations within it where the condition is False will remain uninitialized.

*** **kwargs ***
For other keyword-only arguments, see the [ufunc docs.](https://numpy.org/doc/stable/reference/ufuncs.html#ufuncs-kwargs)

### Example
`>>> np.sqrt([9, 4, 25])
array([3., 2., 5.])`

`>>> np.sqrt([-1, 4, 7])
array([ nan, 2., 2.64575131])`
