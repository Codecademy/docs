---
Title: '.norm()'
Description: 'Computes the norm of a matrix, either across the entire array or along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In NumPy, the **`.norm()`** [function](https://www.codecademy.com/resources/docs/numpy/built-in-functions) computes the norm of a matrix, either across the entire array or along a specified axis. It helps identify differences between matrices, pinpoint predictive errors, manage model complexity, and validate numerical algorithms.

## Syntax

```pseudo
numpy.linalg.norm(a, ord=None, axis=None, keepdims=False)
```

- `a`: The input array for which the norm is computed.
- `ord=None` (Optional): Specifies the order of the norm to compute. The default is `None`, which computes the _Frobenius norm_ for matrices and _2-norm_ for vectors.
- `axis=None` (Optional): Specifies the axis or axes along which to compute the norm. The default is `None`, which computes the norm over the entire array.
- `keepdims=False` (Optional): Specifies whether to keep the dimensions of the original array in the result. The default is `False`.

## Example

The following example demonstrates a straightforward usage of the `.norm()` function to compute the _Frobenius norm_ of a matrix:

```py
import numpy as np

matrix = np.array([[1, 2], [3, 4]])

frobenius_norm = np.linalg.norm(matrix)

print("Frobenius norm of the matrix:", frobenius_norm)
```

This produces the following output:

```shell
Frobenius norm of the matrix: 5.477225575051661
```

## Codebyte Example

The following example computes different norms for a vector using the `.norm()` function with various values of the `ord` parameter, including _1-norm (Manhattan)_, _2-norm (Euclidean)_, and _infinity norm_:

```codebyte/python
import numpy as np

# Define a sample vector
vector = np.array([3, -4, 5])

# Compute the 1-norm of the vector
l1_norm = np.linalg.norm(vector, ord=1)

# Compute the 2-norm of the vector
l2_norm = np.linalg.norm(vector, ord=2)

# Compute the infinity norm of the vector
infinity_norm = np.linalg.norm(vector, ord=np.inf)

print("1-norm of the vector:", l1_norm)
print("2-norm of the vector:", l2_norm)
print("Infinity norm of the vector:", infinity_norm)
```
