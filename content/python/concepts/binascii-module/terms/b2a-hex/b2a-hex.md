---
Title: '.b2a_hex()'
Description: 'Converts binary data to a bytes object containing its hexadecimal (Base16) ASCII representation.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Encoding'
  - 'Functions'
  - 'Hexadecimal'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.b2a_hex()`** function converts binary data into a bytes object containing a string of ASCII characters representing the data in Base16 (hexadecimal) format.

## Syntax

```pseudo
binascii.b2a_hex(data[, sep[, bytes_per_sep=1]])
```

**Parameters:**

- `data`: The binary data to convert. Must be a `bytes` or `bytearray` object.
- `sep` (optional): A single-byte separator inserted between pairs of hex digits in the output.
- `bytes_per_sep` (optional, default = 1): Determines how many bytes are grouped together before inserting the separator. Ignored if `sep` is not provided.

**Return value:**

Returns a bytes object containing the hexadecimal (Base16) ASCII representation of the input binary data.

## Example: Basic Hexadecimal Conversion

In this example, the binary string `"hello"` is converted to its Base16 ASCII representation:

```py
import binascii

# Create binary data to encode
binary_data = b"hello"

# Encode the binary data to Base16 ASCII format
encoded_data = binascii.b2a_hex(binary_data)

print(encoded_data)
```

This produces the following output:

```shell
b'68656c6c6f'
```

> **Note**: Each byte of the input is converted to its two-character hexadecimal representation.

## Codebyte Example

In this example, the binary string `"Codecademy"` is converted to hexadecimal using `.b2a_hex()` to demonstrate encoding in a small, real-life scenario:

```codebyte/python
import binascii

binary_data = b"Codecademy"
encoded_data = binascii.b2a_hex(binary_data)

print(encoded_data)
```
