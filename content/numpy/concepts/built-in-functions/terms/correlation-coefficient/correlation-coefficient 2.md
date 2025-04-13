---
Title: '.corrcoef()'
Description: 'Computes the Pearson correlation coefficient of two specified arrays.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In NumPy, the **`.corrcoef()`** method computes the Pearson correlation coefficient of two specified [arrays](https://www.codecademy.com/resources/docs/numpy/ndarray) and returns an array as the result.

## Syntax

```pseudo
numpy.corrcoef(x, y=None, rowvar=True, dtype=None)
```

- `x`: The first array to be used for computing the Pearson correlation coefficient.
- `y` (Optional): The second array to be used for computing the Pearson correlation coefficient.
- `rowvar` (Optional): If `True` (default), then each row represents a variable and each column contains an observation. If `False`, then the roles are reversed.
- `dtype` (Optional): Specifies the return data type.

## Example

The following example demonstrates the usage of the `.corrcoef()` method:

```py
# Importing the NumPy library
import numpy as np

# Defining two arrays
arr1 = np.array([6, 21, 37])
arr2 = np.array([1, 25, 51])

# Using the .corrcoef() method
res = np.corrcoef(arr1, arr2)

# Printing the result
print(res)
```

The above code produces the following output:

```shell
[[1.         0.99999002]
 [0.99999002 1.        ]]
```

## Codebyte Example

Run the following codebyte example to understand the use of the `.corrcoef()` method:

```codebyte/python
# Importing the NumPy library
import numpy as np

# Defining two arrays
arr1 = np.array([6, 19, 23])
arr2 = np.array([13, 16, 28])

# Using the .corrcoef() method
res = np.corrcoef(arr1, arr2)

# Printing the result
print(res)
```
