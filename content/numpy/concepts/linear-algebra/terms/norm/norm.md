---
Title: '.norm()'
Description: 'Calculates vector or matrix norms in NumPy.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Linear Algebra'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.norm()`** function calculates the matrix or vector norm in NumPy. It is a mathematical function that assigns a positive length or size to vectors and matrices. It is used to measure the "magnitude" of a vector or matrix, which plays a crucial role in various mathematical and computational applications.

The `.norm()` function is essential in linear algebra, scientific computing, machine learning, and data analysis. It is commonly used for measuring distances between vectors, normalizing data, regularization in machine learning algorithms, and solving systems of linear equations. The specific type of norm (Frobenius, nuclear, infinity, etc.) depends on the application and the properties needed.

## Syntax

```pseudo
numpy.linalg.norm(x, ord=None, axis=None, keepdims=False)
```

**Parameters:**

- `x`: Input array. Can be a vector (1-D array) or matrix (2-D array).
- `ord`: Order of the norm. Determines which norm to compute.
  - For vectors: `None` defaults to 2-norm, other values include `np.inf` (max norm), `-np.inf` (min norm), `0` (number of non-zeros), and any float for p-norm.
  - For matrices: `None` defaults to Frobenius norm, other values include `'fro'` (Frobenius norm), `'nuc'` (nuclear norm), `1`, `-1`, `2`, `-2`, `np.inf`, and `-np.inf`.
- `axis`: Specifies the axis or axes along which to compute the norm. If `None`, the norm of the flattened array is computed.
- `keepdims`: If `True`, the dimensions of the input array are preserved in the output.

**Return value:**

- Returns a float (for a single norm) or an array of floats (when computing norms along specific axes).

## Example 1: Basic Vector Norm

This example demonstrates how to calculate the default 2-norm (Euclidean norm) of a vector:

```py
# Import libraries
import numpy as np
from numpy import linalg as LA

# Create a vector
vec = np.array([3, 4, 5, 6])

# Calculate the default 2-norm (Euclidean norm)
vec_norm = LA.norm(vec)

# Display the result
print("Vector:", vec)
print("Default 2-norm:", vec_norm)
```

The output of this code will be:

```shell
Vector: [3 4 5 6]
Default 2-norm: 9.273618495495704
```

The 2-norm (Euclidean norm) of a vector is calculated as the square root of the sum of the squares of all elements. In this case, `sqrt(3² + 4² + 5² + 6²) = sqrt(86) ≈ 9.27`, which represents the "length" of the vector in Euclidean space.

## Example 2: Different Matrix Norms

This example shows how to calculate different types of matrix norms and their applications:

```py
# Import libraries
import numpy as np
from numpy import linalg as LA

# Create a matrix
mat = np.array([[1, 2, 3],
                [4, 5, 6]])

# Calculate different matrix norms
frobenius_norm = LA.norm(mat, 'fro')  # Frobenius norm
nuclear_norm = LA.norm(mat, 'nuc')    # Nuclear norm
inf_norm = LA.norm(mat, np.inf)       # Infinity norm
neg_inf_norm = LA.norm(mat, -np.inf)  # Negative infinity norm
one_norm = LA.norm(mat, 1)            # 1-norm
two_norm = LA.norm(mat, 2)            # 2-norm (largest singular value)

# Display results
print("Matrix:\n", mat)
print("\nFrobenius norm:", frobenius_norm)
print("Nuclear norm:", nuclear_norm)
print("Infinity norm:", inf_norm)
print("Negative infinity norm:", neg_inf_norm)
print("1-norm:", one_norm)
print("2-norm:", two_norm)
```

The output of this code will be:

```shell
Matrix:
 [[1 2 3]
 [4 5 6]]

Frobenius norm: 9.539392014169456
Nuclear norm: 10.095082387527775
Infinity norm: 15.0
Negative infinity norm: 6.0
1-norm: 9.0
2-norm: 9.508032000695724
```

Different matrix norms have different applications:

- The Frobenius norm measures the "size" of a matrix and is used in regularization techniques.
- The nuclear norm (sum of singular values) is used in matrix completion problems and low-rank approximations.
- The infinity norm represents the maximum absolute row sum and is useful in convergence analysis of iterative methods.
- The 1-norm represents the maximum absolute column sum and is often used in error analysis.
- The 2-norm (largest singular value) is used in analyzing matrix conditioning and stability. The matrix 2-norm equals the largest singular value of the matrix (not the same as the Frobenius norm).

## Codebyte Example: Computing Norms Along Specific Axes

This example demonstrates how to compute norms along specific axes, which is useful for batch operations and feature normalization:

```codebyte/python
# Import libraries
import numpy as np
from numpy import linalg as LA

# Create a matrix
mat = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

# Compute norm along axis 0 (column-wise)
col_norms = LA.norm(mat, axis=0)

# Compute norm along axis 1 (row-wise)
row_norms = LA.norm(mat, axis=1)

# Compute norm with keepdims=True
row_norms_keepdims = LA.norm(mat, axis=1, keepdims=True)

# Display the results
print("Original matrix:\n", mat)
print("\nColumn-wise norms:", col_norms)
print("Row-wise norms:", row_norms)
print("Row-wise norms (keepdims=True):\n", row_norms_keepdims)

# Application: Normalize each row to unit length
normalized_rows = mat / row_norms_keepdims
print("\nRows normalized to unit length:\n", normalized_rows)
print("Check: new row norms =", LA.norm(normalized_rows, axis=1))
```

This example demonstrates how to compute norms along different dimensions of a matrix. Row-wise norms are useful when normalizing individual samples (rows) in machine learning datasets, while column-wise norms can be used for variable scaling. The `keepdims` parameter preserves the dimensions for broadcasting operations, which enables easy normalization as shown in the example.

## Frequently Asked Questions

### 1. What is the difference between 1-norm, 2-norm, and infinity norm for a vector?

- **1-norm (Manhattan distance)**: Sum of absolute values of vector elements, representing the distance along axes.
- **2-norm (Euclidean distance)**: Square root of the sum of squared elements, representing the straight-line distance.
- **Infinity norm (Maximum norm)**: Maximum absolute value among all elements, representing the maximum distance in any dimension.

### 2. Can I use `linalg.norm()` for higher-dimensional arrays?

Yes, for arrays with more than two dimensions, you can specify the `axis` parameter to compute norms along specific axes. For example, `axis=(0,1)` would compute the norm across the first two dimensions.

### 3. How can I normalize a dataset using `linalg.norm()`?

To normalize each sample (row) to unit length, divide each row by its norm while preserving dimensions: `normalized_data = data / np.linalg.norm(data, axis=1, keepdims=True)`. This is common in text analysis, image processing, and feature preprocessing.

### 4. What happens if I specify an order less than 1?

For `ord < 1`, the result is not a mathematical norm but can still be useful in certain applications. However, be aware that these "quasi-norms" have different mathematical properties than true norms.
