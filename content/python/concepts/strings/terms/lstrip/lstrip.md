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

## Example
Unless `chars` is specified, `.lstrip()` removes the leading whitespace:
```python
hi = '     Hi there'
print(hi.lstrip()) 
#Output: Hi there
```

If `chars` is specified `.lstrip()` will remove any leading characters in chars from the string:
```python
filePath = 'cd ./user/home'
print(filePath.lstrip('cd ./'))
#Output: user/home
```

`chars` can be in any order:
```python

```
>**Note:** Remember since `.lstrip()` is a method, it returns a new string and does not modify the original string

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
