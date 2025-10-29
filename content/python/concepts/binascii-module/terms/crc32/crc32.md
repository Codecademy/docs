---
Title: '.crc32()'
Description: 'Computes the CRC-32 checksum of binary data using a cyclic redundancy check algorithm.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Encoding'
  - 'Error Handling'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.crc32()`** function computes a CRC-32 checksum of the given data using a cyclic redundancy check algorithm. It is commonly used to detect accidental changes in raw data.

## Syntax

```pseudo
binascii.crc32(data, value=0)
```

**Parameters:**

- `data`: A bytes-like object containing the binary data whose CRC-32 checksum is to be computed.
- `value` (optional): An initial CRC value. This can be used to compute cumulative CRCs across multiple data blocks. Default is `0`.

**Return value:**

Returns an integer representing the CRC-32 checksum of the input data.

## Example

In this example, the CRC-32 checksum of a single string of binary data is computed:

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

The output value is an unsigned 32-bit integer representing the checksum of the input data.

## Codebyte Example

In this example, the CRC-32 checksum is computed incrementally for multiple chunks of data, simulating a real-world file integrity check:

```codebyte/python
import binascii

chunks = [b"Hello ", b"World!", b" CRC32"]
crc = 0  # initial CRC

# Compute CRC incrementally
for chunk in chunks:
  crc = binascii.crc32(chunk, crc)

print("Incremental CRC-32 Checksum:", crc)
```
