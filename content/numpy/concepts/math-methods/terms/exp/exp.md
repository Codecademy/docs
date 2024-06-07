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

The **`.exp`** function in NumPy calculates the exponential of all elements in the input array. As a part of the NumPy library, which is widely used for numerical computing in Python, this function is particularly useful in scientific computations where exponential functions are common.

## Syntax

```pseudo
numpy.exp(arr, out = None, where = True, casting = ‘same_kind’, order = ‘K’, dtype = None)
```

- `arr`: Input array. The elements of the array can be any real numbers. Type - (`array_like`)
- `out`: A location to store the result. Must be broadcastable to the shape of `arr`. Type - (`ndarray` or None, optional)
- `where`: Condition to apply the exponential. `True` values will be computed. Type - (`array_like`, optional)
- `casting`: Rules for casting data types. Type - (`{'no', 'equiv', 'safe', 'same_kind', 'unsafe'}`, optional)
- `order`: Memory layout order for the output. Type - (`{'C', 'F', 'A', 'K'}`, optional)
- `dtype`: Desired output data type. Type - (`data-type`, optional)

>**Note:** The `.exp()` function computes the exponential of each element in the input array array. The exponential function, `.exp(𝑥)`, returns `e^x` , where `𝑒` is Euler's number, approximately 2.71828. 

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

```
Exponential of input array: [  1.    2.71828183   7.3890561   20.08553692]
```

In this example, the `exp` function is used to compute the exponential of each element in the array `[0, 1, 2, 3]`. The output shows the result of applying the exponential function to each element of the array.

## Codebyte Example

Here is a working code snippet demonstrating the `exp` function in action:

```codebyte/python
import numpy as np

# Create and print an input array
in_array = [1, 3, 5]
print ("Input array : ", in_array)
 
# Calculate and print the result 
out_array = np.exp(in_array)
print ("Output array : ", out_array)
```