---
Title: '.istitle()'
Description: 'Check if a string is in title case.'
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

The `.istitle()` string method returns `True` if the string is in title case and `False` otherwise. Title case means that the first letter of each word is capitalized, and all other letters in the word are lowercase.

## Syntax

```py
string.istitle()
```

## Example 1

Using `.istitle()` to check if a string is in title case:

```py
my_string = "Codecademy Docs"

print(my_string.istitle())
```

Output:

```shell
True
```

## Example 2

Using `.istitle()` to check if different capitalizations of the same string are in title case:

```py
str1 = "codecademy docs"
str2 = "Codecademy Docs"
str3 = "Codecademy docs"
str4 = "coDEcademy dOcs"

print(str1.istitle())
print(str2.istitle())
print(str3.istitle())
print(str4.istitle())
```

Output:

```shell
False
True
False
False
```

## Codebyte Example

Use `.istitle()` to check if a string is in title case:

```codebyte/python
my_string = "I love Codecademy Docs!"

print(my_string.istitle())
```
