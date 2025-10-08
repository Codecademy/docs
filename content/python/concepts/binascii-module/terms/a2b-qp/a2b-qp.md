---
Title: '.a2b_qp()'
Description: 'Decodes a string of quoted-printable data back to binary.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Encoding'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.a2b_qp()`** [function](https://www.codecademy.com/resources/docs/python/functions) decodes a string of quoted-printable data back to binary.

Quoted-printable is an encoding scheme used in email messages to represent non-ASCII characters using only ASCII characters.

## Syntax

```pseudo
binascii.a2b_qp(data, *, header=False)
```

- `data`: A bytes or string object containing the quoted-printable encoded data to be decoded.
- `*`: This indicates that any arguments following it must be passed using keyword syntax.
- `header`: When set to True, it decodes the data as if it were in an email header, handling special rules for headers.

## Example

```py
import binascii

# Quoted-printable encoded data
encoded_data = b'Codecademy=20Docs'

# Decode the data back to binary
decoded_data = binascii.a2b_qp(encoded_data)

print(decoded_data)
```

This produces the following output:

```shell
b'Codecademy Docs'
```

## Codebyte Example

```codebyte/python
import binascii

encoded_data = b'Codecademy=20Docs'
decoded_data = binascii.a2b_qp(encoded_data)

print(decoded_data)
```