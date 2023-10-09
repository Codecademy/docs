---
Title: '.istitle()'
Description: 'Checks if a given string is in title case.'
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

The **`.istitle()`** string method returns `True` if the string is in title case and `False` otherwise. Title case means that the first letter of each word is capitalized, and all other letters in the word are in lowercase.

## Syntax

```pseudo
my_string.istitle()
```

## Example

The code below uses `.istitle()` to check if a string is in title case:

```py
my_string = "I love Codecademy Docs!"

print(my_string.istitle())
```

Output:

```shell
False
```

## Codebyte Example

The following code is runnable and uses `.istitle()` to check if different capitalizations of the same string are in title case:

```codebyte/python
str1 = "codecademy docs"
str2 = "Codecademy Docs"
str3 = "Codecademy docs"
str4 = "coDEcademy dOcs"

print(str1.istitle())
print(str2.istitle())
print(str3.istitle())
print(str4.istitle())
```
