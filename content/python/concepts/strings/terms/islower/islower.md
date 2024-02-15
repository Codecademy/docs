---
Title: '.islower()'
Description: 'Takes in a string and returns True if all the letters in the string are in lowercase, else returns False. Ignores spaces, newlines, numeric and special characters in the string.'
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

The `.islower()` string method takes in a string and returns `True` if all the letters in the string are in lowercase, else returns `False`. This method ignores spaces, newlines, numeric, and special characters in the string.

## Syntax

```py
string.islower()
```

## Example

Use `.islower()` to check if a string contains only lowercase letters:

```py
my_string = "code more!"

print(my_string.islower())
# Output: True
```

## Codebyte Example

Use `.islower()` to check if `my_string` contains only lowercase letters, ignoring the dashes, exclamation point, and newline:

```codebyte/python
my_string = "Learn--to--code--from--Codecademy!\n"
print(my_string.islower())
```
