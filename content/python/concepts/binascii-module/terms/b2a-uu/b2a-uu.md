---
Title: '.a2b_uu()'
Description: 'Returns UUEncode formatted ASCII data from binary data.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Encoding'
  - 'Unicode'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
# links for me while writing
# https://github.com/Codecademy/docs/blob/main/documentation/subjects.md
# https://github.com/Codecademy/docs/blob/main/documentation/tags.md
---

The **.b2a_uu()** function returns ASCII data in the UUEncode format from binary data.

## Syntax

```pseudo
binascii.b2a_uu(data, *, backtick=false)
```

- data: The binary data to be converted.
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

This example outputs:

```shell
b')<V]M92!T97AT\n'
```
