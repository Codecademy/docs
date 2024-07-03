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

- `ndarray`: Refers to the multi-dimensional array that is to be flattened.
- `order`: The order in which the array is flattened. Default is `C`, but it can have other values as follows:
  - `C`: To flatten in row-major (C-style) order.
  - `F`: To flatten in column-major (Fortran-style) order.
  - `A`: To flatten in column-major order if the array is Fortran contiguous in memory, otherwise in row-major order.
  - `K`: To flatten the array in the order the elements occur in memory.

## Example

```py
import numpy as np

# Create a 2D array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Flatten the array
flattened_arr = arr.flatten()

print(flattened_arr)
```

The above code generates the output as follows:

```shell
[1 2 3 4 5 6]
```

In this example, we first create a 2D array `arr` using NumPy. Then, we use the `.flatten()` function to flatten the array into a one-dimensional array `flattened_arr`. Finally, we print the flattened array.

## Codebyte Example

```codebyte/python
import numpy as np

# Creating a 2D array
array_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])

# Flattening the 2D array to a 1D array
flattened_array = array_2d.flatten()

print(flattened_array)
```
