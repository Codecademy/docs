---
Title: '.nonzero()'
Description: 'Returns the indices of the nonzero elements in a given array.'
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
---

The **'.nonzero()'** function computes and returns the indices of the elements in a NumPy array that are non-zero.

## Syntax

```psuedo
numpy.nonzero(a)
```

**Parameter:**

- 'a': The input array

**Return Value**

The '.nonzero()' function returns a tuple of arrays. There's one array for each dimension of the input array.

## Example 1: .nonzero() with a 1D Array

The following demonstrates how to find the nonzero indices of a one-dimensional NumPy array and print the array of the nonzero values:

```py
import numpy as np

# Create a 1D array
array1 = np.array([0, 1, 0, 2, 3, 0, 0, 4, 0, 5])

# Compute the indices of the nonzero values and then the array of the nonzero values
nonzero_indices = np.nonzero(array1)
no_zero_array1 = array1[nonzero_indices]

print("Array:", array1)
print("Nonzero Indices:", nonzero_indices)
print("Nonzero Values:", no_zero_array1)
```

This example results in the following output:

```shell
Array: [0 1 0 2 3 0 0 4 0 5]
Nonzero Indices: (array([1, 3, 4, 7, 9]),)
Nonzero Values: array([1, 2, 3, 4, 5])
```

## Example 2: .nonzero() with a 2D Array

The following demonstrates how to find the nonzero indices of a two-dimensional NumPy array and print the array of the nonzero values:

```py
import numpy as np

# Create a 2D array
array2 = np.array([[1, 2], [0, 3]])

#Compute the indices of the nonzero values and then the array without the zeros
nonzero_indices = np.nonzero(array2)
no_zero_array2 = array2[nonzero_indices]

print("Array:", array2)
print("Nonzero Indices:", nonzero_indices)
print("Nonzero Values:", no_zero_array2)
```
This example results in the following output:

```shell
Array: [[1 2]
       [0 3]]
Nonzero Indices: (array([0, 0, 1]), array([0, 1, 1]))
Nonzero Values: [1, 2, 3]
```