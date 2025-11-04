---
Title: '.crc_hqx()'
Description: 'Computes the CRC-CCITT hash value for binary data, specifically using the CRC-HQX standard.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Python'
  - 'binascii'
  - 'hashing'
  - 'checksum'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.crc_hqx()`** method is a function within Python's built-in `binascii` module used to compute a 16-bit Cyclic Redundancy Check (CRC) value. This specific implementation uses the parameters of the **CRC-HQX** standard (known for its use in the original Mac OS).

Checksums are primarily used to detect errors in data transmission or storage, ensuring that the data received is identical to the data sent.

## Syntax

The method takes the binary data to be checked and an optional initial CRC value.

```pseudo
binascii.crc_hqx(data, crc)
```

## Parameters

* `data` (bytes-like object): The binary data for which the CRC value should be calculated.
* `crc` (integer): An optional 16-bit starting value for the checksum calculation. If omitted, the initial value is `0`.

## Return Value

Returns an integer representing the 16-bit CRC-HQX checksum of the input data.

## Example

This example demonstrates computing the checksum for a short byte string, both with and without an initial CRC value.

```python
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

**Output:**

```shell
Data: b'Codecademy Docs'
CRC (with initial value 0xAAAA): 0x05f0
CRC (starting from 0): 0xa663
```

## Codebyte

Use the Codebyte below to calculate the CRC-HQX checksum for your own byte string.

```python
import binascii

data_to_check = b"Python Contributor"

# Calculate the CRC-HQX checksum starting from 0
checksum = binascii.crc_hqx(data_to_check, 0)

print(f"Checksum: 0x{checksum:04x}")
```