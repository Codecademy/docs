---
Title: '.dot()'
Description: 'Computes the dot product of two arrays.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Linear Algebra'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.dot()`** method computes the dot product of an array with another array or scalar. For one-dimensional arrays, it calculates the standard inner product of vectors. When applied to two-dimensional arrays, it performs matrix multiplication. For arrays with higher dimensions, it executes a sum-product over the last axis of the first array and the second-to-last axis of the second array.

## Syntax

```pseudo
ndarray.dot(b, out=None)
```

**Parameters:**

- `ndarray`: The first array (A) in the dot product operation (A $\cdot$ B).
- `b`: The second array (B) or scalar in the dot product operation.
- `out` (optional): An alternative output array to place the result in. It must have the same shape and buffer length as the expected output, but the type will be cast if necessary.

**Return value:**

Returns the dot product as a scalar, 2-D array, or ndarray, depending on the input dimensions.

## Example

This example shows how to use the `.dot()` method for matrix multiplication between two 2D NumPy arrays, `matrix_a` and `matrix_b`:

```py
# Import NumPy
import numpy as np

# Create the first 2x3 matrix
matrix_a = np.array([[1, 2, 3],
                     [4, 5, 6]])

# Create the second 3x2 matrix
matrix_b = np.array([[7, 8],
                     [9, 10],
                     [11, 12]])

# Use the '.dot()' method for matrix multiplication (2x3 @ 3x2 = 2x2)
result_matrix = matrix_a.dot(matrix_b)

print("Matrix A:")
print(matrix_a)
print("\nMatrix B:")
print(matrix_b)
print("\nResult (A.dot(B)):")
print(result_matrix)
```

The output of the above code will be:

```shell
Matrix A:
[[1 2 3]
 [4 5 6]]

Matrix B:
[[ 7  8]
 [ 9 10]
 [11 12]]

Result (A.dot(B)):
[[ 58  64]
 [139 154]]
```

## Codebyte Example

In the following codebyte example, the `.dot()` method is used to calculate the inner product (dot product) of two one-dimensional vectors, `vector_x` and `vector_y`:

```codebyte/python
import numpy as np

# Create two 1-D arrays (vectors)
vector_x = np.array([1, 2, 3])
vector_y = np.array([5, 6, 7])

# Calculate the inner product (dot product)
dot_product = vector_x.dot(vector_y)

print(f"Vector x: {vector_x}")
print(f"Vector y: {vector_y}")
print(f"Dot product (x.dot(y)): {dot_product}")
```

Here's the explanation:

$$\vec{x} \cdot \vec{y} = (1 \times 5) + (2 \times 6) + (3 \times 7) = 5 + 12 + 21 = 38$$
