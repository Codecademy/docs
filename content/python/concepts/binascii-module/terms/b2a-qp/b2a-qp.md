---
Title: '.b2a_qp()'
Description: 'Converts binary data into a bytes object containing its quoted-printable ASCII representation.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Encoding'
  - 'Functions'
  - 'Unicode'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.b2a_qp()`** function encodes binary data using the quoted-printable transfer encoding and returns a `bytes` object containing only ASCII characters.

## Syntax

```pseudo
binascii.b2a_qp(data, quotetabs=false, istext=false, header=false)
```

**Parameters:**

- `data`: The binary data to encode. Must be a `bytes` or `bytearray` object.
- `quotetabs` (optional, default = `False`): When `True`, spaces and tabs are always encoded. By default, they’re encoded only when necessary according to the quoted-printable rules.
- `istext` (optional, default = `False`): When `True`, the input is treated as text and line endings are converted to `\r\n`. When `False`, line endings are not altered.
- `header` (optional, default = `False`): When `True`, spaces are encoded as underscores, making the output suitable for email headers (RFC 2047 format).

**Return value:** 

Returns a bytes object containing the quoted-printable encoded ASCII representation of the input data.

## Example

This example demonstrates encoding binary data containing special characters into quoted-printable ASCII:

```py
import binascii

# Binary data that includes an equals sign which must be quoted
binary_data = b"Codecademy = Awesome!\n"

# Encode the binary data to Quoted-Printable ASCII
encoded = binascii.b2a_qp(binary_data)

print(encoded)
```

This produces output similar to:

```shell
b'Codecademy =3D Awesome!=0A'
```

> **Note:** To decode quoted-printable data back to binary, use `binascii.a2b_qp(data)`.

## Codebyte Example

This example illustrates how `.b2a_qp()` encodes multiple special characters, tabs, and spaces in a bytes object:

```codebyte/python
import binascii

text = b"Hello = World!\nTabs\tand spaces  "

# Default behavior encodes '=' and any trailing spaces/tabs; newline may be quoted
encoded_default = binascii.b2a_qp(text)

print(encoded_default)
```
