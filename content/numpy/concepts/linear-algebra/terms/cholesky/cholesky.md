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

## Example 2: Matrix Verification and Properties

This example shows how to verify the properties of a Cholesky decomposition and demonstrates that the factorization can be used to determine if a matrix is positive-definite:

```py
import numpy as np

# Create a symmetric matrix that should be positive-definite
A = np.array([[4, 1, 1], 
              [1, 3, 2], 
              [1, 2, 6]])

print("Matrix A:")
print(A)

# Check if A is symmetric
is_symmetric = np.allclose(A, A.T)
print("\nIs A symmetric?", is_symmetric)

try:
  # Compute the Cholesky decomposition of A
  L = np.linalg.cholesky(A)
  print("\nCholesky factor L:")
  print(L)
    
  # Manually reconstruct A from L
  L_transpose = L.T
  reconstructed_A = np.zeros_like(A)
    
  # Multiply L and L.T manually
  for i in range(A.shape[0]):
    for j in range(A.shape[1]):
      for k in range(A.shape[0]):
        if k <= i and k <= j:  # Only use elements that exist in L
          reconstructed_A[i, j] += L[i, k] * L_transpose[k, j]
    
  print("\nManually reconstructed A:")
  print(reconstructed_A)
   
  print("\nIs the reconstruction close to the original?")
  print(np.allclose(reconstructed_A, A))
  
  print("\nA is positive-definite (verified by successful Cholesky decomposition)")
    
except np.linalg.LinAlgError:
  print("\nCholesky decomposition failed: A is not positive-definite")
```

This example results in the following output:

```shell
Matrix A:
[[4 1 1]
 [1 3 2]
 [1 2 6]]

Is A symmetric? True

Cholesky factor L:
[[2.         0.         0.        ]
 [0.5        1.6583124  0.        ]
 [0.5        1.05528971 2.15322169]]

Manually reconstructed A:
[[4 1 1]
 [1 2 1]
 [1 1 5]]

Is the reconstruction close to the original?
False

A is positive-definite (verified by successful Cholesky decomposition)
```

This example demonstrates how to use the Cholesky decomposition to verify if a matrix is positive-definite. It also shows how to manually reconstruct the original matrix from its Cholesky factor to understand how the decomposition works.

## Codebyte Example: Cholesky Decomposition for Data Covariance

This example demonstrates how to use Cholesky decomposition to analyze the covariance structure of a dataset, a common task in statistical analysis:

```codebyte/python
import numpy as np

# Generate some sample data with correlations
np.random.seed(42)
n_samples = 100
n_features = 3

# Create correlated data manually
x1 = np.random.normal(0, 1, n_samples)
x2 = 0.8 * x1 + 0.6 * np.random.normal(0, 1, n_samples)  # Correlated with x1
x3 = 0.7 * x1 - 0.5 * x2 + 0.4 * np.random.normal(0, 1, n_samples)  # Correlated with both

# Combine into a dataset
X = np.column_stack([x1, x2, x3])

print("First 5 samples of dataset:")
print(X[:5])

# Calculate the covariance matrix
cov_matrix = np.cov(X, rowvar=False)
print("\nCovariance matrix:")
print(cov_matrix)

# Compute the Cholesky decomposition of the covariance matrix
try:
  L = np.linalg.cholesky(cov_matrix)
  print("\nCholesky factor of covariance matrix:")
  print(L)
    
  # Calculate the diagonal elements of L
  # These are related to the variances explained by each independent component
  print("\nDiagonal elements of L:")
  print(np.diag(L))
    
  # Calculate the correlation matrix from the covariance matrix
  # for easier interpretation of relationships
  D = np.sqrt(np.diag(cov_matrix))
  D_inv = np.diag(1.0 / D)
  corr_matrix = D_inv @ cov_matrix @ D_inv
    
  print("\nCorrelation matrix:")
  print(corr_matrix)
    
  print("\nThe Cholesky decomposition succeeded, confirming our covariance matrix is positive-definite.")
    
except np.linalg.LinAlgError:
  print("\nCholesky decomposition failed: Covariance matrix is not positive-definite.")
  print("This could happen due to numerical instability or if the data is perfectly correlated.")
```

This example shows how to apply Cholesky decomposition to a covariance matrix calculated from actual data. It demonstrates the usefulness of Cholesky decomposition in statistical analysis by providing information about the correlation structure of the data. The diagonal elements of the Cholesky factor can give insight into the variance contributed by each independent component.

To explore more about NumPy and its role in statistics, consider exploring the [Learn Statistics with NumPy](https://www.codecademy.com/enrolled/courses/intro-statistics-numpy) course at Codecademy.
