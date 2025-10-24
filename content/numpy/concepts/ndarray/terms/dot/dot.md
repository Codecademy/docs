---
Title: '.dot()'
Description: 'Computes the dot product of two arrays — performing vector inner products, matrix multiplications, or generalized tensor contractions depending on input dimensions.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Linear Algebra'
  - 'Matrix Multiplication'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.dot()`** method in NumPy computes the **dot product** between two arrays.  
Depending on the dimensionality of the inputs, it performs one of the following operations:

- **1-D arrays:** Computes the inner (scalar) product of two vectors.  
- **2-D arrays:** Performs standard matrix multiplication.  
- **N-D arrays:** Computes the sum product over the last axis of the first array and the second-to-last axis of the second array, following NumPy’s broadcasting rules.

The `.dot()` method is widely used in **linear algebra**, **machine learning**, and **scientific computing** for operations such as computing projections, transforming coordinates, and multiplying weight matrices in neural networks.

---

## Syntax

```pseudo
ndarray.dot(b)


```

## Examples:


## Example 1: Dot Product of Two 1-D Arrays (Vectors)

This example demonstrates how .dot() computes the inner product of two one-dimensional arrays.

import numpy as np

 Define two 1-D arrays (vectors)
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

Compute the dot product

result = a.dot(b)

print("Vector A:", a)
print("Vector B:", b)
print("Dot Product:", result)

Output:

Vector A: [1 2 3]
Vector B: [4 5 6]
Dot Product: 32


Explanation:
The dot product is calculated as: 1×4+2×5+3×6=32

This operation produces a scalar value.


## Example 2: Dot Product of Two 2-D Arrays (Matrices)

When used with 2-D arrays, .dot() performs matrix multiplication, similar to the @ operator or np.matmul().

import numpy as np

Define two matrices
A = np.array([[1, 2],
              [3, 4]])
B = np.array([[5, 6],
              [7, 8]])

Perform matrix multiplication using dot()
result = A.dot(B)

print("Matrix A:\n", A)
print("\nMatrix B:\n", B)
print("\nDot Product (Matrix Multiplication):\n", result)


Output:

Matrix A:
[[1 2]
 [3 4]]

Matrix B:
[[5 6]
 [7 8]]

Dot Product (Matrix Multiplication):
[[19 22]
 [43 50]]


Explanation:
Each element in the resulting matrix is obtained by multiplying rows of A with columns of B and summing the products.

## Codebyte Example: Using .dot() for Machine Learning Weight Multiplication

This example demonstrates how .dot() is commonly used in machine learning, such as computing the output of a single-layer neural network.

import numpy as np

 Input features (3 samples, 2 features each)
X = np.array([
    [1, 2],
    [3, 4],
    [5, 6]
])

Weights for 2 features -> 1 output neuron
weights = np.array([0.5, 0.8])

Compute weighted sum using dot product
outputs = X.dot(weights)

print("Input Matrix (X):")
print(X)
print("\nWeights:")
print(weights)
print("\nDot Product Result (Weighted Outputs):")
print(outputs)


<details> 
<summary>1. How is `.dot()` different from the `@` operator or `np.matmul()`?</summary>
 <p>All three perform similar operations for 2-D arrays (matrix multiplication). However, `.dot()` and `np.matmul()` handle higher-dimensional arrays differently. The `@` operator is equivalent to `np.matmul()`, while `.dot()` can be more flexible with 1-D and N-D arrays.</p> 
</details>

<details> 
<summary>2. Can I use `.dot()` for element-wise multiplication?</summary>
 <p>No. The `.dot()` method performs a sum-product operation (dot product), not element-wise multiplication. For element-wise multiplication, use the `*` operator or `np.multiply()`.</p>
</details> 

<details>
<summary>3. What happens if the inner dimensions of the arrays don’t match?</summary>
<p>`.dot()` will raise a `ValueError`. The number of columns in the first array must equal the number of rows in the second array (for matrix multiplication) to perform a valid dot product.</p>
</details>

<details>
 <summary>4. Is `.dot()` faster than manual summation or looping?</summary> 
 <p>Yes. NumPy’s `.dot()` uses optimized C and BLAS (Basic Linear Algebra Subprograms) routines under the hood, making it significantly faster and more efficient than manually computing the dot product using loops.</p> 
 </details>
 
<details> 
<summary>5. How does `.dot()` relate to linear algebra concepts?</summary>
<p>In linear algebra, the dot product represents the projection of one vector onto another or the sum of element-wise products. It’s fundamental to many concepts like orthogonality, vector magnitude, and matrix transformations.</p> 
</details> ```