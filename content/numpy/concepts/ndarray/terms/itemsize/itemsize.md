---
Title: '.itemsize'
Description: 'Returns the size in bytes of each element in a NumPy array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'NumPy'
  - 'Data Structures'
  - 'Arrays'
  - 'Attributes'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.itemsize`** attribute of a NumPy [`ndarray`](https://www.codecademy.com/resources/docs/numpy/ndarray) returns the number of bytes used to represent each element in the array, determined by the array's [`dtype`](https://www.codecademy.com/resources/docs/python/types).

## Syntax

```pseudo
ndarray.itemsize
```

- Returns: An integer representing the size in bytes of a single array element.
- Notes: This is equivalent to `ndarray.dtype.itemsize` and depends solely on the array's data type, not its shape.

## Example

```py
import numpy as np

arr_int32 = np.array([1, 2, 3], dtype=np.int32)
arr_float64 = np.array([1.0, 2.0, 3.0], dtype=np.float64)
arr_int8 = np.array([1, 2, 3], dtype=np.int8)

print(arr_int32.itemsize)   # 4 bytes per element
print(arr_float64.itemsize) # 8 bytes per element
print(arr_int8.itemsize)    # 1 byte per element

# Equal to dtype.itemsize
print(arr_int32.itemsize == arr_int32.dtype.itemsize)
```

This produces output similar to:

```shell
4
8
1
True
```

## Codebyte Example

Run the following codebyte to see `.itemsize` in action with different dtypes:

```codebyte/python
import numpy as np

arr_a = np.array([10, 20, 30], dtype=np.int16)   # 2 bytes
arr_b = np.array([1.0, 2.0, 3.0], dtype=np.float32)  # 4 bytes

print(arr_a.dtype, arr_a.itemsize)
print(arr_b.dtype, arr_b.itemsize)
print(arr_a.itemsize == arr_a.dtype.itemsize)
```
