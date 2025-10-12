---
Title: '.a2b_base64()'
Description: 'Decodes Base64 encoded data back into its original binary representation'
Subjects:
  - 'Python'
Tags:
  - 'Modules'
  - 'Methods'
  - 'Encoding'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.a2b_base64()`** method in Python's `binascii` module decodes a string of Base64 encoded data. It takes an ASCII string containing Base64 encoded data and converts it back into its original binary form.

## Syntax

```py
binascii.a2b_base64(string)
```

### Parameters

- `string`: A bytes-like object containing Base64 encoded data. The length must be a multiple of 4 (properly padded).

The method returns the decoded binary data as a bytes object.

> **Note:** If the input string is not correctly padded to a multiple of 4, a `binascii.Error` exception is raised.

## Example

The following example demonstrates using `.a2b_base64()` to decode a Base64 string:

```py
import binascii

# A Base64 encoded string representing "Hello World!"
encoded_string = b'SGVsbG8gV29ybGQh'

# Decode the Base64 string back to binary
decoded_data = binascii.a2b_base64(encoded_string)

print(f"Original encoded string: {encoded_string}")
print(f"Decoded binary data: {decoded_data}")
print(f"Decoded as text: {decoded_data.decode('utf-8')}")
```

The output will be:

```
Original encoded string: b'SGVsbG8gV29ybGQh'
Decoded binary data: b'Hello World!'
Decoded as text: Hello World!
```

## Codebyte Example

The following example shows how `.a2b_base64()` handles both valid and invalid Base64 input:

```codebyte/python
import binascii

# Valid Base64 string for "Codecademy"
encoded = b'Q29kZWNhZGVteQ=='
decoded = binascii.a2b_base64(encoded)

print(f"Encoded Base64: {encoded}")
print(f"Decoded data: {decoded}")
print(f"Decoded text: {decoded.decode('utf-8')}")

# Example with proper padding
encoded_with_padding = b'UHl0aG9u'  # "Python" in Base64
decoded_python = binascii.a2b_base64(encoded_with_padding)
print(f"\nAnother example:")
print(f"Encoded: {encoded_with_padding}")
print(f"Decoded: {decoded_python.decode('utf-8')}")

# Example with invalid padding (will cause an error)
try:
    invalid_encoded = b'abc'  # Not properly padded
    binascii.a2b_base64(invalid_encoded)
except binascii.Error as e:
    print(f"\nError with invalid input 'abc': {e}")
```