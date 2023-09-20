---
Title: '.isalnum()'
Description: 'Takes a string and returns True if all the  characters are alphanumeric (A-Z, a-z, 0-9). Otherwise it returns False if the string contains any non-alphanumeric characters (@#$%-*)
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

The `.isalnum()` string method takes in a string and returns `True` if all the  characters are alphanumeric (A-Z, a-z, 0-9). Otherwise it returns `False` if the string contains any [non-alphanumeric](https://buildvirtual.net/a-guide-to-non-alphanumeric-characters/) characters (@#$%-*).

## Syntax

```py
string.isalnum()
```

## Example

Use `.isalnum()` to check if all the  characters are alphanumeric:

```py
my_string_1 = "string2023"

print(my_string_1.isalnum())
# Output: True

my_string_2 = "@lpha"

print(my_string_2.isalnum())
# Output: False
```

## Codebyte Example

Use `.isalnum()` to check if a `string` contains only alphanumeric letters or not:

```codebyte/python
string_1 = "AlphaNumeric001"
print(string_1.isalnum())
```

```codebyte/python
string_2 = "N*n@lphaneumeric"
print(string_2.isalnum())
```
