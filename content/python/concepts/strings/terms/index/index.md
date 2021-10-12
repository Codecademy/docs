---
Title: '.index()'
Description: 'Search through a string for the occurrence of a pattern, or a substring.'
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

- Search through a string for the occurrence of a pattern, or a substring.
- Return the starting index of the first occurrence of the pattern or substring.
- Raise `ValueError` if the pattern is not found.

## Syntax

```py
string.index(pattern,start,end)
```

In the above syntax for the `index()` method:

- `string`: The string that you need to search. (Required)
- `pattern`: The pattern that you are searching for. (Required)
- `start`: The starting index of the slice of `string` that you need to search through. (Optional, Default: start of the string - index `0`)
- `end`: The index of the slice of `string` that you need to search up to. (Optional, Default: end of the string )

## Example 1

Use `index()` method to search for the occurrence of `"Python"` in the string `my_string`:

```py
my_string = "Learning Python is fun!"
my_string.index("Python")

#Output
9 #as the starting index of the substring "Python" is 9
```

## Example 2

Use `index()` method to search for the occurrence of `"Coding"` in the string `my_string`:

```py
my_string = "Learning Python is fun!"
my_string.index("Coding")

#Output
ValueError: substring not found #as "Coding" does not occur in the string
```

## Codebyte Example

Use `index()` method to search for the occurrence of `"code"` in a slice of the string `my_string`, that is `my_string[8:16]`:

```codebyte/py
my_string = "Learning to code is fun!"
my_string.index("code",8,16)
```
