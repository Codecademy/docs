---
Title: '.det()'
Description: 'Computes the determinant of a square matrix.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Linear Algebra'
  - 'Arrays'
  - 'NumPy'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In NumPy, the **`.det()`** [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) computes the determinant of a square matrix. It's worth noting that this function is specifically intended to be used with square matrices, which have an equal number of rows and columns.

## Syntax

```pseudo
numpy.linalg.det(array)
```

- `array`: The array for which the determinant is to be computed.

## Example

The following example demonstrates the use of the `.det()` function:

```py
import numpy as np

mat_2x2 = np.array([[1, 2], [3, 4]])
det_mat_2x2 = np.linalg.det(mat_2x2)
print("Determinant of 2x2 matrix:", det_mat_2x2)

mat_3x3 = np.array([[1, 2, 3], [0, 1, 4], [5, 6, 0]])
det_mat_3x3 = np.linalg.det(mat_3x3)
print("Determinant of 3x3 matrix:", det_mat_3x3)
```

The above code produces the following output:

```shell
Determinant of 2x2 matrix: -2.0000000000000004
Determinant of 3x3 matrix: 0.9999999999999964
```

## Codebyte Example

The following codebyte example shows the usage of the `.det()` function:

```codebyte/python
import numpy as np

invertible_mat_2x2 = np.array([[3, 4], [1, 1]])
det_invertible_mat_2x2 = np.linalg.det(invertible_mat_2x2)
print("Determinant of an invertible 2x2 matrix:", det_invertible_mat_2x2)

noninvertible_mat_2x2 = np.array([[1, 2], [2, 4]])
det_noninvertible_mat_2x2 = np.linalg.det(noninvertible_mat_2x2)
print("Determinant of a non-invertible 2x 2 matrix:", det_noninvertible_mat_2x2)
```
