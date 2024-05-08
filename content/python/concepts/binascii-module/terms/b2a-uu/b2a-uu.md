---
Title: '.b2a_uu()'
Description: 'Returns UUEncoded ASCII data from binary data.'
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

The **`.b2a_uu()`** [function](https://www.codecademy.com/resources/docs/python/functions) returns ASCII data in the UUEncode format from binary data.

## Syntax

```pseudo
binascii.b2a_uu(data, *, backtick=false)
```

- `data`: The binary data to be UUEncoded.
- `*`: This indicates that any arguments following it must be passed using keyword syntax.
- `backtick`: When set to True, it replaces zero bytes in the UUEncoded data with a backtick character `` (`) ``.

## Example

```py
import binascii

# Create binary data to encode
binaryData = b"some text"

# Encode the binary data to UUEncoded ASCII format
encodedData = binascii.b2a_uu(binaryData)

print(encodedData)
```

This outputs:

```shell
b')<V]M92!T97AT\n'
```
