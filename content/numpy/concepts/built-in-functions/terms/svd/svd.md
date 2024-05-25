---
Title: '.svd()'
Description: 'Performs the Singular Value Decomposition (SVD) on a matrix, breaking it down into singular vectors and singular values.'
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

The **`.svd()`** function is a mathematical technique that decomposes a matrix into three simpler matrices. This means it factorizes the matrix `a` into two unitary matrices `U` and `Vh`, along with a 1-D array `s` containing singular values (real and non-negative). This decomposition satisfies the equation `a = U @ S @ Vh`, where `S` is a diagonal matrix formed from the singular values in `s`.

## Syntax

```pseudo
numpy.linalg.svd(a, full_matrices=True, compute_uv=True, hermitian=False)
```

Parameters:

- `a`: The input matrix to be decomposed, with at least two dimensions.
- `full_matrices`: This parameter determines whether the function computes full-sized or reduced-sized matrices `U` and `Vh`. If `full_matrices` is set to `True`, the function computes the full-sized matrices. If set to `False`, it computes only the essential parts of `U` and `Vh`. The default value is `True`.
- `compute_uv`: If set to `True`, both singular values and singular vectors (`U` and `Vh`) are computed. If set to `False`, only the singular values are computed. The default value is `True`.
- `hermitian`: This parameter indicates whether the input matrix `a` is Hermitian, meaning it is equal to its conjugate transpose. When `hermitian` is set to `True`, the function assumes that `a` is Hermitian and uses a more efficient algorithm tailored for such matrices. If set to `False`, it uses a general algorithm. The default value is `False`.

## Example

 The following example demonstrates how to perform Singular Value Decomposition (SVD) on a 2D matrix using NumPy:

```py
import numpy as np

# Create a 2D array
A = np.random.randn(5, 3)  # Creating a random 2D matrix

print("Original 2D matrix:") 
print(A) 

# Compute the factor by Singular Value Decomposition
U, S, V = np.linalg.svd(A)  

 # Print the result
 print("\nDecomposed matrices by Singular Value Decomposition:")
 print("\nU =")
 print(U)
 print("\nSingular values (S) =")
 print(S)
 print("\nVh =")
 print(Vh)
 ```

This produces the following output:

```shell
Original 2D matrix:
 Decomposed matrices by Singular Value Decomposition:
 U =
 [[-0.39547748 -0.30734324  0.18467604 -0.12939098 -0.83563774]
  [-0.32938153  0.89028382  0.27923366 -0.11112592 -0.09263976]
  [ 0.35928965  0.32049879 -0.75033282 -0.00508631 -0.45295283]
  [-0.18426076  0.05109289 -0.02026444  0.97743833 -0.08741364]
  [-0.75634932 -0.08720604 -0.56966072 -0.1244887   0.2834079 ]]
 Singular values (S) =
 [3.82330204 2.02338927 0.8344531 ]
 Vh =
 [[ 0.13152151 -0.73103199  0.66954785]
  [-0.71548554  0.39748513  0.57453113]
  [ 0.68613595  0.55461501  0.47076497]]
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