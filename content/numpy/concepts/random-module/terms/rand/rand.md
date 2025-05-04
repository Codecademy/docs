---
Title: '.rand()'
Description: 'Create an array of the given shape and populate it with random samples from a uniform distribution over [0, 1)'
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

The **.rand()** is a function from the *numpy* library which generates an array of specified shapes and fills it with uniformly distributed random values between 0 and 1. The function's output is determined by the shape parameters provided and it is commonly used for creating random arrays in various applictaions such as machine learning and simulations.

## Syntax
```pseudo
numpy.random.rand(a1, a2, a3 ..., an)
```

**Parameters:**
- `a1, a2, a3, ..., an` : [int, optional] it is dimension of the returned array and if no argument is given, a single python float is returned.

**Return value:**
It returns *array* of defined shape and filled with ranom values.

## Example

The following examples demonstrate the use of `.rand()` from numpy library
```py
import numpy as np

import numpy as np

#Using .rand() to make a single float element 
single_float = np.random.rand()

#print the outcome of the .rand() method
print("This is a single float:", single_float)

#Using .rand() to make a 1D array with 5 element 
oneD_array = np.random.rand(5)

#print the outcome of 1D array of the .rand() method
print("This is a 1D array with 5 elements:", oneD_array)



twoD_array = np.random.rand(3, 4)
print("This is a 2D array with shape (3, 4):", twoD_array)



fourD_array = np.random.rand(2,4,3)
print("This is a 4D array with shape (2, 4, 3):", fourD_array)
```

The ouput for the examples above: 
```shell
This is a single float: 0.062282333140694646


This is a 1D array: [0.26135751 0.68792718 0.29413907 0.96249664 0.96284554]

This is a 2D array with shape (3, 4): [[0.40811412 0.20745341 0.85810262 0.87829271], [0.49307028 0.70737539 0.15321031 0.35123727] [0.64692421 0.5257136  0.2223447  0.34792007]
```
