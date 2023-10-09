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
example = 'Hi, Welcome to Docs'
example = example.lstrip('hiHI, ')
print(example)
#Output: Welcome to Docs
```
>**Note:** Remember since `.lstrip()` is a method, it returns a new string and does not modify the original string


## Codebyte Example
```codebyte/python
#runnable code block for lstrip()
exampleString = '     User, Welcome to docs!'
exampleString = exampleString.lstrip()

print(exampleString)

exampleString = exampleString.lstrip('User,')
print(exampleString)

```
