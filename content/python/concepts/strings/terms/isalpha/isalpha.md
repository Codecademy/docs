---
Title: '.isalpha()'
Description: 'Returns True if all characters in a string are letters of the alphabet, otherwise it returns False.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Strings'
  - 'Characters'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.isalpha()`** string method checks if all of the characters in a string are letters of the alphabet (`a-z`). The letters can be lowercase or uppercase. If the string only contains letters of the alphabet it returns `True`, otherwise it returns `False`. Whitespace, numbers, and symbols are not considered to be part of the alphabet.

## Syntax

```pseudo
my_string.isalpha()
```

The `.isalpha()` method doesn't have any parameters.

## Example

The following example uses `.isalpha()` to check `str`:

```py
str = "Coding123"

print(str.isalpha())
```

This example will output:

```shell
False
```

## Codebyte Example

The following code is runnable and uses `.isalpha()` to check several strings:

```codebyte/python
str1 = "ABC"
str2 = "Python is fun!"
str3 = "zyx"

print(str1.isalpha())
print(str2.isalpha())
print(str3.isalpha())
```
