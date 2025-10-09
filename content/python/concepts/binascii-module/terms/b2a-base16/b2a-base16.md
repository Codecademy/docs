---
Title: '.b2a_base16()'
Description: 'Converts binary data into a bytes object containing a hexadecimal (Base16) ASCII representation.'
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

The **`.b2a_base16()`** [function](https://docs.python.org/3/library/binascii.html#binascii.b2a_base16) converts binary data into a bytes object containing a string of ASCII characters representing the data in Base16 (hexadecimal) format.

## Syntax

```pseudo
binascii.b2a_base16(data, *, newline=False)
```

- `data`: A bytes object containing the binary data to be encoded.
- `*`: This indicates that any arguments following it must be passed using keyword syntax.
- `newline`: When set to True, a newline (`\n`) is appended to the encoded output. Default is False.

## Example

```py
import binascii

# Create binary data to encode
binary_data = b"hello"

# Encode the binary data to Base16 ASCII format
encoded_data = binascii.b2a_base16(binary_data)

print(encoded_data)
```

This produces the following output:

```shell
b'68656C6C6F'
```

> **Note** : Each byte of the input is converted to its two-character hexadecimal representation.

## Codebyte Example

```codebyte/python
import binascii

binary_data = b"Codecademy"
encoded_data = binascii.b2a_base16(binary_data)

print(encoded_data)
```

This produces:

```shell
b'436F6465636164656D79'
```
