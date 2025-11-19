---
Title: '.crc_hqx()'
Description: 'Computes a 16-bit CRC (CRC-CCITT) checksum of binary data using the CRC-HQX algorithm.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Algorithms'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.crc_hqx()`** function in Python’s built-in `binascii` module computes a 16-bit Cyclic Redundancy Check (CRC) value using the CRC-HQX algorithm, commonly used in the original Mac OS.

This checksum helps detect errors in data transmission or storage by verifying that the received data matches the original data.

## Syntax

```pseudo
binascii.crc_hqx(data, value)
```

**Parameters:**

- `data` (bytes-like object): The binary data for which the CRC value is computed.
- `value` (integer): An optional 16-bit starting value for the checksum calculation. If omitted, the initial value is `0`.

**Return value:**

Returns a 16-bit integer representing the computed CRC checksum of the input data, according to the CRC-HQX algorithm.

## Example

In this example, the checksum is computed for a byte string, once with a non-zero starting value and once with an initial value of `0`:

```py
import binascii

data = b"Codecademy Docs"
initial_crc = 0xAAAA # A common non-zero starting value

# 1. Compute CRC with a starting value (0xAAAA)
crc_with_initial = binascii.crc_hqx(data, initial_crc)

# 2. Compute CRC starting from 0
crc_without_initial = binascii.crc_hqx(data, 0)

print(f"Data: {data!r}")
print(f"CRC (with initial value 0xAAAA): 0x{crc_with_initial:04x}")
print(f"CRC (starting from 0): 0x{crc_without_initial:04x}")
```

The output of this code is:

```shell
Data: b'Codecademy Docs'
CRC (with initial value 0xAAAA): 0x134c
CRC (starting from 0): 0x67ce
```

## Codebyte Example

This example below computes the CRC-HQX checksum for a byte string using a starting value of `0`:

```codebyte/python
import binascii

data_to_check = b"Python Contributor"

# Calculate the CRC-HQX checksum starting from 0
checksum = binascii.crc_hqx(data_to_check, 0)

print(f"Checksum: 0x{checksum:04x}")
```
