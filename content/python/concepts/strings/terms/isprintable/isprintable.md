---
Title: '.isprintable()'
Description: 'Returns True if all characters in the string are printable or the string is empty. It returns False if any character in the string is nonprintable.'
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

The **`.isprintable()`** is a string method which returns a boolean value True if all charachters in the string are printable or if it's empty and False if any charachter in the string is nonprintable.

## Syntax

```pseudo
str = "Hello World"
str.isprintable()
```

This method is called on the String `str`, whose charachters are all printable and thus returning True.

## Example

In the following example, `.isprintable()` is used to find out if all charachters in the strings are printable.

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