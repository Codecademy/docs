---
Title: '.isupper()'
Description: 'Takes in a string and returns True if all the letters in the string are in uppercase, else returns False. Ignores spaces, newlines, numeric and special characters in the string.'
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

The `.isupper()` string method takes in a string and returns `True` if all the letters in the string are in uppercase, else returns `False`. This method ignores spaces, newlines, numeric, and special characters in the string.

## Syntax

```py
string.isupper()
```

## Example

Use `.isupper()` to check if a string contains only uppercase letters:

```py
my_string = "Python3"

print(my_string.isupper())
# Output: False
```

## Codebyte Example

Use `.isupper()` to check if `my_string` contains only uppercase letters, ignoring the dashes:

```codebyte/python
my_string = "--PYTHON3--"
print(my_string.isupper())
```
