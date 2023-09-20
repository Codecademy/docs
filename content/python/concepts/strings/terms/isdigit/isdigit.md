---
Title: '.isdigit()'
Description: 'Takes in a string and returns True if all characters in the string are digits and there is at least one character, False otherwise. Digits include decimal characters and digits that need special handling, such as the compatibility superscript digits. This covers digits which cannot be used to form numbers in base 10, like the Kharosthi numbers.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The `.isdigit` string method takes in a string and returns `True` if all characters in the string are digits and there is at least one character, `False` otherwise. Digits include decimal characters and digits that need special handling, such as the compatibility superscript digits. This covers digits which cannot be used to form numbers in base 10, like the Kharosthi numbers.

## Syntax

```pseudo
string.isdigit()
```

## Example

```py
my_string1 = "123"
my_string2 = "123AA"

print(my_string1.islower())
# Output: True

print(my_string2.islower())
# Output: False
```

## Codebyte Example

Use `.isdigit()` to check if `my_string` contains only digits, `without ignoring` the dashes, exclamation point, and newline:

```codebyte/python
my_string = "!--1234--\n"
print(my_string.isdigit())
# Output: False
```
