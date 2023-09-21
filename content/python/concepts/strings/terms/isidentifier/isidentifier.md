---
Title: '.isidentifier()'
Description: 'Takes in a string and returns True if the string is a valid Python identifier, else returns False.'
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

The `.isidentifier()` string method takes in a string and returns `True` if the string is a valid Python identifier, else returns `False`.

## Syntax

```py
string.isidentifier()
```

- Python `identifiers` must start with a `letter (a-z, A-Z)` or an `underscore (_)` followed by letters, digits (0-9), or underscores.
- They cannot be a Python keyword like `if`, `else`, `while`, etc.

## Example1

Use `.isidentifier()` to check if a string is a valid Python identifier:

```py
my_string = "Codecademy"

print(my_string.isidentifier());
# Output: True
```

## Codebyte Example

Use `.isidentifier()` to check if `my_string` is a valid Python identifier:

```codebyte/python
my_string = "123Codecademy"
print(my_string.isidentifier());
```
