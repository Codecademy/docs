---
Title: 'byteswap()'
Description: 'Swaps the byte order of each element in a NumPy ndarray.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Array'
  - 'Data'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`byteswap()`** method reverses the byte order of every element in a NumPy array. This is used when converting data between systems with different endianness (byte-ordering conventions). The operation either returns a new array or modifies the original one in place when `inplace=True`.

## Syntax

```pseudo
ndarray.byteswap(inplace=False)
```

**Parameters:**

- `inplace` (optional): When set to `True`, the byte order of the existing array is swapped in place. When False, a new array with swapped bytes is returned.

**Return value:**

Returns a new ndarray with swapped byte order, unless `inplace=True`, in which case the original array is modified and returned.

## Example 1

In this example, the array's byte order is swapped to convert the data into the opposite endianness:

```py
import numpy as np

arr = np.array([1, 256, 1024], dtype=np.int32)

print("Original array:")
print(arr)
print("Original dtype:", arr.dtype)

swapped = arr.byteswap()

print("\nAfter byteswap():")
print(swapped)
print("Swapped dtype:", swapped.dtype)
```

The output of this code is:

```shell
Original array:
[   1  256 1024]
Original dtype: int32

After byteswap():
[16777216         1         4]
Swapped dtype: int32
```

## Example 2

This example demonstrates `byteswap(inplace=True)` and shows how the original data is altered directly:

```py
import numpy as np

arr = np.array([100, 200, 300], dtype=np.int32)

print("Before inplace byteswap:", arr)

arr.byteswap(inplace=True)

print("After inplace byteswap:", arr)
```

The output of this code is:

```shell
Before inplace byteswap: [100 200 300]
After inplace byteswap: [1677721600  335544320  503316480]
```

## Codebyte Example

Use the Codebyte below to inspect how byteswap affects a 2-D array and observe the internal memory representation change:

```codebyte/python
import numpy as np

matrix = np.array([[1, 2], [3, 4]], dtype=np.int16)

print("Original:")
print(matrix)

swapped = matrix.byteswap()

print("\nByteswapped:")
print(swapped)
```

## Frequently Asked Question

### 1. What is the function of byteswap in Python?

The `byteswap()` method reverses the byte order of every element in a NumPy array. It is commonly used when preparing data for systems with different endianness or when interpreting binary data from external sources.

### 2. What are bytes and bytearrays in Python?

A `bytes` object is an immutable sequence of byte values, while a bytearray is a mutable version of the same concept. Both store raw binary data and are often used for file handling, networking, and low-level memory operations.

### 3. How to shuffle a NumPy ndarray?

A NumPy array can be shuffled using `np.random.shuffle()` for in-place row-wise shuffling or `np.random.permutation()` to return a shuffled copy. These functions randomize the order of elements while preserving the array’s structure.
