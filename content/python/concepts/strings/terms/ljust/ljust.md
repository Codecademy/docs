---
Title: '.ljust()'
Description: 'Left-aligns a string with a specified fill character'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.ljust()`** method left-aligns a string with a specified fill character

## Syntax

```pseudo
string.ljust(length, fillchar)
```

The `.ljust()` method is used to left align the string with the width specified. If the specified width is more than the length of the string, then the remaining part of the string is filled with `fillchar`

## Examples

The default fillchar is a blank space. The original string is retrieved if the width is less than or equal to the given string length.

```python
text = 'Hello Contributors'
left_aligned_text = text.ljust(20, '!')
print(left_aligned_text)

```

This code will result in the following output:

```shell
Hello Contributors!!

```

> **Note:** `.ljust()` returns a new string and does not modify the original string and only one specific character can be mentioned to fill the remaining part of the string with fillchar.

## Codebyte Example

The following code is runnable and uses the `.ljust()` method.

```codebyte/python
exampleString = 'User, Welcome to docs'
exampleString = exampleString.ljust(22, '!')
print(exampleString)

```
