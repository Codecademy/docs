---
Title: '.exp()'
Description: 'Computes the exponential of all elements in the input array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Functions'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.exp()`** [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) in NumPy calculates the exponential of all elements in the input array. The exponential function, `.exp(𝑥)`, returns `e^x`, where `e` is Euler's number with an approximate value of 2.71828. As a part of the NumPy library, which is widely used for numerical computing in [Python](https://www.codecademy.com/resources/docs/python), this function is particularly useful in scientific computations where exponential functions are common.

## Syntax

```pseudo
numpy.exp(arr, out=None, where=True, casting=‘same_kind’, order=‘K’, dtype=None)
```

- `arr`: The input array or list for computing the exponential.
- `out`: The location to store the result. It must be broadcastable to the shape of `arr`.
- `where`: The condition to be checked. When `True`, the function is applied and when `False`, the original values are retained.
- `casting`: Controls the type of data casting that may occur.
- `order`: Defines the memory layout order of the result: `C` for C-order, `F` for Fortran-order, `A` for automatic, and `K` for input layout.
- `dtype`: Overrides the data type of the resultant array.

> Note: In the `.exp()` function, the only mandatory parameter is `arr`. All other parameters, including `out`, `where`, `casting`, `order`, and `dtype`, are optional and have default values.

## Example

Here is an example demonstrating the use of the `.exp()` function:

```py
import numpy as np

# Create an input array
arr = np.array([0, 1, 2, 3])

# Compute the exponential of each element in the array
result = np.exp(arr)

# Print the result
print("Exponential of input array:", result)
```

The code above produces the following output:

```shell
Exponential of input array: [ 1.          2.71828183  7.3890561  20.08553692]
```

In this example, the `.exp()` function is used to compute the exponential of each element in the array `[0, 1, 2, 3]`.

## Codebyte Example

Here is a working codebyte example demonstrating the `.exp()` function in action:

```codebyte/python
import numpy as np

in_array = [1, 3, 5]
print ("Input array : ", in_array)

out_array = np.exp(in_array)
print ("Output array : ", out_array)
```
