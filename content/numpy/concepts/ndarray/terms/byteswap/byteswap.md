---
title: numpy.ndarray.byteswap
description: Modifies the byte order (endianness) of the array elements in place or returns a copy with swapped bytes.
keywords: numpy, ndarray, byteswap, endian, endianness, byte order, data representation
type: method
---

The **`.byteswap()`** method reverses the byte order (endianness) of each element in a NumPy array. It's used to ensure data compatibility between systems with different byte storage conventions (little-endian vs. big-endian).

---

## Syntax

```python
array_instance.byteswap(inplace=False)

## Example
Consider an array of 16-bit integers (`np.int16`). On common systems (like Intel/AMD using little-endian), the number 256 is stored with its bytes as `00 01`. Calling `.byteswap()` reverses these bytes to `01 00`. If this swapped byte sequence is interpreted using the original little-endian data type, it represents a different numerical value.

### Return Value
Returns either the modified original array (if `inplace=True`) or a new array with the byte order swapped (if `inplace=False`). The data type (`dtype`) of the returned array may reflect the new byte order depending on the system and NumPy version, but the underlying byte sequence is always swapped.

import numpy as np

# Create an array of 16-bit integers (usually little-endian by default)
# 256 in little-endian bytes: 00 01
original_array = np.array([1, 256, 512], dtype=np.int16)
print(f"Original array: {original_array}")
print(f"Original dtype: {original_array.dtype}")
print(f"Original bytes (hex): {original_array.tobytes().hex()}")

# Swap bytes, returning a NEW array (inplace=False is default)
swapped_array = original_array.byteswap()

print("\n--- After byteswap() ---")
# Values change because the raw bytes are swapped but interpreted via original dtype order
print(f"Swapped array values (interpreted): {swapped_array}")
print(f"Swapped array dtype: {swapped_array.dtype}")
print(f"Swapped bytes (hex): {swapped_array.tobytes().hex()}") # Bytes reversed per element (e.g., 0001 -> 0100)

# Swap bytes IN PLACE
print("\n--- In-place swap ---")
# The method returns the modified array when inplace=True
modified_original = original_array.byteswap(inplace=True)
print(f"Original array after in-place swap: {original_array}")
print(f"Return value (inplace=True): {modified_original}") # It's the same array object
print(f"Original array bytes after swap (hex): {original_array.tobytes().hex()}")
```
