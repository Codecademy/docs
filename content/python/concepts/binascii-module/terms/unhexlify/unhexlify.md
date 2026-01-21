---
Title: '.unhexlify()'
Description: 'Converts a hexadecimal string into its binary (bytes) representation.'
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

The **`binascii.unhexlify()`** method takes a string (or bytes) of hexadecimal digits and returns the corresponding binary data (as a `bytes` object). It is the inverse of [`binascii.hexlify()`](https://www.codecademy.com/resources/docs/python/binascii-module/hexlify). The input must contain an even number of hex digits (upper or lower case), else it raises a `binascii.Error`.

## Syntax

```pseudo
binascii.unhexlify(hexstr)
```

**Parameters:**

- `hexstr`: A string (or bytes) that represents hexadecimal digits. Must contain an even number of hex digits.

**Return value:**

Returns a `bytes` object that represents the binary data produced by decoding the hex string. Raises `binascii.Error` if `hexstr` has odd length or contains non-hex characters.

## Example 1

In this example, a hex string representing ASCII characters is converted into readable bytes, then decoded to a text string:

```py
import binascii

hex_string = "48656c6c6f20576f726c64"  # “Hello World” in hex
binary_data = binascii.unhexlify(hex_string)
text = binary_data.decode('utf-8')
print(text)
```

The output of this code is:

```shell
Hello World
```

## Example 2

In this example, a hex string representing a small binary file header is converted into bytes and then its first few bytes are printed in integer form:

```py
import binascii

hex_string = "424D368403000000"  # Typical “BM” header for a bitmap file
binary_data = binascii.unhexlify(hex_string)
print(binary_data)
print(list(binary_data[:4]))
```

The output of this code is:

```shell
b'BM6\x84\x03\x00\x00\x00'
[66, 77, 54, 132]
```

## Codebyte Example

In this example, a hex-encoded network message is converted into bytes for processing (e.g., checksum or parsing):

```codebyte/python
import binascii

hex_message = "7e450d0a00ff"  # Sample hex message
message_bytes = binascii.unhexlify(hex_message)

print("Raw bytes:", message_bytes)

# Example further processing
checksum = sum(message_bytes) & 0xff
print(f"Checksum: 0x{checksum:02x}")
```

## Frequently Asked Questions

### 1. What is `binascii.unhexlify()` in Python?

`binascii.unhexlify()` is a method that decodes a string of hexadecimal digits into the equivalent binary data (a `bytes` object).

### 2. What does the `binascii` module do in Python?

The `binascii` module provides low-level functions for converting between binary data and ASCII-encoded binary representations (e.g., hex, base64).

### 3. What is `binascii.Error` in Python `base64`?

Some `binascii` functions (such as those used by `base64` wrappers) raise `binascii.Error` when the input doesn’t conform to the expected format (e.g., invalid characters or incorrect padding).
