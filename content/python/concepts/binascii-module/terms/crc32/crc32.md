---
Title: '.crc32()'
Description: 'Computes the CRC-32 checksum of binary data using a cyclic redundancy check algorithm.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Checksum'
  - 'Encoding'
  - 'Functions'
  - 'Error Detection'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.crc32()`** [function](https://docs.python.org/3/library/binascii.html#binascii.crc32) computes a **CRC-32 checksum** of the given data using a cyclic redundancy check algorithm. It is commonly used to detect accidental changes in raw data.

## Syntax

```pseudo
binascii.crc32(data, value=0)
```

- `data`: A bytes-like object containing the binary data whose CRC-32 checksum is to be computed.
- `value` _(optional)_: An initial CRC value. This can be used to compute cumulative CRCs across multiple data blocks. Default is `0`.
- Returns: An integer representing the CRC-32 checksum of the input data.

## Example

```py
import binascii

# Create binary data
binary_data = b"hello world"

# Compute the CRC-32 checksum
checksum = binascii.crc32(binary_data)

print(checksum)
```

This produces the following output :

```shell
222957957
```

> **Note:** The output value is an unsigned 32-bit integer representing the checksum of the input data.

## Codebyte Example

```codebyte/python
import binascii

# Example: Compute CRC-32 checksum of text data
data = b"Codecademy Docs"
checksum = binascii.crc32(data)

print("CRC-32 Checksum:", checksum)
```

This produces the following output:

```shell
CRC-32 Checksum: 2197138700
```
