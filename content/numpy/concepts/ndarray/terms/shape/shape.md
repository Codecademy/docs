---
Title: 'shape'
Description: 'Returns a tuple representing the dimensions of an ndarray.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`shape`** attribute of a NumPy ndarray returns a tuple of integers indicating the size of the array in each dimension. It provides information about the structure and layout of the array.

## Syntax

```pseudo
array.shape
```

- `array`: The ndarray whose dimensions are to be retrieved.

The `shape` attribute returns a tuple where each element represents the number of elements along the corresponding dimension.

## Example

The following example demonstrates how to use the `shape` attribute to get the dimensions of different ndarrays:

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

```
(5,)
(2, 3)
(2, 2, 2)
```

## Codebyte Example

The following codebyte example shows how to use the `shape` attribute and modify array dimensions:

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

## Frequently Asked Questions

<details>
<summary>1. Can the shape of an array be modified directly?</summary>
<p>Yes, the <code>shape</code> attribute can be modified by assigning a new tuple to it, which reshapes the array in-place. However, the new shape must be compatible with the total number of elements. For example: <code>array.shape = (2, 3)</code> will reshape a 6-element array into a 2x3 matrix.</p>
</details>

<details>
<summary>2. What does it mean when a dimension in shape is 1?</summary>
<p>A dimension with size 1 indicates that the array has only one element along that axis. For example, a shape of <code>(3, 1, 4)</code> means 3 elements in the first dimension, 1 element in the second dimension, and 4 elements in the third dimension. This is often used to maintain specific dimensionality for broadcasting operations.</p>
</details>

<details>
<summary>3. How does shape relate to the size and ndim attributes?</summary>
<p>The <code>shape</code> attribute returns a tuple of dimensions, <code>ndim</code> returns the number of dimensions (length of the shape tuple), and <code>size</code> returns the total number of elements (product of all dimensions in shape). For example, an array with shape <code>(2, 3, 4)</code> has <code>ndim=3</code> and <code>size=24</code>.</p>
</details>

<details>
<summary>4. What is the difference between shape and reshape?</summary>
<p>The <code>shape</code> attribute is used to view or modify the dimensions of an existing array in-place, while <code>reshape()</code> is a method that returns a new array with a modified shape without changing the original array. Use <code>shape</code> when you want to modify the array directly, and <code>reshape()</code> when you want to preserve the original.</p>
</details>

<details>
<summary>5. Why does a 1D array shape have a comma, like (5,)?</summary>
<p>The comma in <code>(5,)</code> distinguishes a tuple with one element from a scalar value in parentheses. In Python, <code>(5)</code> is just the number 5, while <code>(5,)</code> is a tuple containing one element. This notation ensures that shape consistently returns a tuple regardless of the number of dimensions.</p>
</details>
