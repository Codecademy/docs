---
Title: '.swapcase()'
Description: 'Takes a string and returns a copy of that string in which all lowercase letters are uppercase, and all uppercase letters are lowercase. Numbers and symbols are not changed.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

Takes a string and returns a copy of that string in which all lowercase letters are uppercase, and all uppercase letters are lowercase. Numbers and symbols are not changed.

## Syntax

```python
string.swapcase()
```

## Example 1

```python
message = "Hello, World!"

new_string = message.swapcase()

print(new_string)
# Output: "hELLO, wORLD!"
```

## Example 2

The `.swapcase()` method does not change the string it is used on:

```codebyte/py
my_string = "camelCasingIsFun"

my_string.swapcase()

print(my_string)
print(my_string.swapcase())
```
