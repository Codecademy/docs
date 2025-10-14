---
Title: '.b2a_qp()'
Description: 'Converts binary data to a bytes object containing its Quoted-Printable ASCII representation.'
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

The **`.b2a_qp()`** function encodes binary data using the Quoted-Printable transfer encoding and returns a `bytes` object containing only ASCII characters.

## Syntax

```pseudo
binascii.b2a_qp(data, quotetabs=false, istext=false, header=false)
```

- `data`: The binary data to encode. Must be a `bytes` or `bytearray` object.
- `quotetabs` (optional, default = `False`): When `True`, spaces and tabs are always encoded. By default, only trailing spaces/tabs are encoded per the Quoted-Printable rules.
- `istext` (optional, default = `False`): When `True`, newline characters are preserved (not encoded). When `False`, newlines may be encoded as their quoted form (for example, `=0A`).
- `header` (optional, default = `False`): When `True`, encode spaces as underscores to be suitable for use in email headers (RFC 2047 style).

**Returns:** A `bytes` object containing the Quoted-Printable ASCII representation of `data`.

## Example

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

> Note: To decode Quoted-Printable back to binary, use `binascii.a2b_qp(...)`.

## Codebyte Example

```codebyte/python
import binascii

text = b"Hello = World!\nTabs\tand spaces  "

# Default behavior encodes '=' and any trailing spaces/tabs; newline may be quoted
encoded_default = binascii.b2a_qp(text)

print(encoded_default)
```
