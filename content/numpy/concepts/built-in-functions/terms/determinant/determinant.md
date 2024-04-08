---
Title: '.det()'
Description: 'Computes the determinant of a square matrix'
Subjects:
  -  Computer Science
  -  Data Science
Tags:
  -  Linear Algebra
  -  Arrays
  -  NumPy
  -  Functions
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.linalg.det()`** function returns the determinant of a given matrix. The `.linalg.det()` function can only be used on square matricies. A determinant of 0 indicates that a matrix does not have an inverse.

## Syntax

```pseudo
numpy.linalg.det(array)
```

`.linalg.det()` requires the following argument:

- `array` : The numpy array-like object for which the determinant is computed.

## Example

The following examples demonstrate the use of the `.det()` method:

```py
import numpy as np

mat_2x2 = np.array([[1, 2], [3, 4]])
det_mat_2x2 = np.linalg.det(mat_2x2)
print("Determinant of 2 x 2 matrix:", det_mat_2x2) # prints output approx. -2.0

mat_3x3 = np.array([[1, 2, 3], [0, 1, 4], [5, 6, 0]])
det_mat_3x3 = np.linalg.det(mat_3x3)
print("Determinant of 3 x 3 matrix:", det_mat_3x3) # prints output approx. 1.0
```

This produces the following output:

```shell
Determinant of 2 x 2 matrix: -2.0000000000000004
Determinant of 3 x 3 matrix: 0.9999999999999964
```

## Codebyte Example
The following examples demonstrate the use of the `.det()` method.

```codebyte/python
import numpy as np

invertible_mat_2x2 = np.array([[3, 4], [1, 1]])
det_invertible_mat_2x2 = np.linalg.det(invertible_mat_2x2)
print("Determinant of an invertible 2 x 2 matrix:", det_invertible_mat_2x2) # prints output approx. -1.0

noninvertible_mat_2x2 = np.array([[1, 2], [2, 4]])
det_noninvertible_mat_2x2 = np.linalg.det(noninvertible_mat_2x2)
print("Determinant of a noninvertible 2 x 2 matrix:", det_noninvertible_mat_2x2) # prints output approx. 0
```