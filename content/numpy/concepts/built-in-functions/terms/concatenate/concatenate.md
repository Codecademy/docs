---
Title: '.concatenate()'
Description: 'Joins a sequence of arrays along an existing axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

NumPy's **`.concatenate()`** function joins a sequence of arrays along an existing axis. This method provides a powerful way to combine multiple arrays into a single array without changing their content or structure. It is commonly used in data preprocessing, feature engineering, and when working with multi-dimensional data structures in scientific computing and data analysis.

When processing data with NumPy, merging different arrays, such as combining data from multiple sources, appending new observations to existing datasets, or constructing complex arrays from simpler components is often necessary. The `.concatenate()` function offers a flexible approach to these tasks by allowing precise control over how arrays are joined along a specified dimension.

## Syntax

```pseudo
numpy.concatenate((a1, a2, ...), axis=0, out=None, dtype=None, casting="same_kind")
```

**Parameters:**

- `a1, a2, ...` (sequence of array_like objects): The arrays must have the same shape, except in the dimension corresponding to the specified axis.
- `axis` (int, optional): The axis along which the arrays will be joined. If axis is None, arrays are flattened before use. Default is `0`.
- `out` (ndarray, optional): If provided, this is the destination to place the result. The shape must be correct, matching what concatenate would have returned.
- `dtype` (str or dtype, optional): The destination array will have this dtype if provided. Cannot be used together with out parameter.
- `casting` ({'no', 'equiv', 'safe', 'same_kind', 'unsafe'}, optional): Controls what kind of data casting may occur. Default is `'same_kind'`.

**Return value:**

