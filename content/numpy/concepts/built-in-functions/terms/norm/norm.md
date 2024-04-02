---
Title: '.norm()'
Description: 'The Matrix Norm entry explains a mathematical measure used to quantify matrix size and its role in statistical analysis.'
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
 

# Matrix Norm

Description: '**Matrix norm**, in statistical analysis, is a mathematical measure that quantifies the size or magnitude of a matrix. It provides a way to evaluate the distance between matrices, assess error in predictive models, regulate model complexity, and analyze convergence properties of numerical algorithms.'

## Syntax

```pseudo
numpy.linalg.norm(a, ord=None, axis=None, keepdims=False)
```
Parameters of numpy.linalg.norm function:
- a: The input array for which the norm is computed.
- ord=None: (Optional) Specifies the order of the norm to compute. Default is None, which computes the Frobenius norm.
- axis=None: (Optional) Specifies the axis or axes along which to compute the norm. Default is None, which computes the norm over the entire array.
- keepdims=False: (Optional) Specifies whether to keep the dimensions of the original array in the result. Default is False.

## Example

The following example demonstrates a straightforward usage of numpy.linalg.norm to compute the Frobenius norm of a matrix:

- The NumPy library is np.
- We define a sample matrix matrix using NumPy's array function.
- We compute the Frobenius norm of the matrix using numpy.linalg.norm function and store the result in the variable frobenius_norm.
- Finally, we print the computed Frobenius norm of the matrix.

```py
import numpy as np

matrix = np.array([[1, 2], [3, 4]])

frobenius_norm = np.linalg.norm(matrix)

print("Frobenius norm of the matrix:", frobenius_norm)
```
This produces the following:

```py
Frobenius norm of the matrix: 5.477225575051661
```

## Codebyte Example
The below example computes different norms for a vector using numpy.linalg.norm with various values of the ord parameter, including L1 (Manhattan), L2 (Euclidean), and infinity norms.

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
