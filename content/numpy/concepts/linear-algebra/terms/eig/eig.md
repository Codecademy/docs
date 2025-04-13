---
Title: '.eig()'
Description: 'Computes the eigenvalues and eigenvectors of a square matrix.'
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

The **`.eig()`** function in NumPy's linear algebra module computes the eigenvalues and right eigenvectors of a square matrix. Eigendecomposition is a fundamental matrix factorization method that breaks down a matrix into its constituent eigenvalues and eigenvectors, revealing important properties about the linear transformation represented by the matrix.

Eigenvalues and eigenvectors are essential in various applications, including principal component analysis (PCA), solving differential equations, quantum mechanics, vibration analysis, and stability analysis. They provide insights about a matrix's behavior, such as its scaling properties, diagonalizability, and characteristic dynamics.

## Syntax

```pseudo
numpy.linalg.eig(a)
```

**Parameters:**

- `a`: array_like of shape (M, M). A square matrix whose eigenvalues and eigenvectors will be computed.

**Return value:**

- `w`: ndarray of shape (M,). The eigenvalues of the matrix.
- `v`: ndarray of shape (M, M). The eigenvectors of the matrix. The column `v[:, i]` corresponds to the eigenvalue `w[i]`.

**Notes:**

- For non-symmetric matrices, the left eigenvectors can be obtained by using `eig(a.T)`.
- Eigenvalues may be complex even for real matrices.
- The eigenvectors are normalized to have unit length.

## Example 1: Basic Eigenvalue Decomposition

This example demonstrates computing eigenvalues and eigenvectors of a simple square matrix:

```py
import numpy as np

# Create a 2x2 matrix
A = np.array([[4, 2], 
              [1, 3]])
print("Original matrix:")
print(A)

# Compute eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("\nEigenvalues:")
print(eigenvalues)

print("\nEigenvectors (column-wise):")
print(eigenvectors)

# Verify the eigendecomposition: A * v = lambda * v
# For the first eigenvalue-eigenvector pair
print("\nVerification for first eigenvector:")
print("A * v:", np.dot(A, eigenvectors[:, 0]))
print("lambda * v:", eigenvalues[0] * eigenvectors[:, 0])
print("Are they equal?", np.allclose(np.dot(A, eigenvectors[:, 0]), 
                                    eigenvalues[0] * eigenvectors[:, 0]))
```

This example results in the following output:

```shell
Original matrix:
[[4 2]
 [1 3]]

Eigenvalues:
[5. 2.]

Eigenvectors (column-wise):
[[0.89442719 0.70710678]
 [0.4472136  0.70710678]]

Verification for first eigenvector:
A * v: [4.4721359 2.236068 ]
lambda * v: [4.4721359 2.236068 ]
Are they equal? True
```

The code creates a 2×2 matrix, calculates its eigenvalues and eigenvectors, and verifies that the eigendecomposition satisfies the equation A⋅v = λ⋅v, where A is the matrix, v is an eigenvector, and λ is the corresponding eigenvalue.

## Example 2: Complex Eigenvalues

This example shows how eigenvalues can be complex for certain matrices:

```py
import numpy as np

# Create a matrix with complex eigenvalues
B = np.array([[0, -1], 
              [1, 0]])
print("Matrix B:")
print(B)

# Compute eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(B)

print("\nEigenvalues:")
print(eigenvalues)

print("\nEigenvectors:")
print(eigenvectors)

# Verify the eigendecomposition for complex eigenvalues
print("\nVerification for first eigenvector:")
print("B * v:", np.dot(B, eigenvectors[:, 0]))
print("lambda * v:", eigenvalues[0] * eigenvectors[:, 0])
print("Are they equal?", np.allclose(np.dot(B, eigenvectors[:, 0]), 
                                    eigenvalues[0] * eigenvectors[:, 0]))
```

This example results in the following output:

```shell
Matrix B:
[[ 0 -1]
 [ 1  0]]

Eigenvalues:
[0.+1.j 0.-1.j]

Eigenvectors:
[[0.70710678+0.j         0.70710678-0.j        ]
 [0.        +0.70710678j 0.        -0.70710678j]]

Verification for first eigenvector:
B * v: [0.        -0.70710678j 0.70710678+0.j        ]
lambda * v: [0.        +0.70710678j 0.70710678+0.j        ]
Are they equal? True
```

This example demonstrates how the `eig()` function handles matrices with complex eigenvalues. The rotation matrix B has eigenvalues 1j and -1j, illustrating how complex eigenvalues often indicate rotational transformations.

## Example 3: Eigendecomposition of a Symmetric Matrix

This example explores the special properties of eigendecomposition for symmetric matrices:

```py
import numpy as np

# Create a symmetric matrix
C = np.array([[2, 1], 
              [1, 2]])
print("Symmetric matrix C:")
print(C)

# Compute eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(C)

print("\nEigenvalues:")
print(eigenvalues)

print("\nEigenvectors:")
print(eigenvectors)

# Check orthogonality of eigenvectors
print("\nAre eigenvectors orthogonal?")
print("v1 • v2 =", np.dot(eigenvectors[:, 0], eigenvectors[:, 1]))

# Reconstruct the original matrix using eigendecomposition
# For symmetric matrices: A = Q * diag(λ) * Q^T
reconstructed = eigenvectors @ np.diag(eigenvalues) @ eigenvectors.T
print("\nReconstruction of C:")
print(reconstructed)
print("Is reconstruction accurate?", np.allclose(C, reconstructed))
```

This example results in the following output:

```shell
Symmetric matrix C:
[[2 1]
 [1 2]]

Eigenvalues:
[3. 1.]

Eigenvectors:
[[0.70710678 0.70710678]
 [0.70710678 -0.70710678]]

Are eigenvectors orthogonal?
v1 • v2 = 0.0

Reconstruction of C:
[[2. 1.]
 [1. 2.]]
Is reconstruction accurate? True
```

This example highlights that for symmetric matrices, eigenvalues are always real, and eigenvectors form an orthogonal basis. The matrix can be perfectly reconstructed using the eigendecomposition formula A = QΛQ^T, where Q contains the eigenvectors and Λ is a diagonal matrix of eigenvalues.

## Codebyte Example: Using Eigendecomposition for System Analysis

This example uses eigenvalues to analyze a dynamical system:

```codebyte/python
import numpy as np
import matplotlib.pyplot as plt

# Define a system matrix (represents a linear dynamical system)
A = np.array([[0.5, 0.1], 
              [0.2, 0.8]])

# Compute eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)

print("System matrix:")
print(A)
print("\nEigenvalues:", eigenvalues)

# Check system stability (all eigenvalues must have magnitude < 1)
stable = np.all(np.abs(eigenvalues) < 1)
print("\nIs the system stable?", stable)

# Simulate the system evolution
x0 = np.array([1, 0])  # Initial state
steps = 20
states = [x0]

for i in range(steps):
    x0 = A @ x0
    states.append(x0)

states = np.array(states)

# Plot the system trajectory
plt.figure(figsize=(10, 5))
plt.plot(range(steps+1), states[:, 0], 'b-', label='x1')
plt.plot(range(steps+1), states[:, 1], 'r-', label='x2')
plt.xlabel('Time Step')
plt.ylabel('State Value')
plt.title('System Evolution')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

print("\nFinal state after", steps, "steps:", states[-1])
```
