---
Title: '.astype()'
Description: 'Converts a NumPy array to a specified data type.'
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

The **`.astype()`** function in NumPy allows changing the data type of the elements in an array. It is beneficial for tasks such as converting floating-point numbers to integers or changing integers to strings, ensuring that the data is in the desired format.

## Syntax

```psuedo
ndarray.astype(dtype, order='K', casting='unsafe', subok=True, copy=True)
```

- `dtype`: The desired data type for the array elements.
- `order`: Specifies the memory layout order. It can take the following values:
  - `C`: C-style (row-major) order.
  - `F`: Fortran-style (column-major) order.
  - `A`: When specified, NumPy prioritizes Fortran-style order (`F`) if all arrays are Fortran-contiguous. Otherwise, it defaults to an order of `C`.
  - `K`: This is the default value. It keeps the order of the input array.
- `casting`: Specifies how casting should be handled if the desired data type is different from the current data type. It can take the following values:
  - `no`: The data type will not be cast.
  - `equiv`: Allows only byte-order changes.
  - `safe`: Prevents data loss during conversion.
  - `same_kind`: Allow safe conversions within similar types.
  - `unsafe`: This is the default value. It allows any conversion, even if data loss happens.
- `subok`: If `True` (default), subclasses of the array will be preserved. If `False`, the result will always be a base-class array.
- `copy`: If `True` (default), a copy of the array is made. If `False`, the input array is reused if possible.

## Example

The following example shows the use of the `.astype()` function to convert the elements of an array from floating-point data type to integer data type:

```py
import numpy as np

arr = np.array([1.2, 3.4, 5.6])

arr_int = arr.astype(int)

print(arr_int)
```

The code above generates the following output:

```shell
[1 3 5]
```

## Codebyte Example

The following codebyte example demonstrates the use of the `.astype()` function:

```codebyte/python
import numpy as np

arr = np.array([1, 2, 3])

arr_str = arr.astype(str)

print(arr_str)
```
