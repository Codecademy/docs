---
Title: '.tolist()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Return the array as an a.ndim-levels deep nested list of Python scalars.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Science'
  - 'Computer Science'
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.tolist()`** function in NumPy converts a NumPy array to a Python list. It returns the array as a nested list.

## Syntax

``` python
ndarray.tolist()
```

Return a copy of the array data as a (nested) Python list. Data items are converted to the nearest compatible built-in Python type via the **`item`** function.

If `a.ndim` is 0, then since the depth of the nested list is 0, it will not be a list at all but a simple Python scalar.

## Examples

The following examples create a `ndarray` named `arr` and convert it into a nested Python list `arr_list` using `.tolist()`. We give examples of a 1D array and a 2D array.

### 1D Array

For a 1D array, `arr.tolist()` is almost the same as `list(arr)`, except that `.tolist()` changes numpy scalars to Python scalars:

``` python
import numpy as np

# Creating Numpy array
arr = np.uint32([1, 2])

# Converting the NumPy array to a Python list using list()
arr_list = list(arr)

#Checking Output
arr_list

# Checking Output's type 
type(arr_list[0])

# Converting the NumPy array to a Python list using .tolist()
arr_tolist = arr.tolist()

#Checking Output
arr_tolist

# Checking Output's type 
type(arr_tolist[0])
```

This produces the following Output:

``` python
[1, 2]

<class 'numpy.uint32'>

[1, 2]

<class 'int'>
```

As we can see, although the resulting lists are similar, the outputs' type differ.

### 2D Array

For a 2D array, `.tolist()` applies recursively:

``` python
import numpy as np

# Creating a NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Converting the NumPy array to a Python list
arr_list = arr.tolist()

print(arr_list)
```

This produces the following Output:

``` python
[[1, 2, 3], [4, 5, 6]]
```
