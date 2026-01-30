---
Title: '.rand()'
Description: 'Returns an array of the provided shape filled with randomly generated samples from a uniform distribution over [0, 1).'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.rand()`** function from the NumPy library returns an array of the provided shape filled with randomly generated samples from a uniform distribution over [0, 1). The shape of the output array is decided based on the arguments for the function.

This function is commonly used for creating random arrays in applications like machine learning and simulations.

## Syntax

```pseudo
numpy.random.rand(d0, d1, ..., dn)
```

**Parameters:**

- `d0, d1, ..., dn` (int, optional): Dimensions of the returned array. Each parameter represents the size along a particular axis.

**Return value:**

An array ([`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray)) of shape (`d0, d1, ..., dn`) filled with random floats from a uniform distribution over [0, 1).

## Example

This example demonstrates the use of `.rand()`:

```py
import numpy as np

# Using .rand() to generate a single float value
single_float = np.random.rand()
print("This is a single float:", single_float, "\n")

# Using .rand() to generate a 1D array with 5 elements
oneD_array = np.random.rand(5)
print("This is a 1D array with 5 elements:", oneD_array, "\n")

# Using .rand() to generate a 2D array with shape (3, 4)
twoD_array = np.random.rand(3, 4)
print("This is a 2D array with shape (3, 4):", twoD_array, "\n")

# Using .rand() to generate a 3D array with shape (2, 4, 3)
fourD_array = np.random.rand(2, 4, 3)
print("This is a 3D array with shape (2, 4, 3):", fourD_array, "\n")
```

The possible output for this code can be:

```shell
This is a single float: 0.062282333140694646

This is a 1D array: [0.26135751 0.68792718 0.29413907 0.96249664 0.96284554]

This is a 2D array with shape (3, 4): [[0.43097673 0.1741973  0.92504336 0.70587898]
 [0.04921928 0.55717071 0.66223492 0.52897239]
 [0.43088071 0.72260989 0.77430222 0.91549911]]

This is a 4D array with shape (2, 4, 3): [[[0.66207525 0.72505789 0.56002624]
  [0.49060286 0.68176017 0.5740969 ]
  [0.60655012 0.83349518 0.85648538]
  [0.18412521 0.29999511 0.89179013]]

 [[0.29378119 0.08597027 0.68488609]
  [0.95905169 0.24037647 0.21941708]
  [0.17337005 0.86617885 0.45531762]
  [0.06081413 0.08813921 0.34166149]]]
```

> **Note:** The output of `np.random.rand()` may change each time because it generates pseudo-random numbers based on the system's internal state, which may vary with each execution.

## Codebyte Example

This codebyte is an example of `.rand()` in use to generate different dimensional arrays:

```codebyte/python
import numpy as np
import random

# Create a float using .rand()
single_float = np.random.rand()

print("The float made using numpy.random.rand() is", single_float, "\n")

# Create a random integer in the range 1-10
t = random.randint(1, 10)

# Create a random integer between 1 and 5
s = random.randint(1, 5)

# Create a one-dimensional array with a random number (between 1 and 10) of elements
one_d_array = np.random.rand(t)

print('The 1-dimensional array using numpy.random.rand() is', one_d_array, "\n")

# Create a five-dimensional array with random values
five_d_array = np.random.rand(s, 4, 6, 7, 1)

print("The 5-dimensional array using numpy.random.rand() is", five_d_array, "\n")
```
