---
Title: '.take()'
Description: 'Returns elements from an array at specific indices.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`take()`** method returns elements from an array at specific indices. It’s similar to regular indexing, but works across flattened or specified axes, and supports advanced indexing use cases.

## Syntax

```pseudo
ndarray.take(indices, axis=None, out=None, mode='raise')
```

**Parameters:**

- `indices`: The 0-based indices of elements to extract
- `axis` (Optional): Specifies the axis to take the elements. If not specified, the operation is done over a flattened array
- `out` (Optional): An optional output array to store the selected elements. The shape and buffer length must match the expected output, but the type will be cast if necessary.
- `mode` (Optional): Specifies how out-of-bounds indices are handled
  - `raise`: raises an error (default)
  - `wrap`: wraps around
  - `clip`: clips to the valid range

**Return value:**

Returns an array containing the selected elements, or a reference to `out` if specified.

## Example

This example demonstrates the use of `ndarray.take()`:

```py
import numpy as np

arr = np.array([10, 20, 30, 40, 50])
result = arr.take([0, 3, 4])
print(result)
```

The output of this code is:

```shell
[10 40 50]
```

> > **Note:** The `take()` method can only extract elements along a single axis, it cannot directly select combinations of indices across multiple dimensions. For example:

```py
import numpy as np

arr = np.array([[10, 20, 30],
                [40, 50, 60],
                [70, 80, 90]])

# This won't work: cannot take (0,0) and (1,1) in one call
arr.take([(0, 0), (1, 1)]) # Invalid
```

The above will return an error.

## Codebyte Example

In this example, `ndarray.take()` is used on a 2D array:

```codebyte/python
import numpy as np

#Create a 2D NumPy array
arr = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
print("Original array:")
print(arr)

#Take elements along the first axis (rows)
row_elements = arr.take([0, 2], axis = 0)
print("\nElements from rows 0 and 2:")
print(row_elements)

# Take elements along the second axis (columns)
col_elements = arr.take([1,2], axis = 1)
print("\nElements from columns 1 and 2:")
print(col_elements)

#Take with wrap mode (handles out-of-bounds index)
wrapped = arr.take([3, -1], mode = 'wrap')
print("\nUsing 'wrap' mode with out-of-range indices:")
print(wrapped)
```
