---
Title: '.upper()'
Description: 'Takes a string, and returns a copy of that string in which all letters are uppercase. Numbers and symbols are not changed.'
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

The **`.upper()`** method takes a string and returns a copy of that string in which all letters are uppercase. Numbers and symbols are not changed.

> **Note:** The `.upper()` method does not change the string it is used on.

## Syntax

```pseudo
string.upper()
```

## Example

The following example shows how `.upper()` returns a string with all its letters in uppercase. It also shows that the original string remains unchanged:

```py
my_string = "shout"

print(my_string)
print(my_string.upper())
print(my_string)
```

This would output:

```shell
shout
SHOUT
shout
```

## Codebyte Example

The following example shows how the `.upper()` method can be used to compare strings:

```codebyte/python
string1 = "Green Tigers"
string2 = "gReEn tIgErs"

if string1 == string2:
  print("These strings are already the same")
elif string1.upper() == string2.upper():
  print("They are the same when you use the .upper() method")
else:
  print("They are NOT the same")
```
