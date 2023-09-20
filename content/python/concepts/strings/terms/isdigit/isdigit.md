---
Title: '.isdigit()'
Description: 'This method under string class that checks if all the elements in the string are digits, decimals also including special cases like compatibility superscript digits.Returns True in the above cases and also requires atleast one character in the string. Returns False otherwise.'

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

The `.isdigit()` method under string class that checks if all the elements in the string are digits, decimals also including special cases like compatibility superscript digits.Returns True in the above cases and also requires atleast one character in the string. Returns False otherwise.

## Syntax

```pseudo
string.isdigit()
```

## Example

```py
my_string1 = "123"
my_string2 = "123AA"

print(my_string1.isdigit())
# Output: True

print(my_string2.isdigit())
# Output: False
```

## Codebyte Example

Use `.isdigit()` to check if `my_string` contains only digits, `without ignoring` the dashes, exclamation point, and newline:

```codebyte/python
my_string = "!--1234--\n"
print(my_string.isdigit())
# Output: False
```
