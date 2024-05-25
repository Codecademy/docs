---
Title: '.svd()'
Description: 'Performs the Singular Value Decomposition (SVD) on a matrix, breaking it down into singular vectors and values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Linear Algebra'
  - 'Machine Learning'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.svd()`** function is a mathematical technique that decomposes a matrix into three simpler matrices: it factorizes the matrix `a` into two unitary matrices `U` and `Vh`, along with a 1-D array `s` of singular values (real and non-negative). This decomposition satisfies the equation `a = U @ S @ Vh`, where `S` is a suitably shaped matrix of zeros with `s` as its main diagonal.

## Syntax

```pseudo
numpy.linalg.svd(a, full_matrices=True, compute_uv=True, hermitian=False)
```

`.svd()` provides the following arguments:

- `a`: This parameter represents the input matrix to be decomposed, where `a.ndim>=2`. It is the matrix on which Singular Value Decomposition will be performed.
- `full_matrices`: This parameter determines whether the function computes full-sized or reduced-sized matrices `U` and `Vh`. If `full_matrices` is set to `True`, the function computes the full-sized matrices. If set to `False`, it computes only the essential parts of `U` and `Vh`. The default value is `True`.
- `compute_uv`: This parameter specifies whether the function computes the left-singular vectors (`U`) and right-singular vectors (transpose of `V`) in addition to the singular values. When `compute_uv` is set to `True`, the function computes `U` and `Vh`. If set to `False`, it only computes the singular values. The default value is `True`.
- `hermitian`: This parameter indicates whether the input matrix `a` is Hermitian, meaning it is equal to its conjugate transpose. When `hermitian` is set to `True`, the function assumes that a is Hermitian and uses a more efficient algorithm tailored for such matrices. If set to `False`, it uses a general algorithm. The default value is `False`.

## Example
The following example demonstrates various scenarios of Singular Value Decomposition (SVD) and uses `.svd()` using `NumPy`:

```py
# The following example demonstrates a scenario of Singular Value Decomposition (SVD) for a 2D matrix using NumPy:
import numpy as np

# Create a 2D array
A = np.random.randn(5, 3)  # Creating a random 2D matrix

print("Original 2D matrix:") 
print(A) 

# Compute the factor by Singular Value Decomposition
U, S, V = np.linalg.svd(A)  

# Print the result 
print("\nFactor of the given array by Singular Value Decomposition:") 
print("\nU=", U, "\n\ns=", S, "\n\nV=", V)
```

This produces the following output:

```shell
Original 2D matrix:
[[ 0.24802525  0.08222177 -1.08276458]
 [ 1.69668935  0.4094856  -0.23407198]
 [ 0.40216763  2.30735008 -0.33489652]
 [-1.00632881  0.43372609 -1.97297003]
 [ 1.44445438  2.76595846  0.08637226]]

Factor of the given array by Singular Value Decomposition:

U= [[-0.06608409 -0.31521528  0.48785517 -0.65606804 -0.47733037]
 [-0.28695698  0.23340955  0.79622903  0.47670088  0.04417332]
 [-0.56145359 -0.20509892 -0.32859417  0.36975665 -0.63088049]
 [-0.01794366 -0.88995149  0.09929954  0.22345786  0.3845394 ]
 [-0.77313419  0.10990942 -0.10090663 -0.39456001  0.47362822]] 

s= [4.01680091 2.5291219  1.49878361] 

V= [[-0.45503019 -0.88743457  0.07353512]
 [ 0.50994021 -0.19198956  0.83851117]
 [ 0.73000582 -0.41904641 -0.53989962]]
 ```

 ## Codebyte Example
 
 The following codebyte example shows the usage of the `.svd()` function:

```codebyte/python
import numpy as np

A = np.random.randn(5, 3)  # Creating a random 2D matrix
print("Original 2D matrix:") 
print(A) 

U, S, V = np.linalg.svd(A)  
print("\nFactor of the given array by Singular Value Decomposition:") 
print("\nU=", U, "\n\ns=", S, "\n\nV=", V)
```