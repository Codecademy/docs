---
Title: '.astype()'
Description: 'Converts a NumPy ndarray to a specified data type.'
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

The **`.astype()`** function in NumPy allows changing the data type of elements in an array. This is useful for ensuring data is in the correct format, such as converting floating-point numbers to integers or changing integers to strings.

## Syntax

```py
ndarray.astype(dtype, order='K', casting='unsafe', subok=True, copy=True)
```

## Parameters

- **dtype**: The new data type for the array elements (e.g., **int**, **float**, **str**).
- **order**: Specifies the memory layout order:
  - **`'C'`** for row-major (C-style) order.
  - **`'F'`** for column-major (Fortran-style) order.
  - **`'A'`** (default) or 'K' to keep the current order.
- **casting**: Controls allowed data conversions:
  - **'no'** to prevent any conversion.
  - **'equiv'** to allow only byte-order changes.
  - **'safe'** to ensure no data loss during conversion.
  - **'same_kind'** to allow safe conversions within similar types.
  - **'unsafe'** (default) to allow any conversion, even if data might be lost.
- **subok**: If **`True`** (default), subclasses of the array will be preserved. If **`False`**, the result will always be a base-class array.
- **copy**: If **`True`** (default), always makes a new copy of the array. If **`False`**, reuses the input array if possible.
**Returns**
A new array with the specified data type.

## Examples

1. **Convert Float Array to Integer Array**

   ```py
   import numpy as np

   arr = np.array([1.2, 3.4, 5.6])
   arr_int = arr.astype(int)
   print(arr_int)
   ```

   Output:

   ```py
   [1 3 5]
   ```

2. **Convert Array to String Array**

   ```py
   arr = np.array([1, 2, 3])
   arr_str = arr.astype(str)
   print(arr_str)
   ```

   Output:

   ```py
   ['1' '2' '3']
   ```


