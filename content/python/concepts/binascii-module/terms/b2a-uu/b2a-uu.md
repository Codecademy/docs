---
Title: '.b2a_uu()'
Description: 'Returns UUEncode formatted ASCII data from binary data.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Encoding'
  - 'Unicode'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **.b2a_uu()** function returns ASCII data in the UUEncode format from binary data.

## Syntax

```pseudo
binascii.b2a_uu(data, *, backtick=false)
```

- data: The binary data to be converted.
- \*: Any arguments to the right must use a keyword for entry.
- backtick: If true, replaces 0's with `.

## Example

```py
import binascii

# Create binary data to encode
binaryData = b"some text"

# Encode the binary data to ASCII in the UUEncode format
encodedData = binascii.b2a_uu(binaryData)

print(encodedData)
```

This outputs:

```py
b')<V]M92!T97AT\n'
```
