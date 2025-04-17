---
Title: '.argmin()'
Description: 'Finds the index of the minimum value in a NumPy array, either across the entire array or along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.argmin()`** function in NumPy is used to find the index of the smallest value in a NumPy array. It works on both 1D and multi-dimensional arrays, and when an axis is specified, it returns the index of the minimum value along that axis. 

This function is commonly used in data analysis and numerical computations to quickly locate the position of the lowest value in an array.

## Syntax

```pseudo
numpy.argmin(a, axis=None, out=None, keepdims=<no value>)
```

### Parameters

- `a`: The input array containing values to evaluate.
- `axis` (Optional): The axis along which to find the index of the minimum value. If not specified, the array is flattened and the index of the global minimum is returned.
- `out` (Optional): An alternative array to store the result. It must have the appropriate shape and data type.

### Returns

- If no axis is specified, it returns the index of the smallest value in the flattened array.
- If an axis is specified, it returns an array of indices pointing to the minimum values along that axis.

## Example

Below is an example of using `.argmin()` on a 2-dimensional array to find index positions of minimum values:

```py
import numpy as np

arr = np.array([[6, 3, 8],
                [5, 2, 9]])

print(np.argmin(arr))             # Minimum in flattened array
print(np.argmin(arr, axis=0))     # Minimum indices along columns
print(np.argmin(arr, axis=1))     # Minimum indices along rows
```

**Output:**
```shell
4
[1 1 0]
[1 1]
```

## Codebyte Example

In this Codebyte, we generate a 2D array with random integers and use `.argmin()` in different contexts:

```codebyte/python
import numpy as np

data = np.random.randint(1, 20, size=(3, 4))

print("Random 2D array:")
print(data)

print("Index of minimum value (flattened):")
print(np.argmin(data))

print("Minimum indices along columns (axis=0):")
print(np.argmin(data, axis=0))

print("Minimum indices along rows (axis=1):")
print(np.argmin(data, axis=1))
```
