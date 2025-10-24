---
Title: '.dot()'
Description: 'Computes the dot product of two arrays.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
  - 'Linear Algebra'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.dot()`** method computes the dot product of an array with another array (or scalar).

- For two 1-D arrays, it computes the standard **inner product** of vectors.
- For 2-D arrays, it is equivalent to **matrix multiplication**.
- For N-D arrays, it is a sum-product over the last axis of the first array and the second-to-last axis of the second array.

## Syntax

```pseudo
ndarray.dot(b, out=None)
````

  - `ndarray`: The first array (A) in the dot product operation (A $\cdot$ B).
  - `b`: The second array (B) or scalar in the dot product operation.
  - `out` (optional): An alternative output array to place the result in. It must have the same shape and buffer length as the expected output, but the type will be cast if necessary.

-----

## Example

In this example, we use the `.dot()` method to perform matrix multiplication on two 2-dimensional NumPy arrays, `matrix_a` and `matrix_b`.

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

We will get the following result:

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

-----

## Codebyte Example

In the following codebyte example, the `.dot()` method is used to calculate the **inner product** (dot product) of two 1-dimensional vectors, `vector_x` and `vector_y`.

$$\vec{x} \cdot \vec{y} = (1 \times 5) + (2 \times 6) + (3 \times 7) = 5 + 12 + 21 = 38$$

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

