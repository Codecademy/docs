 ---
title: .hexlify()
description: The .hexlify() method in Python’s binascii module converts binary data to a hexadecimal representation.
---.hexlify() is a method in Python's `binascii` module that converts binary data (bytes) into a hexadecimal representation as a bytes object. This is useful when you need a readable or transportable form of binary data.
## Syntax

```python
binascii.hexlify(data)
---

### **## Example**
```markdown
## Example

```python
import binascii

binary_data = b'hello'
hex_data = binascii.hexlify(binary_data)
print(hex_data)
# Output: b'68656c6c6f'
---

### **## Codebyte**
```markdown
## Codebyte

```codebyte/python
import binascii

# Convert bytes to hexadecimal
data = b'Python'
hex_data = binascii.hexlify(data)
print(hex_data)  # Output: b'507974686f6e'

# Convert back to original bytes
original_data = binascii.unhexlify(hex_data)
print(original_data)  # Output: b'Python'
---

