---
Title: '.hexlify()'
Description: 'Encodes binary data into a hexadecimal (base-16) representation.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Encoding'
  - 'Methods'
  - 'Modules'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.hexlify()`** method, provided by Python's `binascii` module, converts binary data into its hexadecimal (base-16) ASCII representation. It’s an alias for `binascii.b2a_hex()` and is commonly used to represent binary data in a readable hex format. Each byte of input data is converted into a two-digit hexadecimal value.

## Syntax

```pseudo
binascii.hexlify(data[, sep[, bytes_per_sep]])
```

**Parameters:**

- `data` (bytes-like): The binary data to encode.
- `sep` (optional, single character `str` or `bytes`): A separator to insert between hex groups.
- `bytes_per_sep` (optional `int`): After every `bytes_per_sep` input bytes, insert `sep`. A negative value will count from the right end.

**Return value:**

Returns a `bytes` object containing the hexadecimal ASCII representation of the input.

> **Note:** The returned string is always twice as long as the original data. If `sep` is provided, it’s inserted at the specified intervals for better readability.

## Example

In this example, `.hexlify()` converts binary data into its hexadecimal form:

```py
import binascii

binary_data = b'hello'
hex_data = binascii.hexlify(binary_data)
print(hex_data)
```

The output of this code is:

```shell
b'68656c6c6f'
```

## Codebyte Example

This Codebyte demonstrates converting binary data into its hexadecimal representation using `.hexlify()`:

```codebyte/python
import binascii

# Original binary data
data = b'OpenAI'
print("Original data:", data)

# Convert to hexadecimal
hexed = binascii.hexlify(data)
print("Hexlified:", hexed)

# Convert to a readable string
print("Hex as string:", hexed.decode('ascii'))
---
```
