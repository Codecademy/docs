---
Title: '.dot()'
Description: 'Computes the dot product of two arrays.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'Linear Algebra'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`np.dot()`** method computes the dot product of two [arrays](https://www.codecademy.com/resources/docs/numpy/ndarray). For 1D arrays, it returns a scalar value. For 2D arrays, it performs matrix multiplication and returns a new 2D array containing the result.

The `np.dot()` method is vital in many fields such as linear algebra, machine learning, and [data science](https://www.codecademy.com/resources/docs/data-science). In machine learning, it's used in operations like calculating weights and biases in neural networks. In data science, it helps in performing projections and transformations of data.

## Syntax

```pseudo
numpy.dot(a, b, out=None)
```

**Parameters:**

- `a`: The first array, which could be 1D, 2D, or higher dimensional.
- `b`: The second array, having compatible dimensions with `a`, and also could be 1D, 2D, or higher dimensional.
- `out` (Optional): An array for storing the result. If not provided, a new array is created.

**Return value:**

- If both inputs are scalars: Returns their product.
- If both are 1D arrays: Returns their dot product (a scalar).
- If both are 2D arrays: Returns their matrix product.

## Example 1: Product of Two Scalars

This example uses the `.dot()` method to calculate the product of two scalars:

```py
import numpy as np

# Define two scalars
num1 = 3
num2 = 5

# Compute the product of the scalars
res = np.dot(num1, num2)

# Print the result
print(res)
```

The output for the example will be:

```shell
15
```

## Example 2: Dot Product of Two Arrays

This example uses the `.dot()` method to calculate the dot product of two arrays:

```py
import numpy as np

# Define two arrays
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]

# Compute the dot product of the arrays
res = np.dot(arr1, arr2)

# Print the result
print(res)
```

The output for the example will be:

```shell
32
```

## Codebyte Example: Matrix Product of Two Arrays

This codebyte example uses the `.dot()` method to calculate the matrix product of two arrays:

```codebyte/python
import numpy as np

# Define two arrays
arr1 = [[1, 2], [3, 4]]
arr2 = [[5, 6], [7, 8]]

# Compute the matrix product of the arrays
res = np.dot(arr1, arr2)

# Print the result
print(res)
```

The output for the example will be:

```shell
[[19 22]
 [43 50]]
```

## Frequently Asked Questions

### 1. What's the difference between `np.dot()` and `np.matmul()`?

`np.dot()` and `np.matmul()` behave similarly for 2D arrays. However, `np.matmul()` is preferred for matrix multiplication in higher dimensions (3D and above), as it strictly follows matrix multiplication rules, whereas `np.dot()` may flatten or broadcast inputs differently.

### 2. What happens if the input shapes are incompatible?

If the shapes of the inputs don’t align according to dot product rules (i.e., the number of columns in `a` must match with the number of rows in `b` for performing matrix multiplication), NumPy will raise a `ValueError` indicating that the shapes are not aligned.

### 3. Is `np.dot()` efficient for large-scale operations?

Yes, `np.dot()` is optimized and internally uses BLAS (Basic Linear Algebra Subprograms) libraries for high performance, especially on large arrays or matrices.
