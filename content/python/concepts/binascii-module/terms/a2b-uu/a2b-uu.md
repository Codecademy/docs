---
Title: '.a2b_uu()'
Description: 'Returns a new object with decoded binary data from ASCII-encoded data in the UUEncode format.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'ASCII'
  - 'Unicode'
  - 'UUEncode'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.a2b_uu()` function converts a single line of UUEncoded data back to binary and return the binary data.

## Syntax

```pseudo
binascii.a2b_uu(string)
```
The function accepts Unicode strings containing only ASCII characters.

## Codebyte Example

```codebyte/python
import binascii

# Example ASCII-encoded data in uuencode format
encoded_data = '*0V]D96-A9&5M>0  \n'

# Decode the ASCII-encoded data
decoded_data = binascii.a2b_uu(encoded_data)

print(decoded_data)
# Displays the decoded message
```



