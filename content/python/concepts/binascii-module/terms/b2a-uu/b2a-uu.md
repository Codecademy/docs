---
Title: '.b2a_uu()'
Description: 'Converts binary data into a bytes object containing a string of ASCII characters in UUEncoded format.'
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

The **`.b2a_uu()`** [function](https://www.codecademy.com/resources/docs/python/functions) converts binary data into a bytes object containing a string of ASCII characters in UUEncoded format.

## Syntax

```pseudo
binascii.b2a_uu(data, *, backtick=false)
```

- `data`: A bytes object containing the binary data to be encoded.
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

This produces the following output:

```shell
b')<V]M92!T97AT\n'
```

> **Note:** To learn how to convert back to binary format, visit [`.a2b_uu()`](https://www.codecademy.com/resources/docs/python/binascii-module/a2b-uu).

## Codebyte Example

```codebyte/python
import binascii

binaryData = b"some text"
encodedData = binascii.b2a_uu(binaryData)

print(encodedData)
```
