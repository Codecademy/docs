---
Title: '.pinv()'
Description: 'Computes the Moore-Penrose pseudo-inverse of a matrix using singular value decomposition.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Linear Algebra'
  - 'Mathematics'
  - 'Matrices'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.pinv()`** function in NumPy's linear algebra module computes the Moore-Penrose pseudo-inverse of a matrix. Unlike the regular inverse, which only exists for square non-singular matrices, the pseudo-inverse provides a generalized inverse that exists for any matrix, including rectangular and singular matrices where a true inverse doesn't exist. It calculates this generalized inverse using the input matrix's singular value decomposition (SVD).

The pseudo-inverse is particularly useful in [data science](https://www.codecademy.com/enrolled/paths/data-science-foundations), [machine learning](https://www.codecademy.com/resources/docs/general/machine-learning), and signal processing applications. It provides a way to find the "best approximate solution" to systems of linear equations that may be over-determined or under-determined. This function is a cornerstone for least-squares regression, computing projection matrices, and solving linear systems where traditional matrix inversion fails.

## Syntax

```pseudo
numpy.linalg.pinv(a, rcond=None, hermitian=False, *, rtol=<no value>)
```

**Parameters:**

- `a`: Matrix or stack of matrices to compute the pseudo-inverse for. Can be a regular NumPy array or any array-like object that can be converted to an array.
- `rcond`: Cutoff for small singular values. Singular values smaller than or equal to `rcond * largest_singular_value` are set to zero. Default is 1e-15.
- `hermitian`: Boolean indicating whether the input matrix should be treated as Hermitian (symmetric if real-valued). When True, a more efficient method for finding singular values is used. Defaults to False.
- `rtol`: Same as `rcond`, but follows the Array API naming convention. Only one of `rcond` or `rtol` can be specified at a time.

**Return value:**

The function outputs a NumPy array representing the pseudo-inverse of the given input. The output retains the matrix format if the input is a matrix object.

## Example 1: Computing Pseudo-Inverse of a Matrix

This example demonstrates how to compute the pseudo-inverse of a simple matrix using `numpy.linalg.pinv()`:

```py
import numpy as np

# Create a rectangular matrix
A = np.array([[1, 2, 3],
              [4, 5, 6]])

# Calculate the pseudo-inverse
A_pinv = np.linalg.pinv(A)

# Print the original matrix and its pseudo-inverse
print("Original matrix A:")
print(A)
print("\nPseudo-inverse of A:")
print(A_pinv)

# Verify the pseudo-inverse properties
print("\nA × A⁺ × A should equal A:")
print(np.round(A @ A_pinv @ A, decimals=10))  # Should be approximately A
```

The output of this code will be:

```shell
Original matrix A:
[[1 2 3]
 [4 5 6]]

Pseudo-inverse of A:
[[-0.94444444  0.44444444]
 [-0.11111111  0.11111111]
 [ 0.72222222 -0.22222222]]

A × A⁺ × A should equal A:
[[1. 2. 3.]
 [4. 5. 6.]]
```

## Example 2: Solving Least-Squares with Pseudo-Inverse

This example demonstrates how the pseudo-inverse can be applied to solve an overdetermined system of linear equations, commonly encountered in least-squares problems:

```py
import numpy as np
import matplotlib.pyplot as plt

# Generate some noisy data points
np.random.seed(42)
x = np.linspace(0, 10, 20)
y_true = 2 * x + 5
y_noisy = y_true + np.random.normal(0, 1, size=x.shape)

# Create the design matrix for linear regression
X = np.vstack([x, np.ones(len(x))]).T

# Solve using the pseudo-inverse
# This gives the same result as np.linalg.lstsq but using the pseudo-inverse
coefficients = np.linalg.pinv(X) @ y_noisy

# Extract the slope and intercept
slope, intercept = coefficients
print(f"Estimated model: y = {slope:.4f}x + {intercept:.4f}")
```

The above code will return the following output:

```shell
Estimated model: y = 1.8108x + 5.7746
```

## Codebyte Example: Solving a Linear System with No Unique

This example demonstrates how`.pinv()` can solve a system of equations with more equations than unknowns (an overdetermined system). In such cases, we use the pseudo-inverse to find the least-squares solution:

```codebyte/python
import numpy as np

# Overdetermined system: 3 equations, 2 unknowns
A = np.array([[2, 1],
              [1, -1],
              [3, 2]])
b = np.array([7, -1, 12])

# Use the pseudo-inverse to find the least-squares solution
x_pinv = np.linalg.pinv(A) @ b

# Check the result
b_approx = A @ x_pinv

print("Least-squares solution (x):", x_pinv)
print("Approximated b from Ax:", b_approx)
```

## Frequently Asked Questions

### 1. When should I use `pinv()` instead of the regular `inv()` function?

Use `pinv()` when dealing with non-square matrices or square matrices that might be singular or ill-conditioned. The regular inverse (`inv()`) only works for square, non-singular matrices, while the pseudo-inverse works for any matrix and provides a least-squares solution for systems of equations.

### 2. What is the difference between `numpy.linalg.pinv()` and `scipy.linalg.pinv()`?

Both functions compute the Moore-Penrose pseudo-inverse, but the SciPy version might offer additional options and use different underlying implementations. The NumPy version is often sufficient for most applications, but if you need extra control or performance optimizations, consider the SciPy version.

### 3. How does changing the `rcond` parameter affect the results?

The `rcond` parameter is a threshold for treating small singular values as zero. Increasing `rcond` means more singular values will be discarded, which can help with numerical stability but may reduce the accuracy of the solution. A smaller `rcond` retains more information but might be susceptible to numerical issues with ill-conditioned matrices.

### 4. Can `pinv()` handle complex matrices?

Yes, `numpy.linalg.pinv()` can handle complex matrices. When working with complex matrices, setting the `hermitian` parameter to `True` (if your matrix is indeed Hermitian) can improve performance by using a more efficient algorithm.
