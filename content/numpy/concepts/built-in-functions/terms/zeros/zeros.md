---
Title: '.zeros()'
Description: 'Creates a new array filled with zeros.'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Structures'
  - 'Linear Algebra'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`.zeros()`** is a NumPy function used to create a new array of a specified shape, filled entirely with zeros. It is commonly used to initialize arrays before assigning them meaningful data.

## Syntax

```pseudo
numpy.zeros(shape, dtype=float, order='C')
```

**Parameters:**

- `shape`: An integer or tuple of integers indicating the dimensions of the array. For example, `(3, 2)` creates a 2D array with 3 rows and 2 columns.
- `dtype`: The desired data type for the array elements (default is `float`).
- `order`: Whether to store the array in row-major (`'C'`, default) or column-major (`'F'`) order.

## Example

This example creates a 1D array of five zeros and a 2D array of zeros with shape `(3, 2)` and integer data type using NumPy's `.zeros()` function:

```py
import numpy as np

array1 = np.zeros(5)
print(array1)

array2 = np.zeros((3, 2), dtype=int)
print(array2)
```

The output of this code will be:

```shell
[0. 0. 0. 0. 0.]
[[0 0]
 [0 0]
 [0 0]]
```

## Codebyte Example: Initializing a Sensor Readings Matrix

In this example, we use `.zeros()` to initialize a 2D array to store temperature sensor readings for 7 days across 3 different locations:

```codebyte/python
import numpy as np

# Initialize a 7x3 matrix for daily temperature readings across 3 locations
# Rows: Days (1 to 7), Columns: Location 1, 2, and 3
temperature_readings = np.zeros((7, 3))

print("Initial temperature matrix:")
print(temperature_readings)
```

Here, `.zeros()` prepares a placeholder matrix to store daily sensor readings, which will be updated later as data is collected.
