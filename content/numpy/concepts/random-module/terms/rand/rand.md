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

The following examples demonstrate the use of `.rand()` from numpy library:

```py
import numpy as np

import numpy as np

#Using .rand() to make a single float element 
single_float = np.random.rand()

#print the outcome of the .rand() method
print("This is a single float:", single_float,"\n")

#Using .rand() to make a 1D array with 5 element 
oneD_array = np.random.rand(5)

#print the outcome of 1D array of the .rand() method
print("This is a 1D array with 5 elements:", oneD_array, "\n")

twoD_array = np.random.rand(3, 4)
print("This is a 2D array with shape (3, 4):", twoD_array, "\n")

fourD_array = np.random.rand(2,4,3)
print("This is a 4D array with shape (2, 4, 3):", fourD_array, "\n")
```

The ouput for the examples above: 

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

## Codebyte Example

The following codebyte is an example of the `.rand()` in use to generate different dimensional arrays:

```codebyte/python
import numpy as np
import random
#Create a float using .rand()
single_float = np.random.rand()

print("The float made using numpy.random.rand() is ", single_float, "\n")


#Create a random integer between 1-10
t = random.randint(1, 10)

#Create a random integer between 1, 5
s = random.randint(1, 5)

#Create a one dimensional array with a random number(between 1 and 10) of elements
one_d_array = np.random.rand(t)

print('The 1-dimensional array using numpy.random.rand() is ',one_d_array,"\n")

#Create a five dimensional array
five_d_array = np.random.rand(s, 4, 6, 7, 1)

print("The 5-dimensional array using numpy.random.rand() is ",five_d_array, "\n")
```