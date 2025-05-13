---
Title: '.ravel()'
Description: 'Returns a contiguous flattened array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `ravel ()` method returns a contiguous flattened array. It is used to convert a multi-dimensional array into a one-dimensional array. The returned array is a view of the original array whenever possible, meaning that it shares the same data buffer.

## Syntax

```pseudo
ndarray.ravel(order='C')
```

- `order`: This parameter specifies the order in which the array elements are read. It can take the following values:
  - `'C'`: C-style row-major order (default).
  - `'F'`: Fortran-style column-major order.
  - `'A'`: Fortran order if the array is Fortran contiguous, C order otherwise.
  - `'K'`: Preserve the original order of the array.
- `ndarray`: The array to be flattened.

## Example

```py
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
flattened_arr = arr.ravel()
print(flattened_arr)
```

This produces the following output:

```shell
[1 2 3 4 5 6]
```

## Codebyte Example

Run the following codebyte example to understand the usage of the `ravel()` method:

```codebyte/python
import numpy as np

arr = np.array([[1, 2], [3, 4], [5, 6]])
flattened_arr = arr.ravel()

print(flattened_arr)
```
