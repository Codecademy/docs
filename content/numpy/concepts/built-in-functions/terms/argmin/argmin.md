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

The **`.argmin()`** function in NumPy identifies the index of the smallest value in an array. When working with multi-dimensional arrays, it can also return the index position along a specified axis.

## Syntax

```pseudo
numpy.argmin(a, axis=None, out=None)
```

### Parameters

- `a`: (Required) The input array containing values to evaluate.
- `axis`: (Optional) The axis along which to find the minimum. If not provided, the array is flattened before computation.
- `out`: (Optional) An alternative array to store the result. It must be the correct shape.

### Returns

- If no axis is specified, it returns the index of the smallest value in the flattened array.
- If an axis is specified, it returns an array of indices pointing to the minimum values along that axis.

## Example

Below is an example of using `.argmin()` on a 2-dimensional array to find index positions of minimum values:

```python
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
