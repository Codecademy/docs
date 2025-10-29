---
Title: '.a2b_hex()'
Description: 'Decodes a hexadecimal (base-16) encoded ASCII string into the original binary data (bytes).'
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

The **`binascii.a2b_hex()`** function in Python decodes a hexadecimal (base-16) encoded ASCII string into its original binary form. It translates pairs of hexadecimal digits into corresponding byte values, effectively reversing the process of hex encoding.

## Syntax

```pseudo
binascii.a2b_hex(string)
```

**Parameters:**

- `string`: A bytes or bytearray object containing hexadecimal (base-16) encoded data. Each pair of hex digits represents one byte, so the length must be even.

**Return value:**

Returns a bytes object containing the binary data decoded from the given hexadecimal input.

**Exceptions:**

Raises `binascii.Error` if the input contains an odd number of hexadecimal digits or contains invalid characters.

## Example

In this example, the hexadecimal string `"48656C6C6F"` is decoded into its corresponding binary data and then interpreted as ASCII text:

```py
import binascii

# Convert hexadecimal string to binary
hex_string = "48656C6C6F"
binary_data = binascii.a2b_hex(hex_string)

print("Hexadecimal:", hex_string)
print("Binary data:", binary_data)
print("Decoded text:", binary_data.decode('utf-8'))
```

The output of this code is:

```shell
Hexadecimal: 48656C6C6F
Binary data: b'Hello'
Decoded text: Hello
```

## Codebyte Example

Run the following code to see `.a2b_hex()` in action with different scenarios:

```codebyte/python
import binascii

# Example 1: Convert hexadecimal to binary
hex_data = "50797468"
result = binascii.a2b_hex(hex_data)
print("Hex:", hex_data)
print("Binary:", result)
print("As text:", result.decode('utf-8'))

# Example 2: Uppercase and lowercase work the same
hex_upper = "414243"
hex_lower = "414243"
print("\nUppercase result:", binascii.a2b_hex(hex_upper))
print("Lowercase result:", binascii.a2b_hex(hex_lower))

# Example 3: Converting numeric data
hex_numbers = "010203040A0B0C"
binary_numbers = binascii.a2b_hex(hex_numbers)
print("\nHex numbers:", hex_numbers)
print("Binary:", binary_numbers)
print("Byte values:", list(binary_numbers))
```
