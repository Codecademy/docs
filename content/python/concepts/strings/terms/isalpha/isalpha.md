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

The **`.isalpha()`** string method checks if all of the characters in a string are letters of the alphabet (`a-z`). The letters can be lowercase or uppercase. If the string contains only alphabet letters it returns `True`, otherwise it returns `False`. Whitespace, numbers, and symbols are not considered to be part of the alphabet.

## Syntax

```pseudo
string.isalpha()
```

The `.isalpha()` method doesn't have any parameters.

## Example

In the following example the `.isalpha()` method is used to check several strings:

```python
str1 = "ABC"
str2 = "Python is fun!"
str3 = "zyx"

print(str1.isalpha())
print(str2.isalpha())
print(str3.isalpha())
```

The above example will show the following output:

```shell
True
False
True
```

## Codebyte Example

The following code is runnable and uses `.isalpha()` to check `str`:

```codebyte/python
str = "Coding123"

print(str.isalpha())
```
