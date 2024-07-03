---
Title: '.flatten()'
Description: 'Returns a one-dimensional copy of the array.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.flatten()`** function in NumPy is a powerful tool for reshaping multi-dimensional arrays into one-dimensional arrays. This function simplifies complex arrays and makes them easier to work with.

## Syntax

The syntax for using the `.flatten()` function is as follows:

```pseudo
ndarray.flatten(order='C')
```
Parameters in pseudo:
    ndarray: The input array to be flattened.
    order: The order in which the array is flattened. It can be:
    'C': Row-major (C-style) order.
    'F': Column-major (Fortran-style) order.
    'A': Flatten in column-major order if the array is Fortran contiguous in memory, row-major order otherwise.
    'K': Flatten the array in the order the elements occur in memory (keep the order).

Here, `ndarray` refers to the multi-dimensional array that you want to flatten. The `order` parameter is optional and specifies the order in which the elements of the array should be flattened. The default value is `'C'`, which means the elements are flattened in row-major (C-style) order.

## Codebyte Example
  import numpy as np

  #Creating a 2D array
  array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

  #Flattening the 2D array to a 1D array
  flattened_array = array_2d.flatten()

  print(flattened_array)



