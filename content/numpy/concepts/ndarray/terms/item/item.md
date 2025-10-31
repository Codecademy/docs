---
Title: '.item()'
Description: 'Copies an element of a NumPy ndarray to a standard Python scalar and returns it.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.item()`** method in Numpy copies an element of a NumPy array ([`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray)) to a standard Python scalar (like `int`, `float`, `bool`) and returns it. The `.item()` method is handy for extracting a single value from an array, especially a 0-dimensional (scalar) array, into a native Python type.

## Syntax

```pseudo
element = array.item(*args)
```

**Parameters:**

- `array` is an instance of `ndarray`.
- `*args` : `int`, optional
  - If no arguments are provided, the array must have only one element (i.e., `array.size == 1`), and that single element is returned.
  - If a single integer is provided, it is interpreted as a flat index into the array (like indexing `array.ravel()[i]`).
  - If a tuple of integers is provided, it is interpreted as a multi-dimensional index (e.g., `arr.item((0, 1))` for a 2D array).

**Return Value:**

Returns a standard Python scalar (e.g., `int`, `float`, `bool`) corresponding to the selected element.

## Example: Retrieving elements using `item()`

The following example shows how to extract elements using `item()`:

```py
import numpy as np

# 1D array
arr_1d = np.array([10, 20, 30])
element_1d = arr_1d.item(1) # Get element at index 1
print(f"Element from 1D array: {element_1d}, Type: {type(element_1d)}")

# 2D array
arr_2d = np.array([[1, 2], [3, 4]])
element_2d = arr_2d.item(0, 1) # Get element at row 0, column 1
print(f"Element from 2D array: {element_2d}, Type: {type(element_2d)}")

# 0D (scalar) array
arr_0d = np.array(99)
scalar_val = arr_0d.item() # No index needed for 0D array
print(f"Value from 0D array: {scalar_val}, Type: {type(scalar_val)}")
```

Output of the above example:

```shell
Element from 1D array: 20, Type: <class 'int'>
Element from 2D array: 2, Type: <class 'int'>
Value from 0D array: 99, Type: <class 'int'>
```

## Codebyte Example

This example demonstrates the working of `item()`. It retrieves elements from different-shaped arrays using `item()`:

```codebyte/python
import numpy as np

# Create a 2D array
my_array = np.array([[5.5, 6.6], [7.7, 8.8]])
print(f"Original 2D array:\n{my_array}\n")

# Get element at (1, 0)
item_val = my_array.item(1, 0)
print(f"Value at index (1, 0): {item_val}")
print(f"Type of returned value: {type(item_val)}\n")
# Python Float datatype

# Create a 0D array
scalar_array = np.array(True)
print(f"Original 0D array: {scalar_array}")

# Get the scalar value
bool_val = scalar_array.item()
print(f"Value from 0D array: {bool_val}")
print(f"Type of returned value: {type(bool_val)}")
```
