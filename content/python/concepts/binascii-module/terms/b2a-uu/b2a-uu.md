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

The **`.b2a_uu()`** [function](https://www.codecademy.com/resources/docs/python/functions) returns a bytes object containing a string of ASCII characters in UUencoded format derived from the input binary data.

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

## Codebyte Example

```codebyte/python
import binascii

binaryData = b"some text"
encodedData = binascii.b2a_uu(binaryData)

print(encodedData)
```
