---
Title: '.tolist()'
Description: 'Converts an array into a nested list of Python scalars.'
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

The **`.tolist()`** [function](https://www.codecademy.com/resources/docs/numpy) in NumPy converts an array into a nested Python [list](https://www.codecademy.com/resources/docs/python/lists) and returns it. Each element in the array is converted into the closest compatible built-in [Python](https://www.codecademy.com/resources/docs/python) type using the `.item()` function. The attribute `a.ndim` represents the number of dimensions (axes) of the array. When `a.ndim` is 0, the result of the operation is a simple scalar, as the depth of the nested list is 0.

## Syntax

```pseudo
ndarray.tolist()
```

- `ndarray`: The array to be converted.

## Example

The following example creates an `ndarray` named `arr` and converts it into a nested Python list `arr_list` using `.tolist()`:

```py
import numpy as np

# Creating an array
arr = np.uint32([1, 2])

# Converting the array into a Python list using list()
arr_list = list(arr)

# Checking the output
print(arr_list)

# Checking the output type
print(type(arr_list[0]))

# Converting the array into a Python list using .tolist()
arr_tolist = arr.tolist()

# Checking the output
print(arr_tolist)

# Checking the output type
print(type(arr_tolist[0]))
```

This produces the following output:

```shell
[1, 2]
<class 'numpy.uint32'>
[1, 2]
<class 'int'>
```

As observed, although the resulting lists are similar, i.e., `[1, 2]`, the types of their elements differ when using `list()` versus `.tolist()`.

## Codebyte Example

Here is a codebyte example to understand the working of the `.tolist()` function for converting a 2D array into a Python list:

```codebyte/python
import numpy as np

# Creating an array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Converting the array into a Python list using .tolist()
arr_list = arr.tolist()

# Checking the output
print(arr_list)
```
