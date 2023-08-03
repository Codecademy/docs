---
Title: 'memoryview()'
Description: 'Creates a 'memory view' object that allows Python code to access the internal data of an object's buffer without making a copy of it'
Subjects:
  - 'Data Types'
  - 'Computer Science'
  - 'Built-in Functions'
Tags:

CatalogContent:
---

Creates a `memory view` object that allows Python code to access the internal data of an object's buffer without making a copy of it.

## Syntax

```python
obj = bytes([65, 66, 67, 68, 69])
memoryview(obj)

# output <memory at 0x1112b7e80>
```
## Example 1

`memory view` can only be used on objects that support the buffer protocol and have a readable or writable buffer interface, such as `byte`, `bytearray`, `array.array`, `numpy` arrays, and other objects created using the struct module. `list` and `str` objects don't support buffer protocol.

```python
l = [1, 2, 3, 4, 5, 6]
memoryview(l)
#output TypeError: memoryview: a bytes-like object is required, not 'list'

import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6])
memoryview(arr)
#output <memory at 0x117003700>
```


## Example 2

`memory view` supports indexing and slicing operations: 

```python
arr = bytearray(10)
mv = memoryview(arr)
mv[0]=mv[-1] = 65
print(arr)
# output bytearray(b'A\x00\x00\x00\x00\x00\x00\x00\x00A')

print(mv[0])
#output 65

print(mv[1:4])
#output <memory at 0x117003880>
```

## Summary

The 'memoryview' class offers large performance gains when operating on large objects since it doesn’t create a copy when slicing. However using it requires good knowledge of the structure and format of the data in the source object.
