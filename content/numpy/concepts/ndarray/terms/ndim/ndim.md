---
Title: 'ndim'
Description: 'Returns the number of dimensions (axes) of a NumPy array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Attributes'
  - 'Shape'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`ndim`** attribute returns the number of dimensions (axes) of a [NumPy array](https://www.codecademy.com/resources/docs/numpy/ndarray). A 1D array acts like a list, a 2D array forms a matrix, and higher dimensions represent tensors which are common in data science and machine learning.

## Syntax

```pseudo
ndarray.ndim
```

**Parameters:**

The `.ndim` attribute takes no parameters.

**Return value:**

Returns an integer representing the number of array dimensions (axes).

## Example: Checking Dimensions of Different Arrays

This example demonstrates how `ndim` behaves for 0D (scalar), 1D (list), and 2D (matrix) arrays:

```py
import numpy as np

# 0D array (scalar)
arr_0d = np.array(50)
print("0D array:", arr_0d, "| Dimensions:", arr_0d.ndim)

# 1D array (list)
arr_1d = np.array([1, 2, 3, 4, 5])
print("1D array:", arr_1d, "| Dimensions:", arr_1d.ndim)

# 2D array (matrix)
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print("2D array:\n", arr_2d, "\nDimensions:", arr_2d.ndim)
```

The output of this code is:

```shell
0D array: 50 | Dimensions: 0
1D array: [1 2 3 4 5] | Dimensions: 1
2D array:
 [[1 2 3]
 [4 5 6]]
Dimensions: 2
```

## Codebyte Example: Using `ndim` in a NumPy Operation

In this example, `ndim` is used to identify the number of dimensions in different types of image data like grayscale (2D) and color (3D):

```codebyte/python
import numpy as np

arr_a = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

# Print the array and its number of dimensions
print(f"array: {arr_a}, number of dimensions: {arr_a.ndim}")
```
