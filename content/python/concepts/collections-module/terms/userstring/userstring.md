---
Title: 'collections.UserString'
Description: 'A custom wrapper for string objects.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A `UserString` is a class in the `collections` module. It is a custom wrapper for string objects, behaving like a string but allowing easier subclassing. Unlike directly subclassing [`str`](<(https://www.codecademy.com/resources/docs/python/dictionaries)>), `UserString` stores its content in the `.data` attribute. The seq parameter passed at initialization can be anything that can be converted into a `str`.

**Note:** A `UserString` is a wrapper class that behaves like a sequence. The actual string is stored in the `.data` attribute.

## Syntax

```pseudo
myString = collections.UserString(seq)
```

A `UserString` can be initialized either as a sequence of chars or a string. It doesn't provide any additional method.

## Codebyte Example

The following example creates a `UserString` from an iterable (a string) and outputs various characteristics of the `UserString`:

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
