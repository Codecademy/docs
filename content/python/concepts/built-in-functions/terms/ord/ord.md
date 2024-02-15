---
Title: 'ord()'
Description: 'Returns the integer that represents the Unicode character argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Characters'
  - 'Unicode'
  - 'Integers'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`ord()`** function returns the integer that represents the Unicode character argument. It is the inverse function of [`chr()`](https://www.codecademy.com/resources/docs/python/built-in-functions/chr) which provides the Unicode character for the integer passed.

## Syntax

```pseudo
ord(char)
```

The function takes a character argument `char` and returns the integer value that represents it in Unicode.

## Example

The example below demonstrates how to provide an argument to `ord()` and print the result.

```py
print(ord('H'))
```

This produces the output:

```shell
72
```

## Codebyte Example

In the example below, the function `ord()` is used on each character in the string `word`. Each character is printed alongside the integer value that represents it.

> **Note:** Letters 'C' and 'c' do not return the same integer. This is because uppercase and lowercase letters are represented by different integers in Unicode.

```codebyte/python
word = "Codecademy!"
for char in word:
  print(char, ord(char))
```
