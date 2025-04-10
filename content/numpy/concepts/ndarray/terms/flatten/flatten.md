---
Title: '.flatten()'
Description: 'Returns a copy of an array collapsed into one dimension.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Data Structures'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.flatten()`** method converts a multi-dimensional NumPy array into a one-dimensional array. This method creates a copy of the original array with all elements arranged in a single dimension while preserving the values and their order. The flattening process essentially "unrolls" the array, maintaining the elements in a sequential arrangement based on the specified order parameter.

The `.flatten()` method is commonly used in data preparation for machine learning algorithms, simplifying matrix operations, and restructuring data for visualization. It's particularly useful when transforming complex multi-dimensional data structures into a linear format for analysis or when preparing inputs for algorithms that require one-dimensional arrays.

## Syntax

```pseudo
ndarray.flatten(order='C')
```

**Parameters:**

- `order` (Optional): Specifies the order in which the elements of the multi-dimensional array are read during flattening. Possible values include:
  - `'C'`: Row-major (C-style) order. Elements are read in row-by-row (default)
  - `'F'`: Column-major (Fortran-style) order. Elements are read in column-by-column
  - `'A'`: Uses Fortran-style order if the array is Fortran contiguous in memory, otherwise uses C-style order
  - `'K'`: Elements are read in the order they occur in memory

**Return value:**

Returns a new one-dimensional ndarray containing a copy of the flattened elements of the original array.

## Example 1: Converting two-dimensional array into a one-dimensional array

This example demonstrates how to convert a basic two-dimensional array into a one-dimensional array with `.flatten()`:

```py
import numpy as np

# Create a 2D array
array_2d = np.array([[1, 2], [3, 4], [5, 6]])
print("Original array:")
print(array_2d)
print("Shape:", array_2d.shape)

# Flatten the array
flattened_array = array_2d.flatten()
print("\nFlattened array:")
print(flattened_array)
print("Shape:", flattened_array.shape)
```

The output produced by this code is:

```shell
Original array:
[[1 2]
 [3 4]
 [5 6]]
Shape: (3, 2)

Flattened array:
[1 2 3 4 5 6]
Shape: (6,)
```

This code creates a _3×2_ two-dimensional array and flattens it to a one-dimensional array with six elements. The `.flatten()` method preserves the order of elements, reading them row by row(C-style order by default).

## Example 2: Flattening with Different Order Parameters

This example shows how the `order` parameter affects the arrangement of elements in the flattened array, which can be important when working with multi-dimensional data that needs to be processed in a specific order:

```py
import numpy as np

# Create a 2D array
array_2d = np.array([[1, 2, 3], [4, 5, 6]])
print("Original array:")
print(array_2d)

# Flatten with different order parameters
c_style = array_2d.flatten(order='C')
f_style = array_2d.flatten(order='F')
k_style = array_2d.flatten(order='K')

print("\nC-style (row-major) flattening:")
print(c_style)

print("\nF-style (column-major) flattening:")
print(f_style)

print("\nK-style (memory order) flattening:")
print(k_style)
```

The code generates the following output:

```shell
Original array:
[[1 2 3]
 [4 5 6]]

C-style (row-major) flattening:
[1 2 3 4 5 6]

F-style (column-major) flattening:
[1 4 2 5 3 6]

K-style (memory order) flattening:
[1 2 3 4 5 6]
```

This example illustrates how different order parameters affect the sequence of elements in the flattened array. C-style reads row-by-row, while F-style reads column-by-column, producing different results from the same original array.

## Codebyte Example: Processing Image Data with Flatten

This example demonstrates a common real-world application of `.flatten()` when processing image data for machine learning:

```codebyte/python
import numpy as np
import matplotlib.pyplot as plt

# Create a simple 4x4 grayscale "image"
image = np.array([
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 100, 110, 120],
    [130, 140, 150, 160]
])

print("Original image (2D array):")
print(image)

# Flatten the image to prepare for ML model input
flattened_image = image.flatten()
print("\nFlattened image (1D array):")
print(flattened_image)

# Reshape back to original dimensions
reshaped_image = flattened_image.reshape(image.shape)
print("\nReshaped back to original:")
print(reshaped_image)

# Verify that the original and reshaped images are identical
print("\nOriginal and reshaped images are identical:",
      np.array_equal(image, reshaped_image))
```

This example shows how image data (represented as a 2D array) can be flattened for processing and then reshaped back to its original dimensions. This pattern is common in image processing and machine learning workflows where algorithms may require 1D input vectors.

## Frequently Asked Questions

<details>
<summary>1. What's the difference between `.flatten()` and `.ravel()`?</summary>
<p>The main difference is that `.flatten()` always returns a copy of the array, while `.ravel()` returns a view of the original array when possible (which is more memory-efficient). If modifications to the flattened array should not affect the original, use `.flatten()`.</p>
</details>

<details>
<summary>2. How does `.flatten()` handle arrays with more than two dimensions?</summary>
<p>`.flatten()` works the same way regardless of the number of dimensions. It converts an array of any dimensionality into a single one-dimensional array, preserving the elements according to the specified order.</p>
</details>

<details>
<summary>3. Can I specify the data type of the flattened array?</summary>
<p>`.flatten()` preserves the data type of the original array. To change the data type, you can use the [`.astype()`](https://www.codecademy.com/resources/docs/numpy/ndarray/astype) method on the flattened result, for example: `array.flatten().astype(np.float64)`.</p>
</details>

<details>
<summary>4. Does `.flatten()` work with masked arrays?</summary>
<p>Yes, for masked arrays (from `numpy.ma`), `.flatten()` preserves the mask in the flattened array, so the masked elements remain masked in the result.</p>
</details>

<details>
<summary>5. How does `.flatten()` affect performance in numerical computations?</summary>
<p>Since `.flatten()` creates a copy, it has memory and computational overhead. For large arrays or performance-critical code, consider if alternatives like `.ravel()` (which returns a view when possible) or direct operations on the multi-dimensional array would be more efficient.</p>
</details>
