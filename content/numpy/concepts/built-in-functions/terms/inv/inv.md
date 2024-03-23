---
Title: '.inv()'
Description: 'Inverts a given matrix and returns the inverted matrix.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.inv()`** function inverts a given matrix and returns the inverted matrix. If the inversion fails or the given matrix is not a square matrix, then it raises an `LinAlgError`. Some of its use cases in the field of statistical analysis include:

- Linear Regression
- Multivariate Analysis
- Bayesian Statistics

## Syntax

```pseudo
numpy.linalg.inv(a)
```

- `a`: The matrix to be inverted.

## Example

The following example demonstrates the usage of the `.inv()` function:

```py
import numpy as np
 
array =  np.array([[2., 3.], [1., 4.]])
array2 = np.array([[[2., 3.], [1., 4.]], [[6., 4.], [10., 10.]]])

# The determinant is bigger then zero since the above matrices are non-singular

print("One matrix: ")
print(np.linalg.inv(array))

print("\nTwo matrices: ")
print(np.linalg.inv(array2))
```

The output for the above code is as follows:

```shell
One matrix: 
[[ 0.8 -0.6]
 [-0.2  0.4]]

Two matrices: 
[[[ 0.8 -0.6]
  [-0.2  0.4]]

 [[ 0.5 -0.2]
  [-0.5  0.3]]]
```

## Codebyte Example

Here is a codebyte example for the `.inv()` function:

```codebyte/py
import numpy as np

array =  np.array([[2., 4.], [1., 2.]]) 

# The determinant is zero since the above matrix is singular

print(np.linalg.inv(array))
```

> **Note:** The [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) raises an `LinAlgError` as a singular matrix can't be inverted.
