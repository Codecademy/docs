---
Title: '.ndim'
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

The **`.ndim`** attribute returns the number of dimensions (axes) of a [NumPy array](https://www.codecademy.com/resources/docs/numpy/ndarray). A 1D array is a list, a 2D array is a matrix, and higher dimensions represent nested structures like tensors, often used in data science and machine learning.

## Syntax

```pseudo
ndarray.ndim
```

**Parameters:**

The `.ndim` attribute takes no parameters.

**Return value:**

Returns an integer representing the number of array dimensions (axes).

## Example 1: Creating a 0 dimensional array

In this example, a 0-dimensional (scalar) array is created. The `.ndim` attribute returns 0:

```py
import numpy as np

arr = np.array(50)
print(arr.ndim)
```

The output of this code is:

```shell
0
```

## Example 2: Creating a 1 dimensional array

In this example, a 1-dimensional array is created. The `.ndim` attribute returns 1:

```py
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr.ndim)
```

The output of this code is:

```shell
1
```

## Example 3: Creating a 2 dimensional array

In this example, a 2-dimensional array (matrix) is created. The `.ndim` attribute returns 2:

```py
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.ndim)
```

The output of this code is:

```shell
2
```
## Codebyte Example: Using `.ndim` in a NumPy Operation

In this example, `.ndim` returns the total number of dimensions in a NumPy array:

```codebyte/python
import numpy as np  

arr_a = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

# Print the array and its number of dimensions
print(f"array: {arr_a}, number of dimensions: {arr_a.ndim}")



