---
Title: '.ravel()'
Description: 'Returns a contiguous flattened array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.ravel()`** method returns a contiguous flattened array. It is used to convert a multi-dimensional array into a one-dimensional array. The returned array is a view of the original array whenever possible, meaning that it shares the same data buffer.

## Syntax

```pseudo
ndarray.ravel(a, order='C')
```

**Parameters:**

- `a`: The input array to be flattened.
- `order`: This parameter specifies the order in which the array elements are read. It can take the following values:
  - `'C'`: C-style row-major order (default).
  - `'F'`: Fortran-style column-major order.
  - `'A'`: 'F' if input is Fortran contiguous in memory, 'C' otherwise.
  - `'K'`: As close to the memory layout as possible.

**Return value:**

A flattened 1D array. Returns a view whenever possible, otherwise a copy.

## Example 1

In this example, a 2D array is flattened into a 1D array using `.ravel()`. The elements are listed in row-major order by default:

```py
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
flattened_arr = np.ravel(arr)
print(flattened_arr)
```

This produces the following output:

```shell
[1 2 3 4 5 6]
```

## Example 2

In this example, a 3D array is flattened into a 1D array using `.ravel()`. The elements are listed in row-major order by default:

```py
import numpy as np

three_d_array = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
flattened_array = np.ravel(three_d_array)
print(flattened_array)
```

This produces the following output:

```shell
[1 2 3 4 5 6 7 8]
```

## Codebyte Example

Run the following codebyte example to understand the usage of the `ravel()` method:

```codebyte/python
import numpy as np

arr = np.array([[1, 2], [3, 4], [5, 6]])
flattened_arr = np.ravel(arr)

print(flattened_arr)
```
