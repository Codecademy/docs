---
Title: 'collections.UserString'
Description: 'A wrapper class for string objects that makes subclassing easier.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A `UserString` is a class in the `collections` module. It is a custom wrapper for string objects, behaving like a string but allowing easier subclassing. Unlike directly subclassing [`str`](<(https://www.codecademy.com/resources/docs/python/dictionaries)>), `UserString` stores its content in the `.data` attribute.

**Note:** While `UserString` behaves like a string and supports the same operations, some methods return a regular `str` instead of another `UserString`.

## Syntax

```pseudo
myString = collections.UserString(seq)
```

- `seq`: It can be anything that can be converted into a `str` or `iterable of characters`, like a list or tuple of individual characters.

Return value:

- A `UserString` instance, which is an object that contains the content derived from `seq`.

## Example

The following example demonstrates the usage of the `UserString` method:

```py
from collections import UserString

myString = 'First example of a UserString!'
customString = UserString(myString)
print(customString.data)
```

This is the output of the declared code:

```shell
'First example of a UserString!'
```

## Codebyte Example

The following example creates a `UserString` and demonstrates its usage more in detail, along with a subclass that removes vowels:

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
