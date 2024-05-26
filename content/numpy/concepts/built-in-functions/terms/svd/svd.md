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
A = np.random.randn(5, 3)

print(f"Original 2D matrix A (shape: {A.shape}): ")
print(A)

# Compute the factor by Singular Value Decomposition
U, s, Vh = np.linalg.svd(A)

# Print the result
print("\nFactor of the given array by Singular Value Decomposition:")
print(f"\nU (shape {U.shape}):")
print(U)
print(f"\nSingular values (s) (length {len(s)}):")
print(s)
print(f"\nVh (shape {Vh.shape}):")
print(Vh)
```

This produces the following output:

```shell
Original 2D matrix A (shape: (5, 3)):
[[ 0.59796872 -1.38507085  0.03524285]
 [ 1.28932701  0.81797526 -1.69122659]
 [ 0.23620894 -0.94818582  1.59777167]
 [-0.10227955 -1.92855728 -0.87461468]
 [ 1.47713324 -1.16547922 -1.28372167]]

Factor of the given array by Singular Value Decomposition:

U (shape (5, 5)):
[[-0.28838331 -0.39982197 -0.20916472 -0.43801489 -0.72205993]
 [-0.45730765  0.58585849 -0.28673931  0.48902595 -0.35535015]
 [ 0.17498222 -0.54945226 -0.61671509  0.52775216  0.09286329]
 [-0.45505181 -0.43538359  0.63541079  0.44567257 -0.03159222]
 [-0.68557556 -0.07386184 -0.29991051 -0.30306796  0.58543495]]

Singular values (s) (length 3):
[3.25448644 2.86930282 1.35462929]

Vh (shape (3, 3)):
[[-0.51832291  0.47198441  0.71314239]
 [ 0.11219578  0.864227   -0.49043225]
 [-0.84779329 -0.17419071 -0.50090332]]
```

## Codebyte Example

The following codebyte example shows the usage of the `.svd()` function:

```codebyte/python
import numpy as np

# Create a random 2D matrix
A = np.random.randn(6, 4)

print("Original 2D matrix:")
print(A)

U, s, Vh = np.linalg.svd(A)

print("\nFactor of the given array by Singular Value Decomposition:")
print("\nU =", U, "\n\ns =", s, "\n\nVh =", Vh)
```
