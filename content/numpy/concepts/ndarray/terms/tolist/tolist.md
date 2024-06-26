---
Title: '.tolist()'
Description: 'Converts the array into a nested list of Python scalars.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.tolist()`** function in NumPy converts a NumPy array to a Python list, returning the array as a nested list. The function generates a copy of the array data as a (nested) Python list. Each element in the array is converted to the closest compatible built-in Python type using the `item` function. The attribute `a.ndim` represents the number of dimensions (axes) of the array. When `a.ndim` is 0, the result of the operation is a simple scalar, as the depth of the nested list is 0. 

## Syntax

``` python
ndarray.tolist()
```

## Example

The following examples create an `ndarray` named `arr` and convert it into a nested Python list `arr_list` using `.tolist()`:

``` python
import numpy as np

# Creating Numpy array
arr = np.uint32([1, 2])

# Converting the NumPy array to a Python list using list()
arr_list = list(arr)

#Checking Output
print(arr_list)

# Checking Output's type 
print(type(arr_list[0]))

# Converting the NumPy array to a Python list using .tolist()
arr_tolist = arr.tolist()

#Checking Output
print(arr_tolist)

# Checking Output's type 
print(type(arr_tolist[0]))
```

This produces the following Output:

``` python
[1, 2]
<class 'numpy.uint32'>
[1, 2]
<class 'int'>
```

As observed, although the resulting lists `[1, 2]` are similar, the types of their elements differ when using `.list()` versus `.tolist()`.

## Codebyte Example

Run the following code to understand the working of the `.tolist()` function for converting a 2D NumPy array to a Python list:

```codebyte/python
import numpy as np

# Creating a NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Converting the NumPy array to a Python list
arr_list = arr.tolist()

print(arr_list)
```
