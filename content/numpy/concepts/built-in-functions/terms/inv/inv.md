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

The **`.inv()`** function inverts a given matrix and returns the inverted matrix. If the inversion fails or the given matrix is not a square matrix, then it raises an `LinAlgError`.

Some of its use cases in the field of statistical analysis include:

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
 
array =  np.array([[2., 3.], [1., 4.]]) #array in a shape of one matrix
array2 = np.array([[[2., 3.], [1., 4.]], [[6., 4.], [10., 10.]]]) #array in a shape of two matrices

#These matrices are non-singular. Which means the determinant is bigger then zero.

print("\nOne matrix: ")
print(np.linalg.inv(array)) 



print("\n\nTwo matrices: " )
print( np.linalg.inv(array2)) 

```
Output:

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

```codebyte/py
import numpy as np

array =  np.array([[2., 4.], [1., 2.]]) 
# matrix which is singular - Determinant equals to zero.

print(np.linalg.inv(array))
```

NOTE: The function raises an error if the given matrices are singular. Beacuse there is no inversion of those matrices.
