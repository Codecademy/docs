---
Title: '.astype()'
Description: 'Converts a NumPy ndarray to a specified data type.'
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

The **`.astype()`** function in NumPy allows changing the data type of elements in an array. It is beneficial for tasks such as converting floating-point numbers to integers or changing integers to strings, ensuring data is in the desired format.

## Syntax

```psuedo
ndarray.astype(dtype, order='K', casting='unsafe', subok=True, copy=True)
```

- `dtype`: The desired data type for the array elements.
- `order`: Specifies the memory layout order. It can take the following values:
  - `C`: C-style (row-major) order.
  - `F`: Fortran-style (column-major) order.
  - `A`: When A is specified, NumPy prioritizes Fortran (`F`) order if all arrays are Fortran contiguous; otherwise, it defaults to `C` order.
  - `K`: This is the default value, it keeps the order of the input array.
- `casting`: Specifies how casting should be handled if the desired data type is different from the current data type. It can take the following values:
  - `no`: The data type will not be cast.
  - `equiv`: To allow only byte-order changes.
  - `safe`: To ensure no data loss during conversion.
  - `same_kind`: to allow safe conversions within similar types.
  - `unsafe`: This is the default value, it allows any conversion, even if data might be lost.
- `subok`: If `True` (default), subclasses of the array will be preserved. If `False`, the result will always be a base-class array.
- `copy`: If `True` (default), a copy of the array is made. If `False`, reuse the input array if possible.

## Example

The following example shows the use of the `.astype()` function to convert the elements of an array from float data type to integer data type:

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

Run the following code to understand the use of `.astype()` function:

```codebyte/python
import numpy as np

arr = np.array([1, 2, 3])
arr_str = arr.astype(str)
print(arr_str)
```