Returns an [ndarray](https://www.codecademy.com/resources/docs/numpy/ndarray) which is the concatenated result of the input arrays.

## Example 1: Basic Array Concatenation

This example demonstrates how to concatenate two 1D arrays along the default axis (axis=0):

```py
# Import the NumPy library
import numpy as np

# Create two 1D arrays
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Concatenate the arrays along the default axis (axis=0)
result = np.concatenate((arr1, arr2))

# Display the result
print("Array 1:", arr1)
print("Array 2:", arr2)
print("Concatenated array:", result)
```

The output produced by this code will be:

```shell
Array 1: [1 2 3]
Array 2: [4 5 6]
Concatenated array: [1 2 3 4 5 6]
```

The `.concatenate()` function combines the two arrays end-to-end, creating a new array that contains all elements from both input arrays in sequence.

## Example 2: Concatenating 2D Arrays Along Different Axes

This example shows how to join 2D arrays along different axes, which is useful when working with tabular data in data science applications:

```py
# Import the NumPy library
import numpy as np

# Create two 2D arrays (representing data tables)
# Each row could represent a data record, and each column a feature
data1 = np.array([[1, 2, 3],
                  [4, 5, 6]])  # 2x3 array - 2 rows, 3 columns

data2 = np.array([[7, 8, 9],
                  [10, 11, 12]])  # 2x3 array - 2 rows, 3 columns

# Concatenate along axis 0 (row-wise, adding more rows)
rows_combined = np.concatenate((data1, data2), axis=0)

# Create two arrays with compatible shapes for column-wise concatenation
data3 = np.array([[101, 102],
                  [103, 104]])  # 2x2 array

data4 = np.array([[105],
                  [106]])  # 2x1 array

# Concatenate along axis 1 (column-wise, adding more columns)
cols_combined = np.concatenate((data3, data4), axis=1)

# Display the results
print("Original arrays:")
print("Data1:\n", data1)
print("Data2:\n", data2)
print("\nRow-wise concatenation (axis=0):\n", rows_combined)

print("\nArrays for column concatenation:")
print("Data3:\n", data3)
print("Data4:\n", data4)
print("\nColumn-wise concatenation (axis=1):\n", cols_combined)
```

The output of this code will look like:

```shell
Original arrays:
Data1:
 [[1 2 3]
 [4 5 6]]
Data2:
 [[ 7  8  9]
 [10 11 12]]

Row-wise concatenation (axis=0):
 [[ 1  2  3]
 [ 4  5  6]
 [ 7  8  9]
 [10 11 12]]

Arrays for column concatenation:
Data3:
 [[101 102]
 [103 104]]
Data4:
 [[105]
 [106]]

Column-wise concatenation (axis=1):
 [[101 102 105]
 [103 104 106]]
```

This example demonstrates how axis selection affects the concatenation result. When `axis=0`, arrays are stacked vertically (adding rows), while `axis=1` stacks them horizontally (adding columns).

## Codebyte Example: Working with Image Data

This example demonstrates how `.concatenate()` can be used for handling image data, a common task in computer vision and image processing:

```codebyte/python
# Import the NumPy library
import numpy as np
import matplotlib.pyplot as plt

# Create simple 2D arrays to represent grayscale image patches
# In real applications, these could be parts of an actual image
top_left = np.ones((50, 50)) * 0.2      # Dark gray
top_right = np.ones((50, 50)) * 0.5     # Medium gray
bottom_left = np.ones((50, 50)) * 0.8   # Light gray
bottom_right = np.ones((50, 50))        # White

# First, concatenate the top and bottom halves separately
top_half = np.concatenate((top_left, top_right), axis=1)  # Join left-to-right
bottom_half = np.concatenate((bottom_left, bottom_right), axis=1)  # Join left-to-right

# Then concatenate the top and bottom halves to form the complete image
full_image = np.concatenate((top_half, bottom_half), axis=0)  # Join top-to-bottom

# For demonstration, also show the structure of the array
print("Shape of the full image array:", full_image.shape)
print("Min value:", full_image.min(), "Max value:", full_image.max())
```

This example illustrates how `.concatenate()` can be used to build composite images from smaller image patches by joining arrays both horizontally and vertically. In image processing, this technique is useful for creating image mosaics, combining different regions of interest, or assembling processed parts of an image.

## Frequently Asked Questions

### 1. How to append 2 numpy arrays?

To append one NumPy array to another, use the `.concatenate()` function with the arrays in a sequence:

```py
import numpy as np

# Create two arrays
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# Append arr2 to arr1
result = np.concatenate((arr1, arr2))
print(result)
```

The output produced by this code will be:

```shell
[1 2 3 4 5 6]
```

### 2. What is the difference between `np.concatenate()` and `np.stack()`?

`np.concatenate()` joins arrays along an existing axis, while `np.stack()` adds a new axis (e.g., stacking rows into a 2D array).

```py
import numpy as np

# Concatenate combines arrays along an existing axis.
a = np.array([1, 2])
b = np.array([3, 4])
concatenated = np.concatenate((a, b))
print("Concatenated array:", concatenated)

# Stack adds a new dimension.
stacked = np.stack((a, b))
print("Stacked array:\n", stacked)
```

The output produced by this code will be:

```shell
Concatenated array: [1 2 3 4]
Stacked array:
 [[1 2]
 [3 4]]
```

### 3. Can I concatenate arrays of different shapes?

Only if the arrays have the same shape in all dimensions except the one you're concatenating along. Otherwise, a `ValueError` is raised.

### 4. How do I concatenate arrays horizontally or vertically?

Use `axis=0` to concatenate vertically (add rows) and `axis=1` to concatenate horizontally (add columns), assuming the shapes match accordingly.

```py
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

# Vertical (row-wise)
np.concatenate((a, b), axis=0)

# Horizontal (column-wise)
np.concatenate((a, b), axis=1)
```

### 5. How do I append a single row or column to an array?

Use `np.concatenate()` with reshaped arrays:

```py
a = np.array([[1, 2], [3, 4]])
new_row = np.array([[5, 6]])
np.concatenate((a, new_row), axis=0)  # Append row
```
