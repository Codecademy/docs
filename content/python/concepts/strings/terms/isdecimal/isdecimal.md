---
Title: '.isdecimal()'
Description: 'Checks whether a string consists of only decimal characters.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The method **`.isdecimal()`** takes a string parameter and returns `True` if and only if the following two conditions are met:

1. The string is not empty (has at least one character).
2. All of the characters in the string are decimal characters.

Otherwise, `.isdecimal()` returns `False`.

A decimal character is a character that represents an integer from `0` to `9`.

## Syntax

`.isdecimal()` can be called in two ways:

```pseudo
string_variable.isdecimal()
```

OR

```pseudo
str.isdecimal(string_variable)
```

Where `string_variable` is the string parameter.

## Example

```python
print("783".isdecimal())
print("not a decimal".isdecimal())
print(str.isdecimal(""))
print(str.isdecimal("\u0033"))
```

The above gives the following output:

```shell
True
False
False
True
```

Note that the fourth call to `.isdecimal()` returns `True` because `"\u0033"` is the unicode encoding of the decimal character `"3"`.

## Codebyte Example

The code below is runnable, change the value of `your_string` to test the `.isdecimal()` method.

```codebyte/python
your_string = "Try changing this string!"
print(your_string.isdecimal())
```
