---
Title: 'memoryview()'
Description: 'Creates a memoryview object that allows Python code to access the internal data of an object without making a copy of it.'
Subjects:
  - 'Data Types'
  - 'Computer Science'
  - 'Built-in Functions'
Tags:
  - 'Data Types'
  - 'Memory'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`memoryview()`** built-in function creates a `memoryview` object that allows Python code to access the internal data of an object's buffer without making a copy of it.

## Syntax

```python
obj = bytes([65, 66, 67, 68, 69])
mv = memoryview(obj)
print(mv)
```
This code results in the following output:
```shell
output <memory at 0x117003340>
```
Where `obj` is the object to create a `memoryview` of, and `mv` is the `memoryview` created.

> **Note:** `memoryview()` can only be used on objects that support the buffer protocol and have a readable or writable buffer interface, such as `byte`, `bytearray`, `array.array`, `numpy` arrays, and other objects created using the struct module. `list` and `str` objects don't support the buffer protocol.

## Example 1

```python
l = [1, 2, 3, 4, 5, 6]
memoryview(l)
```
the output will be:
```shell
output TypeError: memoryview: a bytes-like object is required, not 'list'
```
```python
import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6])
memoryview(arr)
```
This will print the following output:
```shell
output <memory at 0x117003700>
```
> **Note** that memory address generated will vary for each execution of the code. This discrepancy is related to the creation of a new memoryview object.

## Example 2

`memoryview` supports indexing and slicing operations: 

```python
arr = bytearray(10)
mv = memoryview(arr)
mv[0] = mv[-1] = 65
print(arr)
# output bytearray(b'A\x00\x00\x00\x00\x00\x00\x00\x00A')

print(mv[0])
#output 65

print(mv[1:4])
#output <memory at 0x117003880>
```

## Summary

The 'memoryview' class offers large performance gains when operating on large objects since it doesn’t create a copy when slicing. However using it requires good knowledge of the structure and format of the data in the source object.
