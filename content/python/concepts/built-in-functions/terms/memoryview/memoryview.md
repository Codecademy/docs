---
Title: 'memoryview()'
Description: 'Creates a memoryview object that allows Python code to access the internal data of an object without making a copy of it.'
Subjects:
  - 'Developer Tools'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Memory'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`memoryview()`** built-in function creates a `memoryview` object that allows Python code to access the internal data of an object's buffer without making a copy of it.

The `memoryview` class offers large performance gains when operating on large objects since it doesn’t create a copy when slicing. However using it requires good knowledge of the structure and format of the data in the source object.

## Syntax

```pseudo
mv = memoryview(obj)
```

Where `obj` is the object to create a `memoryview` of, and `mv` is the `memoryview` created.

> **Note:** `memoryview()` can only be used on objects that support the buffer protocol and have a readable or writable buffer interface, such as `byte`, `bytearray`, `array.array`, `numpy` arrays, and other objects created using the struct module. `list` and `str` objects don't support the buffer protocol.

## Example 1

The example below illustrates the creation of `memoryview` objects, their display, and the outcome when an inappropriate object is passed to the function:

```python
l = [1, 2, 3, 4, 5, 6]
memoryview(l)
```

The output will be:

```shell
TypeError: memoryview: a bytes-like object is required, not 'list'
```

The following code snippet demonstrates how a `memoryview` object is created from a NumPy array:

```python
import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6])
memoryview(arr)
```

This will print the following output:

```shell
<memory at 0x117003700>
```

> **Note:** The memory address generated will vary for each execution of the code. This discrepancy is related to the creation of a new `memoryview` object.

## Example 2

`memoryview` supports indexing and slicing operations:

```python
arr = bytearray(10)
mv = memoryview(arr)
mv[0] = 65
print(mv[0])
```

This will output a modified element:

```shell
65
```

Here is how a slicing operation on a `memoryview` object is performed:

```python
print(mv[1:4])
```

Note that a slice of a `memoryview` object is also a `memoryview` object:

```shell
<memory at 0x117003880>
```
