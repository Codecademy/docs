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

In Python, the **`.a2b_qp()`** [function](https://www.codecademy.com/resources/docs/python/functions) decodes a string of quoted-printable data back to binary.

Quoted-printable is an encoding scheme used in email messages to represent non-ASCII characters using only ASCII characters.

## Syntax

```pseudo
binascii.a2b_qp(data, header=False)
```

**Parameters:**

- `data`: A bytes-like object containing the quoted-printable encoded data to decode.
- `header`: When set to `True`, it decodes the data as if it were in an email header, handling special rules for headers. Default is `False`.

**Return value:**

The `.a2b_qp()` function returns the decoded binary data as a bytes object.

## Example

This example decodes a quoted-printable encoded byte string into its original binary form:

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

This example decodes a quoted-printable encoded message body retrieved from an email:

```codebyte/python
import binascii

# Quoted-printable encoded email message
email_body = b'Hello=2C=20thank=20you=20for=20joining=20Codecademy=21'

# Decode the email message body
decoded_body = binascii.a2b_qp(email_body)

print(decoded_body)
```
