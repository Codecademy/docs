---
Title: 'UserString'
Description: 'A wrapper class for string objects that makes subclassing easier.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **`UserString`** is a class in the `collections` module. It is a custom wrapper for string objects, behaving like a string but allowing easier subclassing. Unlike directly subclassing `str`, `UserString` stores its content in the `.data` attribute. The `seq` parameter passed at initialization can be any object that can be converted into a string.

> **Note:** While `UserString` behaves like a string and supports the same operations, some methods return a regular `str` instead of another `UserString`.

## Syntax

```pseudo
myString = collections.UserString(seq)
```

A `UserString` can be initialized either as a sequence of chars or a string. It doesn't provide any additional method.

## Codebyte Example

The following example creates a `UserString` and demonstrates its usage, along with a subclass that removes vowels:

```codebyte/python
from collections import UserString
myString = 'Welcome to Codecademy Docs!'
customString = UserString(myString)
print(f"My personal UserString: {customString.data}\n")
print(f"{customString.upper()}\n")
print(f"Substring of the first word: {customString[0 : 7]}\n")

class NoVowels(UserString):
  def __init__(self, seq):
    # Remove vowels from the string
    super().__init__(''.join(ch for ch in seq if ch.lower() not in "aeiou"))

s = NoVowels("Hello World")
print(f"Word without any vowels left: {s}")
```
