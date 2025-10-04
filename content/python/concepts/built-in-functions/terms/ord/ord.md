---
Title: 'ord()'
Description: 'Returns a number representing the unicode point for a specified character.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Functions'
  - 'Strings'
  - 'Unicode'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`ord()`** function is a built-in Python function that converts a Unicode character to its corresponding integer Unicode code point value. It essentially performs the opposite operation of the [`chr()`](https://www.codecademy.com/resources/docs/python/built-in-functions/chr) function, which converts an integer to its Unicode character.

When working with text processing, character encoding, or data conversion, the `ord()` function serves as an essential tool. It allows programmers to work with the numerical representation of characters, which is helpful for various applications such as encryption algorithms, character manipulation, and data validation.

## Syntax

```pseudo
ord(character)
```

**Parameters:**

- `character`: A Unicode character (string of length 1). If the string contains more than one character, a `TypeError` is raised.

**Return value:**

The `ord()` function returns an integer that represents the Unicode code point for the given character.

## Example 1: Basic Usage of `ord()`

This example demonstrates how to get the Unicode value of basic characters:

```py
# Get Unicode value of uppercase letter
print(ord('A'))

# Get Unicode value of lowercase letter
print(ord('a'))

# Get Unicode value of a digit
print(ord('5'))

# Get Unicode value of a special character
print(ord('@'))
```

This example results in the following output:

```shell
65
97
53
64
```

The ASCII values for 'A', 'a', '5', and '@' are 65, 97, 53, and 64 respectively. These values are part of the Unicode standard which includes ASCII as its first 128 characters.

## Example 2: Working with Non-ASCII Characters

This example shows how `ord()` handles characters beyond the ASCII range, including symbols and characters from different languages:

```py
# Unicode for emoji (smiling face)
print(ord('😀'))

# Unicode for Chinese character (means "center")
print(ord('中'))

# Unicode for Russian character (Cyrillic letter)
print(ord('Я'))

# Unicode for Euro symbol
print(ord('€'))
```

This example results in the following output:

```shell
128512
20013
1071
8364
```

As shown, the `ord()` function can handle characters from any language or symbol set in the Unicode standard, returning their unique numerical code points.

## Codebyte Example: Character Manipulation with `ord()`

This example demonstrates a practical application of the `ord()` function in a Caesar cipher implementation, which is a basic encryption technique:

```py
def caesar_encrypt(text, shift):
  """
  Encrypts a text using the Caesar cipher technique.

  Args:
    text: The text to encrypt
    shift: The number of positions to shift each letter

  Returns:
    The encrypted text
  """
  result = ""

  for char in text:
    # Check if character is a letter
    if char.isalpha():
      # Get the Unicode value
      char_code = ord(char)

      # Determine if it's uppercase or lowercase
      base = ord('A') if char.isupper() else ord('a')

      # Apply the shift (modulo 26 to wrap around the alphabet)
      shifted_code = (char_code - base + shift) % 26 + base

      # Convert back to a character
      result += chr(shifted_code)
    else:
      # Keep non-alphabetic characters unchanged
      result += char

  return result

# Example usage
original_text = "Hello, World!"
shift_value = 3
encrypted_text = caesar_encrypt(original_text, shift_value)

print(f"Original: {original_text}")
print(f"Encrypted (shift {shift_value}): {encrypted_text}")
```

In this example, the `ord()` function converts each character to its Unicode value, apply a shift, and then convert back to a character using the `chr()` function. This demonstrates how `ord()` can be used in practical text transformation scenarios.

## Frequently Asked Questions

### 1. What happens if I pass more than one character to `ord()`?

If you pass a string with more than one character to `ord()`, Python will raise a `TypeError`. The function is designed to work with exactly one character.

```py
try:
  print(ord('AB'))
except TypeError as e:
  print(f"Error: {e}")
```

The output for this code will be:

```shell
Error: ord() expected a character, but string of length 2 found
```

### 2. What is the relationship between `ord()` and `chr()`?

The `ord()` and `chr()` functions are complementary. `ord()` converts a character to its corresponding Unicode code point, while `chr()` converts a Unicode code point to its character representation.

```py
character = 'A'
code_point = ord(character)
print(f"ord('{character}') = {code_point}")

# Convert back using chr()
same_character = chr(code_point)
print(f"chr({code_point}) = '{same_character}'")
```

The output for this code will be:

```shell
ord('A') = 65
chr(65) = 'A'
```

### 3. Can `ord()` handle characters from any language?

Yes, `ord()` can handle any character that is part of the Unicode standard, which contains characters from virtually all modern written languages, as well as many symbols and emojis.
