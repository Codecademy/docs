---
Title: '.tolist()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Converts the array into a nested list of Python scalars.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
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

The **`.tolist()`** function in NumPy converts a NumPy array to a Python list, returning the array as a nested list.

## Syntax

``` python
ndarray.tolist()
```

The function generates a copy of the array data as a (nested) Python list. Each element in the array is converted to the closest compatible built-in Python type using the **`item`** function.

When `a.ndim` is 0, the result of the operation is a simple scalar, as the depth of the nested list is 0. 

## Example

The following examples create a `ndarray` named `arr` and convert it into a nested Python list `arr_list` using `.tolist()`. We give examples of a 1D array and a 2D array.

For a 1D array, `arr.tolist()` is almost the same as `list(arr)`, except that `.tolist()` changes numpy scalars to Python scalars:

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

As we can see, although the resulting lists are similar, the outputs' type differ.

## Codebyte Example

Run the following code to understand the working of the `.tolist()` method for converting a 2D NumPy array to a Python list:

```codebyte/python
import numpy as np

# Creating a NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Converting the NumPy array to a Python list
arr_list = arr.tolist()

print(arr_list)
```

