---
Title: '.view()'
Description: 'Return a new view of the array (a shallow view) that shares the original array\'s data buffer.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
  - 'Objects'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.view()`** method returns a new array object that looks at the same data as the original array. The returned object is a _view_ ((shallow reference) that shares the same memory buffer. Modifying the contents of the view generally affects the original array.

The method also allows reinterpreting the data with a different `dtype` or creating a subclass of `ndarray` using the `type` parameter. If a completely independent copy is needed, `.copy()` should be used instead.

## Syntax

```pseudo
ndarray.view([dtype=None][, type=None])
```

**Parameters:**

- `dtype` (optional): Data type to force the returned view to use. Reinterprets the underlying bytes with the specified dtype; this may affect shape requirements.
- `type` (optional): If provided, the returned object will be a subclass of `ndarray` (e.g., `numpy.matrix`) instead of a plain `ndarray`.

**Return value:**

Returns a new array object (an `ndarray` or an instance of the specified `type`) that shares the same data buffer as the original unless the interpretation prevents sharing.

> **Note:** `.view()` creates a shallow view — it does not copy array data. Use `.copy()` to create an independent array.

## Example

In this example, a view of a NumPy array is created that shares the original array’s memory, so modifications to the view also affect the original array:

```py
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

The output of this code is:

```shell
Original arr:
[[0 1 2]
 [3 4 5]]

Modified view v:
[[99  1  2]
 [ 3  4  5]]

Original arr after modifying v (shares memory):
[[99  1  2]
 [ 3  4  5]]
```

This demonstrates that modifying `v` also modifies `arr`, because `v` is a view into the same buffer.

## Codebyte Example

In this example, the array’s underlying bytes are reinterpreted with a different data type using `.view(dtype=...)` without copying the data:

```codebyte/python
import numpy as np

# 1) Shallow view sharing memory
arr = np.arange(6, dtype=np.int64).reshape(2, 3)
v = arr.view()
v[0, 0] = -1
print('arr after modifying view v:', arr, sep='\n')

# 2) Reinterpreting bytes with a different dtype
a = np.array([1, 256], dtype=np.int16)
b = a.view(np.uint8)
print('\nOriginal a:', a, a.dtype)
print('Byte-wise view b:', b, b.dtype)

# 3) Creating an ndarray subclass using type
mat = arr.view(type=np.matrix)
print('\nMatrix view (type=np.matrix):', mat, type(mat))

# 4) Independent copy
c = arr.copy()
c[0, 0] = 555
print('\nOriginal arr after modifying copy c:', arr, sep='\n')
print('Copy c:', c, sep='\n')
```

The codebyte shows three common uses of `.view()`:

- Creating a shallow view that shares memory (fast, no copy),
- Reinterpreting the raw bytes using a different `dtype`, and
- Creating a different array _type_ by passing the `type` argument.
