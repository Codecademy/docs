---
Title: '.swapaxes()'
Description: 'Returns a view of the array with two axes interchanged.'
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

NumPy's **`.swapaxes()`** method returns a view of the array with the specified axes interchanged, without copying data. It’s useful for reorienting multi-dimensional arrays for analysis, transformation, or visualization.

## Syntax

```pseudo
ndarray.swapaxes(axis1, axis2)
```

**Parameters:**

- `axis1`: An `int` representing the first axis to be swapped.
- `axis2`: An `int` representing the second axis to be swapped.

**Return value:**

Returns an `ndarray` view of the original array with `axis1` and `axis2` interchanged. The shape of the returned array is the same as the original, but with the specified axes swapped.

## Example

This example creates a 2D array and then swaps its axes using `.swapaxes()`:

```py
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
swapped_arr = arr.swapaxes(0, 1)
print(swapped_arr)
```

Here is the output:

```shell
[[1 4]
 [2 5]
 [3 6]]
```

## Codebyte Example

This codebyte example demonstrates the use of `.swapaxes()` on a 3D array:

```codebyte/python
import numpy as np

arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
swapped_arr = arr.swapaxes(0, 2)
print(swapped_arr)
```
