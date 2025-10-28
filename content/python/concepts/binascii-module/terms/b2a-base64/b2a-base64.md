---
Title: '.b2a_base64()'
Description: 'Converts binary data into a Base64-encoded ASCII string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Encoding'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`binascii.b2a_base64()`** function converts binary data into a Base64-encoded ASCII string, making it easier to transmit or store binary content such as images or files in text-based formats.

## Syntax

```pseudo
binascii.b2a_base64(data, *, newline=True)
```

**Parameters:**

- `data`: The binary data to encode.
- `newline` (optional): If set to `False`, omits the trailing newline character. Default is `True`.

**Return value:**

Returns the Base64-encoded version of the input binary data as a bytes object.

## Example

In this example, binary data is encoded into a Base64-encoded bytes object using the default newline setting:

```py
import binascii

# Original binary data
binary_data = b'Hello, Hacktoberfest!'

# Encoding with the default newline character
encoded_data = binascii.b2a_base64(binary_data)

# Printing the encoded data
print(encoded_data)
```

The output of this code is:

```shell
b'SGVsbG8sIEhhY2t0b2JlcmZlc3Qh\n'
```

> **Note:** If the trailing newline character is not needed, set `newline=False`.

## Codebyte Example

In this example, a short text is converted into its Base64-encoded representation, showing both the original and encoded data:

```codebyte/python
import binascii
# The data to be encoded
data_to_encode = b'Codecademy Docs!'
# Perform Base64 encoding
encoded_data = binascii.b2a_base64(data_to_encode)
# Print the original and encoded data
print(f"Original: {data_to_encode}")
print(f"Encoded: {encoded_data}")
```
