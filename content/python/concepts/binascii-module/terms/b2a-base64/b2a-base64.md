---
Title: '.b2a_base64()'
Description: 'Converts binary data to a line of Base64-encoded ASCII characters.'
Subjects:
  - 'Python'
Tags:
  - 'Methods'
  - 'Strings'
  - 'Binary'
  - 'Encoding'
CatalogContent:
  - 'learn-python-3'
---

## Syntax

```python
binascii.b2a_base64(data, *, newline=True)
```

- **data**: The binary data to encode.  
- **newline** *(optional)*: If set to `False`, omits the trailing newline character. Default is `True`.

## Example

```python
import binascii

# Original binary data
binary_data = b'Hello, Hacktoberfest!'

# Encoding with the default newline character
encoded_data = binascii.b2a_base64(binary_data)

# Printing the encoded data
print(encoded_data)
```

**Output:**
```
b'SGVsbG8sIEhhY2t0b2JlcmZlc3Qh\n'
```

## Codebyte Example

```python
import binascii

# The data to be encoded
data_to_encode = b'Codecademy Docs!'

# Perform Base64 encoding
encoded_data = binascii.b2a_base64(data_to_encode)

# Print the original and encoded data
print(f"Original: {data_to_encode}")
print(f"Encoded: {encoded_data}")
```

**Output:**
```
Original: b'Codecademy Docs!'
Encoded: b'Q29kZWNhZGVteSBEb2NzIQ==\n'
```
