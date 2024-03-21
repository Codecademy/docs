---
Title: .inv()
Description: 'Inverts a given matrix'
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

The **.inv()** function works with *"square" matrices* and returns an inverted version of those.

Some use cases in statistical analysis are in : Linear Regression, Multivariate Analysis, Bayesian Statistics and many more..

## Syntax

```pseudo
numpy.linalg.inv(a)
```

Parameters:

- `a` parameter is a matrix ( or more matrices ) to be inverted.

Returns:

- The function returns an inverted matrix.

Raises:

- If not *square matrix* or the matrix is *singular*, raises an `LinAlgError`.



## Example

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
