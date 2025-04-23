---
Title: '.strip()'
Description: 'Removes leading and trailing whitespace or specified characters from a string'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.strip()`** method removes leading and trailing whitespace characters from a string in Python. This versatile string method is essential for cleaning data, processing user inputs, and formatting text.

By default, `.strip()` removes whitespace, but it can also be customized to remove specific characters from both ends of a string.

## Syntax

```pseudo
string.strip(chars)
```

**Parameters:**

- `chars` (optional): A string specifying the set of characters to be removed from both ends of the string. If omitted, all types of leading and trailing whitespace (spaces, tabs, newlines, etc.) are removed by default.

**Return value:**

- Returns a new string with the specified leading and trailing characters removed.

> **Note:** `.strip()` only removes characters from the beginning and end of the string. Characters in the middle remain unchanged.

## Example 1: Remove leading and trailing whitespace from a string

The most common use of `.strip()` is to remove unnecessary whitespace:

```py
text = "  Python string methods are useful!  "
cleaned_text = text.strip()
print(cleaned_text)
```

This example results in the following output:

```shell
Python string methods are useful!
```

The leading and trailing spaces have been removed while preserving the spaces between words.

## Example 2: Remove characters from a string

The `.strip()` method can also remove specific characters from both ends of a string:

```py
text = "###Python Programming###"
cleaned_text = text.strip('#')
print(cleaned_text)
```

This example results in the following output:

```shell
Python Programming
```

All '#' characters from the beginning and end of the string are removed.

## Codebyte Example: Exploring Different strip() Use Cases

The following interactive example demonstrates multiple ways to use the `.strip()` method, including removing whitespace, specific characters, and handling different string formats:

```codebyte/python
# Demonstrating different uses of strip()

# Basic whitespace removal
text1 = "   Hello World!   "
print(f"Original: '{text1}'")
print(f"Stripped: '{text1.strip()}'")

# Remove specific characters
text2 = "...Python is amazing!..."
print(f"\nOriginal: '{text2}'")
print(f"Stripped: '{text2.strip('.')}'")

# Multiple characters to strip
text3 = "!@#$%^Python Programming$%^@!"
print(f"\nOriginal: '{text3}'")
print(f"Stripped: '{text3.strip('!@#$%^')}'")

# No characters to strip
text4 = "Python"
print(f"\nOriginal: '{text4}'")
print(f"Stripped: '{text4.strip()}'")

# Strip with newlines and tabs
text5 = "\n\t Python \t\n"
print(f"\nOriginal: '{text5}'")
print(f"Stripped: '{text5.strip()}'")
```

## Frequently Asked Questions

### 1. What are the 3 methods to trim a string in Python?

Python provides three methods to trim strings:

1. `.strip()`: Removes characters from both the beginning and end of a string.
2. [`.lstrip()`](https://www.codecademy.com/resources/docs/python/strings/lstrip): Removes characters only from the beginning (left side) of a string.
3. [`.rstrip()`](https://www.codecademy.com/resources/docs/python/strings/rstrip): Removes characters only from the end (right side) of a string.

All three methods remove whitespace by default if no characters are specified.

### 2. What is strip and split in Python?

These are two different string methods with distinct purposes:

- `.strip()` removes specified characters (or whitespace by default) from the beginning and end of a string.
- [`.split()`](https://www.codecademy.com/resources/docs/python/strings/split) divides a string into a list of substrings based on a delimiter (space by default).

Example:

```py
text = "  Hello, World!  "
stripped_text = text.strip()  # Returns "Hello, World!"
split_text = text.split(',')  # Returns ["  Hello", " World!  "]
```

### 3. What is whitespace in Python?

Whitespace in Python refers to characters that create space in text but are not visible when printed. These include:

- Space character (' ')
- Tab character ('\t')
- Newline character ('\n')
- Carriage return ('\r')
- Form feed ('\f')
- Vertical tab ('\v')

The `.strip()` method, when used without arguments, removes all these whitespace characters from both ends of a string.
