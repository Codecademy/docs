# `exp`

## Introduction

The `exp` function in NumPy is used to calculate the exponential of all elements in the input array. This function is a part of the NumPy library, which is widely used for numerical computing in Python. The `exp` function is particularly useful in scientific computations where exponential functions are common.

## Syntax

```python
numpy.exp(arr)
```

- `arr`: Input array. The elements of the array can be any real numbers.

### Explanation

The `exp` function computes the exponential of each element in the input array `arr`. The exponential function, \(\exp(x)\), returns \(e^x\), where \(e\) is Euler's number (approximately 2.71828).

## Example

Here is an example demonstrating the use of the `exp` method:

```python
import numpy as np

# Create an input array
arr = np.array([0, 1, 2, 3])

# Calculate the exponential of each element in the array
result = np.exp(arr)

# Print the result
print("Exponential of input array:", result)
```

### Output

```
Exponential of input array: [  1.           2.71828183   7.3890561   20.08553692]
```

In this example, the `exp` function is used to compute the exponential of each element in the array `[0, 1, 2, 3]`. The output shows the result of applying the exponential function to each element of the array.

## Python Codebyte

Here is a working code snippet demonstrating the `exp` function in action:

```python
import numpy as np

# Create an input array
arr = np.array([0, 1, 2, 3])

# Calculate the exponential of each element in the array
result = np.exp(arr)

# Print the result
print("Exponential of input array:", result)
```

### Explanation of Codebyte

1. **Import NumPy**: The code begins by importing the NumPy library, which is essential for numerical operations in Python.
2. **Create an Array**: An array `arr` is created with the values `[0, 1, 2, 3]`.
3. **Calculate Exponential**: The `np.exp` function is applied to the array `arr`, calculating the exponential of each element.
4. **Print Result**: The result is printed, showing the exponential values of the input array elements.

By following these steps, you can easily use the `exp` function in NumPy to perform exponential calculations on arrays.
