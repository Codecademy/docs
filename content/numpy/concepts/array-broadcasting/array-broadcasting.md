---
Title: 'Array Broadcasting'
Description: 'Refers to the process of expanding the shape of a smaller array to match the shape of a larger array during arithmetic operations.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Math'
  - 'Methods'
  - 'Arrays'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, **array broadcasting** refers to the process of expanding the shape of a smaller [array](https://www.codecademy.com/resources/docs/numpy/ndarray) to match the shape of a larger array during arithmetic operations. This is helpful when there is a need to perform mathematical operations on two arrays of different shapes.

## Example

The following example demonstrates the usage of array broadcasting:

```py
import numpy as np

# Create an array of size (1 x 4)
arr1 = np.array([[11, 12, 13, 14]])

# Create an array of size (2 x 4)
arr2 = np.array([[21, 22, 23, 24], [25, 26, 27, 28]])

# Add the arrays
res = arr1 + arr2

# Print the result
print(res)
```

In the above example, the shape of the smaller array `arr1` (1 x 4) is expanded to the shape of the larger array `arr2` (2 x 4) during addition. After expansion, the array `arr1` looks like `[[11, 12, 13, 14], [11, 12, 13, 14]]`.

The above code produces the following output:

```shell
[[32 34 36 38]
 [36 38 40 42]]
```

## Codebyte Example

The following codebyte example demonstrates the usage of array broadcasting:

```codebyte/python
import numpy as np

# Create an array of size (1 x 3)
arr1 = np.array([[31, 32, 33]])

# Create an array of size (2 x 3)
arr2 = np.array([[41, 42, 43], [44, 45, 46]])

# Add the arrays
res = arr1 + arr2

# Print the result
print(res)
```
