Title: '.argmax()'
Description: 'Returns the indices of the maximum values along a specified axis in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Machine Learning'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The NumPy **`.argmax()`** function returns the indices of the maximum values along a specified axis in an array.

## Syntax

```pseudo
numpy.argmax(array, axis=None, out=None, keepdims=<no value>)
```

**Parameters:**

- `array`: The input array in which to find the indices of maximum values.
- `axis` (Optional): The axis along which to find the maximum values. If `None` (default), the function works on the flattened array.
- `out` (Optional): An array to place the result in. It must match the expected output shape.
- `keepdims` (Optional): If `True`, the reduced dimensions are kept with size 1, making the output broadcast-compatible with the input.

**Return value:**

Returns an integer index for 1D arrays and a NumPy array of indices for multi-dimensional arrays, indicating the positions of the maximum values along the specified axis.

## Example

The following examples demonstrate how to use the `.argmax()` function with 1D and 2D arrays:

```py
import numpy as np

# 1D array example
scores = np.array([10, 30, 20, 50, 40])
max_index = np.argmax(scores)
print("Index of max value:", max_index) 
print("Max value:", scores[max_index])  

# Create 2D array
matrix = np.array([[1, 5, 3], 
                  [4, 2, 6]])

# Find max indices along columns (axis=0)
print("Max indices per column:", np.argmax(matrix, axis=0))  

# Find max indices along rows (axis=1)
print("Max indices per row:", np.argmax(matrix, axis=1))   
```

The code above produces the following output:

```shell
Index of max value: 3
Max value: 50
Max indices per column: [1 0 1]
Max indices per row: [1 2]
```

## Codebyte Example

Run the following code to understand the working of the `.argmax()` function:

```codebyte/python
import numpy as np

# Create a 2D array
data = np.array([[10, 20, 30], [40, 50, 60]])

# Find the index of the maximum value along axis 1 (rows)
result = np.argmax(data, axis=1)
print(result)  # Output: [2 2]
```
