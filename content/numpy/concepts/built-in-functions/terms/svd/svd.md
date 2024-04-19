---
Title: '.svd()'
Description: 'Singular Value Decomposition'
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

The **`.svd()`** is a mathematical technique that decomposes a matrix into three simpler matrices.Factorizes the matrix `a` into two unitary matrices `U` and `Vh`, 
along with a 1-D array `s` of singular values (real and non-negative), such that `a` equals `U @ S @ Vh`, where `S` is a suitably shaped matrix of zeros with `s` as 
its main diagonal.


## Syntax

```pseudo
numpy.linalg.svd(a, full_matrices=True, compute_uv=True, hermitian=False)
```

`.svd()` provides the following arguments:

- `a`: This is the input matrix to be decomposed with a.ndim >= 2. It is the matrix you want to perform Singular Value Decomposition on.
- `full_matrices`:This parameter determines whether to compute the full-sized or reduced-sized matrices U and VT. If full_matrices is set to True, the function 
computes the full-sized matrices. If set to False, it computes only the essential parts of U and VT. By default, it's set to True.
- `compute_uv`: This parameter specifies whether to compute the left-singular vectors (U) and right-singular vectors (transpose of V) in addition to the singular 
values. If compute_uv is set to True, the function computes U and VT. If set to False, it only computes the singular values. By default, it's set to True.
- `hermitian':This parameter indicates whether the input matrix a is Hermitian (equal to its conjugate transpose). If hermitian is set to True, the function assumes 
that a is Hermitian and uses a more efficient algorithm tailored for Hermitian matrices. If set to False, it uses a general algorithm. By default, it's set to 
False.

## Example
The following example demonstrates various scenarios of Singular Value Decomposition (SVD) and uses `.svd()` using NumPy:


```py
# The following example demonstrates various scenarios of Singular Value Decomposition (SVD) using NumPy:

a = np.random.randn(9, 6) + 1j*np.random.randn(9, 6)
b = np.random.randn(2, 7, 8, 3) + 1j*np.random.randn(2, 7, 8, 3)

## Reconstruction based on full SVD, 2D case:

U, S, Vh = np.linalg.svd(a, full_matrices=True)
U.shape, S.shape, Vh.shape
((9, 9), (6,), (6, 6))
np.allclose(a, np.dot(U[:, :6] * S, Vh))
True
smat = np.zeros((9, 6), dtype=complex)
smat[:6, :6] = np.diag(S)
np.allclose(a, np.dot(U, np.dot(smat, Vh)))
True

## Reconstruction based on reduced SVD, 2D case:

U, S, Vh = np.linalg.svd(a, full_matrices=False)
U.shape, S.shape, Vh.shape
((9, 6), (6,), (6, 6))
np.allclose(a, np.dot(U * S, Vh))
True
smat = np.diag(S)
np.allclose(a, np.dot(U, np.dot(smat, Vh)))
True

## Reconstruction based on full SVD, 4D case:

U, S, Vh = np.linalg.svd(b, full_matrices=True)
U.shape, S.shape, Vh.shape
((2, 7, 8, 8), (2, 7, 3), (2, 7, 3, 3))
np.allclose(b, np.matmul(U[..., :3] * S[..., None, :], Vh))
True
np.allclose(b, np.matmul(U[..., :3], S[..., None] * Vh))
True

## Reconstruction based on reduced SVD, 4D case:

U, S, Vh = np.linalg.svd(b, full_matrices=False)
U.shape, S.shape, Vh.shape
((2, 7, 8, 3), (2, 7, 3), (2, 7, 3, 3))
np.allclose(b, np.matmul(U * S[..., None, :], Vh))
True
np.allclose(b, np.matmul(U, S[..., None] * Vh))
True
```
