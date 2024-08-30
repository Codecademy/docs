---
Title: '.lstrip()'
Description: 'Removes leading characters from a string.'
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

The **`.lstrip()`** method removes the leading characters from a string.

## Syntax

```pseudo
string.lstrip(chars)
```

The `.lstrip()` method removes the whitespace at the beginning of a string. The optional `chars` parameter is a string for designating specific leading characters to be removed.

## Examples

Unless `chars` is specified, `.lstrip()` removes the leading whitespace. If `chars` is specified `.lstrip()` will remove any leading characters in chars from the string. `chars` can be in any order.

```python
hi = '     Hi there'
print(hi.lstrip())

filePath = 'cd ./user/home'
print(filePath.lstrip('cd ./'))

example = 'Hi, Welcome to Docs'
example = example.lstrip('hiHI, ')
print(example)
```

This code will result in the following output:

```shell
Hi there
user/home
Welcome to Docs
```

> **Note:** `.lstrip()` returns a new string and does not modify the original string.

## Codebyte Example

The following code is runnable and uses the `.lstrip()` method.

```codebyte/python
exampleString = '     User, Welcome to docs!'
exampleString = exampleString.lstrip()

print(exampleString)

exampleString = exampleString.lstrip('User,')
print(exampleString)
```
