---
Title: '.isprintable()'
Description: 'Returns True if all characters in the string are printable or the string is empty, otherwise False if any character in the string is nonprintable.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'String'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

**`.isprintable()`** is a string method that returns a boolean value `True` if all characters in the string are printable or if it's empty, and `False` if any character in the string is non-printable.

## Syntax

```pseudo
mystr.isprintable()
```

This method is called on a string `mystr` and returns `True` if all characters in `mystr` are printable.

## Example

In the following example, `.isprintable()` is used to find out if all characters in the strings are printable.

```python
str = "Hello World"
str1 = "Hello World\n"
str2 = "@Hello $World"
str3 = "\tHello World"

print(str.isprintable())
print(str1.isprintable())
print(str2.isprintable())
print(str3.isprintable())
```

The output of the above code will be:

```shell
True
False
True
False
```
