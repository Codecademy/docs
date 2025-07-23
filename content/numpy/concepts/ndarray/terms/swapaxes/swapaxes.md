
Title: 'numpy.swapaxes()'
Description: 'Interchange two axess of a Numpy Array'
Subjects:
  - 'Python'
  - 'Numpy'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'NumPy'
  - 'Swapaxes'
  - 'Arrays'
  - 'Multidimensional'
  - 'Axis'
  - 'Reshape'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`numpy.swapaxes()`** method is used to interchange two axes of an array. It returns a view of the original array with the specified axes swapped. This is especially useful when working with multi-dimensional arrays and needing to reorganize the data orientation without copying it.

## Syntax

```
numpy.swapaxes(array, axis1, axis2)
```

- `array(ndarray)`: The input Numpy array.
- `axis1 (int)`: The first axis to swap.
- `axis1 (int)`: The second axis to swap.

## Example

This example demonstrates how to use **`numpy.swapaxes()`** to interchange two axes in a 3-dimensional array, showing how the shape changes and how to access elements before and after swapping.

```py
# Import NumPy
import numpy as np

# Create a NumPy array
a = np.array([
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
])

# Shape of a: (2, 2, 2)
# Swap axis 0 and 2
b = np.swapaxes(a, 0, 2)

print("Original shape:", a.shape)
print("Swapped shape:", b.shape)
```

We will get the following result:

```
Original shape: (2, 2, 2)
Swapped shape: (2, 2, 2)
```

## Codebyte Example

This Codebyte creates a 3D NumPy array, swaps axes 0 and 2 using swapaxes(), and prints the original and new shapes along with a value check to verify the axes were correctly swapped.

```codebyte/python
import numpy as np

# Create a 3D array of shape (2, 3, 4)
a = np.arange(24).reshape(2, 3, 4)

# Swap axis 0 and 2 → shape becomes (4, 3, 2)
b = np.swapaxes(a, 0, 2)

print("Original shape:", a.shape)
print("Swapped shape :", b.shape)

# Access an element to verify
print("Original a[0, 1, 2]:", a[0, 1, 2])
print("After swapaxes, b[2, 1, 0]:", b[2, 1, 0])

```

Expected Output
Original shape: (2, 3, 4)
Swapped shape : (4, 3, 2)
Original a[0, 1, 2]: 6
After swapaxes, b[2, 1, 0]: 6

