---
Title: '.capitalize()'
Description: 'Takes in a string, and returns a copy of the string in capital case.'
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

The **`.capitalize()`** method takes in a string, and returns a copy of the string with the first character in upper case, and the remaining characters in lower case.

## Syntax

```pseudo
"string".capitalize()
```

- This method does not have any parameters.
- It does not modify the original string, it returns a copy of the string with the applicable case changes.

## Example

The following example applies `.capitalize()` to a string in which all the characters are uppercase:

```py
print("WELCOME TO CODECADEMY DOCS!".capitalize())
```

This will result in:

```shell
Welcome to codecademy docs!
```

## Codebyte Example

The following example is runnable and uses the `.capitalize()` method:

```codebyte/python
text = "welcome to new york city"
print(text.capitalize())
```
