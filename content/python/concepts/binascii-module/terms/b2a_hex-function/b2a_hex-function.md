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

## Example: Using a Separator for Readability

The `sep` and `bytes_per_sep` parameters can make the output easier to read, especially for long binary data.

```py
import binascii

binary_data = b"Python"
encoded_data = binascii.b2a_hex(binary_data, sep=b":", bytes_per_sep=2)

print(encoded_data)
```

This produces the following output:

```shell
b'5079:7468:6f6e'
```

> **Note**: The separator (:) is inserted after every 2 bytes, improving readability.


## Codebyte Example

In this example, the binary string `"Codecademy"` is converted to hexadecimal using `.b2a_hex()` to demonstrate encoding in a small, real-life scenario:

```codebyte/python
import binascii

binary_data = b"Codecademy"
encoded_data = binascii.b2a_hex(binary_data)

print(encoded_data)
```

## Practical Use Cases

### 1. Readable Representation of Binary Data

Binary data often contains non-printable characters. Converting it to hex makes it human-readable and easy to inspect.

```py
import binascii

raw_bytes = b'\x01\x02\x03\x04'
readable_hex = binascii.b2a_hex(raw_bytes)

print("Readable form:", readable_hex)
```

This produces the following output:

```shell
Readable form: b'01020304'
```

### 2. Digital Signatures and Hashes

Cryptographic functions, such as SHA256 or MD5, generate binary hash values.  
These values are raw bytes, which are not human-readable and can be difficult to store or compare directly.  

The **`.b2a_hex()`** function converts these binary hashes into a readable hexadecimal string.  
This makes it easy to **display, share, store, or compare** cryptographic hashes as plain text.


```py
import binascii
import hashlib

# Example: SHA256 hash of a message
message = b"Hello World"
hash_bytes = hashlib.sha256(message).digest()  # Raw binary hash

# Convert binary hash to readable hexadecimal
hash_hex = binascii.b2a_hex(hash_bytes)

print("SHA256 Hash (hex):", hash_hex)
```

This produces the following output:


```shell
SHA256 Hash (hex): b'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e'
```

> **Note**: Using .b2a_hex() lets you handle cryptographic hashes as readable text, making it easier to debug, store in databases, or verify integrity.


### 3. Educational or Visualization Purposes

Useful for teaching or demonstrating how data is represented at the byte and hexadecimal level.  
This helps students or developers visualize how text and other data are stored in binary form.

```py
import binascii

text = "Learn"
hex_version = binascii.b2a_hex(text.encode("utf-8"))

print(f"Original text: {text}")
print(f"Hexadecimal form: {hex_version}")
```

This produces the following output:


```shell
Original text: Learn
Hexadecimal form: b'4c6561726e'
```




