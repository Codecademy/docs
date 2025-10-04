---
Title: '.cholesky()'
Description: 'Returns the Cholesky decomposition of a matrix.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Linear Algebra'
  - 'Matrices'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **Cholesky decomposition** is a matrix factorization technique that decomposes a Hermitian, positive-definite matrix into the product of a lower triangular matrix and its conjugate transpose. In NumPy's linear algebra module, the **`.cholesky()**` function implements this decomposition, returning either the lower or upper triangular Cholesky factor of a given matrix.

Cholesky decomposition is widely used in numerical analysis for efficient solutions of linear systems, Monte Carlo simulations, and matrix inversion operations. It's particularly valuable in applications like least squares problems, Kalman filters, and multivariate normal distributions in statistics and machine learning due to its numerical stability and computational efficiency compared to other matrix decomposition methods.

## Syntax

```pseudo
numpy.linalg.cholesky(a, upper=False)
```

**Parameters:**

- `a`: array_like of shape (M, M). The input matrix must be Hermitian (symmetric if all elements are real) and positive-definite.
- `upper`: bool, optional. If `True`, the function returns the upper-triangular Cholesky factor. If `False` (default), it returns the lower-triangular Cholesky factor.

**Return value:**

- `L`: array_like of shape (M, M). The lower or upper-triangular Cholesky factor of `a`. Returns a matrix object if `a` is a matrix object.

**Raises:**

- `LinAlgError`: If the decomposition fails, typically when the input matrix is not positive-definite.

## Example 1: Basic Cholesky Decomposition

This example demonstrates how to perform a basic Cholesky decomposition on a simple symmetric positive-definite matrix:

```py
import numpy as np

# Create a symmetric positive-definite matrix
A = np.array([[4, 2], [2, 5]])
print("Original matrix:")
print(A)

# Perform Cholesky decomposition
L = np.linalg.cholesky(A)
print("\nCholesky factor (lower triangular):")
print(L)

# Verify the decomposition: L @ L.T should equal the original matrix
print("\nVerification (L @ L.T):")
print(L @ L.T)

# Check if the reconstruction matches the original matrix
print("\nIs the reconstruction equal to the original matrix?")
print(np.allclose(L @ L.T, A))
```

This example results in the following output:

```shell
Original matrix:
[[4 2]
 [2 5]]

Cholesky factor (lower triangular):
[[2. 0.]
 [1. 2.]]

Verification (L @ L.T):
[[4. 2.]
 [2. 5.]]

Is the reconstruction equal to the original matrix?
True
```

The code first creates a _2×2_ symmetric positive-definite matrix, then applies the Cholesky decomposition to obtain the lower triangular factor `L`. It then verifies that L multiplied by its transpose equals the original matrix.

## Example 2: Positive-Definite Check Using Eigenvalues

This example demonstrates how to verify if a matrix is positive-definite using its eigenvalues and how `np.linalg.cholesky()` behaves accordingly:

```py
import numpy as np

# A symmetric, positive-definite matrix
A = np.array([[6, 2], [2, 3]])
print("Matrix A:\n", A)

# Check eigenvalues
eigenvalues = np.linalg.eigvals(A)
print("\nEigenvalues of A:", eigenvalues)
print("Is A positive-definite?", np.all(eigenvalues > 0))

# Attempt Cholesky decomposition
try:
  L = np.linalg.cholesky(A)
  print("\nCholesky factor L:\n", L)
except np.linalg.LinAlgError:
  print("\nCholesky decomposition failed.")

# A symmetric matrix that is not positive-definite
B = np.array([[1, 2], [2, -3]])
print("\nMatrix B:\n", B)

# Check eigenvalues
eigenvalues_B = np.linalg.eigvals(B)
print("\nEigenvalues of B:", eigenvalues_B)
print("Is B positive-definite?", np.all(eigenvalues_B > 0))

# Attempt Cholesky decomposition
try:
  L_B = np.linalg.cholesky(B)
  print("\nCholesky factor of B:\n", L_B)
except np.linalg.LinAlgError:
  print("\nCholesky decomposition failed for B: Matrix is not positive-definite.")
```

This example results in the following output:

```shell
Matrix A:
 [[6 2]
 [2 3]]

Eigenvalues of A: [7. 2.]
Is A positive-definite? True

Cholesky factor L:
 [[2.44948974 0.        ]
 [0.81649658 1.52752523]]

Matrix B:
 [[ 1  2]
 [ 2 -3]]

Eigenvalues of B: [ 1.82842712 -3.82842712]
Is B positive-definite? False

Cholesky decomposition failed for B: Matrix is not positive-definite.
```

## Codebyte Example: Error When Matrix is Not Square

This example demonstrates how the Cholesky decomposition fails when the input matrix is not square:

```codebyte/python
import numpy as np

# A non-square matrix
C = np.array([[1, 2, 3], [4, 5, 6]])
print("Matrix C (non-square):\n", C)

try:
  # Attempt Cholesky decomposition
  L = np.linalg.cholesky(C)
  print("\nCholesky factor L:\n", L)
except np.linalg.LinAlgError:
  print("\nCholesky decomposition failed: Matrix is not square or not positive-definite.")
```
