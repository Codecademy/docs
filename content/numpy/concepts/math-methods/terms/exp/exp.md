---
Title: '.exp()'
Description: 'Computes the exponential of all elements in the input array'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.exp()`** function in NumPy calculates the exponential of all elements in the input array. The exponential function, `.exp(𝑥)`, returns `e^x` , where `𝑒` is Euler's number, approximately 2.71828. As a part of the NumPy library, which is widely used for numerical computing in Python, this function is particularly useful in scientific computations where exponential functions are common.

## Syntax

```pseudo
numpy.exp(arr, out=None, where=True, casting=‘same_kind’, order=‘K’, dtype=None)
```

- `arr`: Input values, which can be an array or list for computing the exponential.
- `out`: A location to store the result. Must be broadcastable to the shape of `arr`. 
- `where`: Condition to apply the function where `True`, retaining original values where `False`.
- `casting`: Controls the type of data casting that may occur. Default is `same_kind`.
- `order`: Defines the memory layout order of the result: `C` for C-order, `F` for Fortran-order, `A` for automatic, `K` for input layout.
- `dtype`: Overrides the data type of the result array.

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
Exponential of input array: [  1.    2.71828183   7.3890561   20.08553692]
```

In this example, the `exp` function is used to compute the exponential of each element in the array `[0, 1, 2, 3]`. The output shows the result of applying the exponential function to each element of the array.

## Codebyte Example

Here is a working code snippet demonstrating the `exp` function in action:

```codebyte/python
import numpy as np

in_array = [1, 3, 5]
print ("Input array : ", in_array)
 
out_array = np.exp(in_array)
print ("Output array : ", out_array)
```
