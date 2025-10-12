---
Title: '.b2a_base64()'
Description: 'Encodes binary data into a Base64 ASCII string representation.'
Subjects:
  - 'Python'
Tags:
  - 'Methods'
  - 'Strings'
  - 'Binary'
  - 'Encoding'
  - 'binascii'
CatalogContent:
  - 'learn-python-3'
---

## Description

The **`binascii.b2a_base64()`** method converts binary data into a line of Base64-encoded ASCII characters.  
Base64 encoding is commonly used to represent binary data (like images or files) in text-based formats such as email or JSON.

This function is part of the **`binascii`** module, which provides utilities for converting between binary and ASCII representations.

---

## Syntax

```python
binascii.b2a_base64(data, *, newline=True)
```

### Parameters

| Parameter | Type | Description |
|------------|------|-------------|
| **data** | `bytes` | The binary data to encode. |
| **newline** | `bool`, optional | If `True` (default), a newline character (`\n`) is appended to the output. Set to `False` to omit it. |

### Returns
A **`bytes`** object containing the Base64-encoded ASCII representation of the input data.

---

## Example

```python
import binascii

# Original binary data
binary_data = b'Hello, Hacktoberfest!'

# Encode the binary data to Base64 (includes a newline by default)
encoded_data = binascii.b2a_base64(binary_data)

print(encoded_data)
```

**Output:**
```
b'SGVsbG8sIEhhY2t0b2JlcmZlc3Qh\n'
```

If you don’t want the trailing newline character, set `newline=False`:

```python
encoded_data_no_newline = binascii.b2a_base64(binary_data, newline=False)
print(encoded_data_no_newline)
```

**Output:**
```
b'SGVsbG8sIEhhY2t0b2JlcmZlc3Qh'
```

---

## Codebyte Example

```python
import binascii

# Binary data to encode
data_to_encode = b'Codecademy Docs!'

# Perform Base64 encoding
encoded_data = binascii.b2a_base64(data_to_encode)

# Display the original and encoded data
print(f"Original: {data_to_encode}")
print(f"Encoded: {encoded_data}")
```

**Output:**
```
Original: b'Codecademy Docs!'
Encoded: b'Q29kZWNhZGVteSBEb2NzIQ==\n'
```

---
