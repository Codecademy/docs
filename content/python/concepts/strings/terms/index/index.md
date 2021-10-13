---
Title: 'index()'
Description: 'The `index()` method searches through a string variable for the occurrence of a pattern or a substring.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/computer-science'
---

The `index()` method searches through a string variable for the occurrence of a pattern or a substring.

If the substring is not found, a `ValueError` will be raised.

## Syntax

```py
string.index(pattern, start, end)
```

In the above syntax for the `index()` method:

- `string` is the string variable to search through. (Required)
- `pattern` is the pattern or substring to search for. (Required)
- `start` is the starting index of the slice of `string` to search through. (Optional, Default: start of the string - index `0`)
- `end` is the index of the slice of `string` to search up to (non-inclusive). (Optional, Default: end of the string )

## Example 1

Use `index()` to search for the occurrence of `"Python"` in the string `my_string`:

```py
my_string = "Learning Python is fun!"
my_string.index("Python")

# Output: 9 
# The starting index of the substring "Python" is 9.
```

## Example 2

Use `index()` to search for the occurrence of `"Coding"` in the string `my_string`:

```py
my_string = "Learning Python is fun!"
my_string.index("Coding")

# Output: ValueError: substring not found
```

## Codebyte Example

Use `index()` to search for the occurrence of `"code"` in a slice of the string `my_string` (i.e. from the character at index 8 up to, but not including, the character at index 16):

```codebyte/python
my_string = "Learning to code is fun!"
my_string.index("code", 8, 16)
```
