---
Title: '.shape'
Description: 'Returns a tuple representing the dimensions of an ndarray.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'NumPy'
  - 'Tuples'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.shape`** attribute of a NumPy `ndarray` returns a [tuple](https://www.codecademy.com/resources/docs/python/tuples) of integers specifying the size of the array in each dimension. It provides information about the structure and layout of the array.

## Syntax

```pseudo
ndarray.shape
```

**Parameters:**

This attribute does not take any parameters.

**Return value:**

Returns a tuple of integers representing the size of the array along each dimension.

- For a 1D array, it returns a single value (e.g., `(5,)`).
- For a 2D array, it returns two values i.e. rows and columns (e.g., `(3, 4)`).
- For higher dimensions, it includes one integer per axis.

## Example

The following example demonstrates how to use the `.shape` attribute to get the dimensions of different ndarrays:

```py
import numpy as np

# 1D array
arr_1d = np.array([1, 2, 3, 4, 5])
print(arr_1d.shape)

# 2D array
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr_2d.shape)

# 3D array
arr_3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr_3d.shape)
```

The output for the above code will be:

```shell
(5,)
(2, 3)
(2, 2, 2)
```

## Codebyte Example

The following codebyte example shows how to use the `.shape` attribute and modify array dimensions:

```codebyte/python
import numpy as np

# Create a 1D array
original_array = np.array([1, 2, 3, 4, 5, 6])
print("Original shape:", original_array.shape)

# Reshape to 2D array
reshaped_array = original_array.reshape(2, 3)
print("Reshaped to 2D:", reshaped_array.shape)
print(reshaped_array)

# Reshape to 3D array
reshaped_3d = original_array.reshape(2, 3, 1)
print("Reshaped to 3D:", reshaped_3d.shape)
```
