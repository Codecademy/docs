---
Title: 'lstrip'
Description: 'Removes leading characters from a string'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'https://www.codecademy.com/learn/learn-python-3'
  - 'https://www.codecademy.com/learn/paths/computer-science'
---

The **`.lstrip()`** method removes the leading characters from a string

## Syntax
```pseudo
string.lstrip(chars)
```
The `.lstrip()` method defaultly removes the whitespace at the beginning of a string. The optional `chars` parameter is a string that allows you to specify leading characters to be removed.

[Text, code, images, parameters, etc. about the syntax]

## Example

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/python
#runnable code block for lstrip()
exampleString = '     User, Welcome to docs!'
exampleString.lstrip()

print(exampleString)

exampleString.lstrip('User,')
print(exampleString)

```
