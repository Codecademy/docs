---
Title: '.view()'
Description: 'Return a new view of the array (a shallow view that shares the original array\'s data buffer).'
Subjects:
  - 'Data Science'
Tags:
  - 'NumPy'
  - 'ndarray'
  - 'methods'
CatalogContent:
  - 'learn-python-3'
---

The **`.view()`** method returns a new array object that looks at the same data as the original array. The returned object is a *view* (a shallow reference) — it shares the same underlying memory buffer as the original `ndarray`. Because the two arrays share memory, modifying the contents of one will generally affect the other.

## Syntax

```python
ndarray.view([dtype=None][, type=None])
```

Parameters:

- `dtype` (optional): A data-type to force the returned view to use. If provided, the underlying data will be reinterpreted with the specified dtype — this can change how the bytes are interpreted and may change the shape required to represent the data.
- `type` (optional): If present, the returned object will be a subclass of `ndarray` (for example, `numpy.matrix`) instead of a plain `ndarray`.

Return value: A new array object (an `ndarray` or an instance of the specified `type`) that shares the same data buffer as the original unless the interpretation prevents sharing.

Important notes:

- `.view()` creates a shallow view — it does not copy array data. Use `.copy()` when you need an independent copy.
- Reinterpreting dtype with `.view(dtype=...)` does not change the bytes — it only changes how they are interpreted.

## Example

Basic example showing that the view shares data with the original array:

```python
import numpy as np

# create an array and a view
arr = np.arange(6).reshape(2, 3)
v = arr.view()

print('Original arr:')
print(arr)

# modify the view
v[0, 0] = 99

print('\nModified view v:')
print(v)

print('\nOriginal arr after modifying v (shares memory):')
print(arr)
```

This demonstrates that modifying `v` also modifies `arr`, because `v` is a view into the same buffer.

## Codebyte

```codebyte/python
import numpy as np

# 1) Shared-data view example
arr = np.arange(6, dtype=np.int64).reshape(2, 3)
v = arr.view()
print('arr before:', arr, sep='\n')

v[0, 0] = -1
print('\nview v after modification:', v, sep='\n')
print('\narr after view modification (same buffer):', arr, sep='\n')

# 2) Dtype reinterpretation example (byte-wise view)
a = np.array([1, 256], dtype=np.int16)
print('\noriginal a:', a, a.dtype)

# view underlying bytes as unsigned 8-bit integers
b = a.view(np.uint8)
print('byte-wise view b:', b, b.dtype)

# 3) Creating an ndarray subclass via the `type` argument (rare)
mat = arr.view(type=np.matrix)
print('\nmatrix view (type=np.matrix):', mat, type(mat))

# If you want an independent copy, use .copy()
c = arr.copy()
c[0, 0] = 555
print('\narr after making a copy and modifying the copy (arr unchanged):', arr, sep='\n')
print('\ncopy c:', c, sep='\n')
```

The codebyte shows three common uses of `.view()`:

- creating a shallow view that shares memory (fast, no copy),
- reinterpreting the raw bytes using a different `dtype`, and
- creating a different array *type* by passing the `type` argument.

Refer to the NumPy docs for more details and edge cases: https://numpy.org/doc/stable/reference/generated/numpy.ndarray.view.html
