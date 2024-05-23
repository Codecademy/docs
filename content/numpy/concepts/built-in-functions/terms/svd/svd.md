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
  - 'paths/data-science-foundaions'
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
A = np.random.randn(5, 3)

print("Original 2D matrix:")
print(A)

# Perform Singular Value Decomposition
U, S, Vh = np.linalg.svd(A)

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
[[-0.65459707 -0.28990248 -2.08823541]
 [-1.47772307  1.30389258  0.1808251 ]
 [ 0.58411747 -0.92306871 -0.47605081]
 [-1.38531499 -0.21697106 -0.00791452]
 [-1.69248419  1.1407218   1.63672417]]
Decomposed matrices by Singular Value Decomposition:
U =
[[ 0.2514362  -0.85470688  0.11490603 -0.29442599  0.3261379 ]
 [-0.49115392 -0.35572057  0.45721495  0.07597937 -0.64607455]
 [ 0.31720394  0.01381681 -0.40798101 -0.60225989 -0.60829703]
 [-0.22415522 -0.37226579 -0.75259686  0.48447905 -0.10025285]
 [-0.73802694  0.06454693 -0.21189749 -0.55686942  0.31007391]]
Singular values (S) =
[3.5271579  2.36138603 1.00175108]
Vh =
[[ 0.65381506 -0.51014251 -0.55882062]
 [ 0.63508315 -0.03150381  0.77180108]
 [ 0.41133352  0.85951273 -0.30338525]]
```
