---
Title: '.exp()'
Description: 'Computes the exponential of all elements in the input array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`np.exp()`** [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) in NumPy computes the exponential of all elements in the input [array](https://www.codecademy.com/resources/docs/numpy/ndarray). The exponential function, `np.exp(x)`, returns `e^x`, where `e` is Euler's number with an approximate value of 2.71828. As a part of NumPy, a widely used library for numerical computing in Python, this function is particularly useful in scientific computations where exponential functions are common.

## Syntax

```pseudo
numpy.exp(arr, out=None, where=True, casting=‘same_kind’, order=‘K’, dtype=None)
```

**Parameters:**

- `arr`: The input array or list for computing the exponential.
- `out`: The location to store the result. It must be broadcastable to the shape of `arr`.
- `where`: The condition to be checked. When `True`, the function is applied and when `False`, the original values are retained.
- `casting`: Controls the type of data casting that may occur.
- `order`: Defines the memory layout order of the result: `C` for C-order, `F` for Fortran-order, `A` for automatic, and `K` for input layout.
- `dtype`: Overrides the data type of the resultant array.

**Return Value:**

The `np.exp()` function returns a new array containing the exponential of all elements in the input array.

> **Note:** In the `np.exp()` function, the only mandatory parameter is `arr`. All other parameters, including `out`, `where`, `casting`, `order`, and `dtype`, are optional and have default values.

## Example 1: Using `.exp()` with an Array

This example uses the `np.exp()` function to compute the exponential of all elements in the given array:

```py
import numpy as np

# Create an array
arr = np.array([0, 1, 2, 3])

# Compute the exponential of all elements in the array
result = np.exp(arr)

# Print the result
print("Exponential of input array:", result)
```

The output for the example will be:

```shell
Exponential of input array: [ 1.          2.71828183  7.3890561  20.08553692]
```

## Example 2: Using `.exp()` with a Positive Number

This example uses the `np.exp()` function to compute the exponential of a positive number:

```py
import numpy as np

# Compute the exponential of 5
result = np.exp(5)

# Print the result
print("Exponential of 5:", result)
```

The output for the example will be:

```shell
Exponential of 5: 148.4131591025766
```

## Codebyte Example: Using `.exp()` with a Negative Number

This codebyte example uses the `np.exp()` function to compute the exponential of a negative number:

```codebyte/python
import numpy as np

# Compute the exponential of -10
result = np.exp(-10)

# Print the result
print("Exponential of -10:", result)
```

## Frequently Asked Questions

### 1. Can I use `np.exp()` with a list?

Yes, `np.exp()` can be used with a list; it automatically converts the list to a NumPy array and applies the exponential function element-wise.

### 2. Does NumPy exp work with complex numbers?

Yes, `np.exp()` supports complex numbers and returns the exponential of each complex input using Euler's formula.

### 3. What is the difference between math exp and NumPy exp?

`math.exp()` works only with single scalar values, while `np.exp()` can handle arrays, lists, and complex numbers, applying the function element-wise.
