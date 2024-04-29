---
Title: '.svd()'
Description: 'The `.svd()` built-in function performs the Singular Value Decomposition (SVD) on a matrix, breaking it down into singular vectors and values.'
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

The **`.svd()`** function is a mathematical technique that decomposes a matrix into three simpler matrices: it factorizes the matrix `a` into two unitary matrices `U` and `Vh`, along with a 1-D array `s` of singular values (real and non-negative). This decomposition satisfies the equation `a = U @ S @ Vh`, where `S` is a suitably shaped matrix of zeros with `s` as its main diagonal.
## Syntax

```pseudo
numpy.linalg.svd(a, full_matrices=True, compute_uv=True, hermitian=False)
```
`.svd()` provides the following arguments:

- `a`: This parameter represents the input matrix to be decomposed, where `a.ndim>=2`. It is the matrix on which Singular Value Decomposition will be performed.
- `full_matrices`: This parameter determines whether the function computes full-sized or reduced-sized matrices `U` and `Vh`. If `full_matrices` is set to `True`, the function computes the full-sized matrices. If set to `False`, it computes only the essential parts of `U` and `Vh`. The default value is `True`.
- `compute_uv`: This parameter specifies whether the function computes the left-singular vectors (`U`) and right-singular vectors (transpose of `V`) in addition to the singular values. When `compute_uv` is set to `True`, the function computes `U` and `Vh`. If set to `False`, it only computes the singular values. The default value is `True`.
- `hermitian': This parameter indicates whether the input matrix `a` is Hermitian, meaning it is equal to its conjugate transpose. When `hermitian` is set to `True`, the function assumes that a is Hermitian and uses a more efficient algorithm tailored for such matrices. If set to `False`, it uses a general algorithm. The default value is `False`.

## Example
The following example demonstrates various scenarios of Singular Value Decomposition (SVD) and uses `.svd()` using NumPy:

```py
# The following example demonstrates various scenarios of Singular Value Decomposition (SVD) using NumPy:

import numpy as np

# Example 1: Full SVD, 2D Case
A = np.random.randn(5, 3)
U, S, Vt = np.linalg.svd(A, full_matrices=True)
U.shape, S.shape, Vt.shape
((5, 5), (3,), (3, 3))
np.allclose(A, np.dot(U[:, :3] * S, Vt))
True
Sigma = np.zeros((5, 3))
Sigma[:3, :3] = np.diag(S)
np.allclose(A, np.dot(U, np.dot(Sigma, Vt)))
True

# Example 2: Reduced SVD, 2D Case
B = np.random.randn(4, 6)
U, S, Vt = np.linalg.svd(B, full_matrices=False)
U.shape, S.shape, Vt.shape
((4, 4), (4,), (4, 6))
np.allclose(B, np.dot(U * S, Vt))
True
Sigma = np.diag(S)
np.allclose(B, np.dot(U, np.dot(Sigma, Vt)))
True

# Example 3: Full SVD, 3D Case
C = np.random.randn(3, 4, 5)
U, S, Vt = np.linalg.svd(C, full_matrices=True)
U.shape, S.shape, Vt.shape
((3, 3, 3), (3,), (3, 4, 5))
np.allclose(C, np.matmul(U[..., :3] * S[..., None, :], Vt))
True
np.allclose(C, np.matmul(U, np.matmul(np.diag(S), Vt)))
True

# Example 4: Reduced SVD, 3D Case
D = np.random.randn(2, 2, 3)
U, S, Vt = np.linalg.svd(D, full_matrices=False)
U.shape, S.shape, Vt.shape
((2, 2, 2), (2,), (2, 2, 3))
np.allclose(D, np.matmul(U * S[..., None, :], Vt))
True
np.allclose(D, np.matmul(U, np.matmul(np.diag(S), Vt)))
True
```
