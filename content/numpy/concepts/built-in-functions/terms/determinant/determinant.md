---
Title: '.linalg.det()' 
Description: 'Returns the determinant of a 2D array' 
Subjects:
  -  Computer Science
  -  Data Science
  -  Machine Learning
Tags:
  -  Linear Algebra
  -  Arrays
  -  NumPy
  -  Functions
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.linalg.det()`** function returns the determinant of a given matrix. 

## Syntax

```pseudo
numpy.linalg.det(array)
```

`.linalg.det()` provides the following argument:

 - `array` : The numpy array_like object to compute the determinant for

## Example

The following example creates multiple numpy arrays then computes and returns the respective determinants.

```py
import numpy as np

a = np.array([[1, 2], [3, 4]])
det_a = np.linalg.det(a)
print(det_a)

b = np.array([[5, 6], [7, 8]])
det_b = np.linalg.det(b)
print(det_b)

c = np.array([[1, 2, 3], [0, 1, 4], [5, 6, 0]])
det_c = np.linalg.det(c)
print(det_c)
```

This produces the following output:

```shell
-2.0
-2.0
1.0
```
