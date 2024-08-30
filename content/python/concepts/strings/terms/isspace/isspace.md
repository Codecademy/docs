---
Title: '.isspace()'
Description: 'Checks if all the characters in a string are whitespace characters.'
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

The **`.isspace()`** string method takes in a string and returns `True` if the entire string is composed of whitespace characters, otherwise `False`.

Whitespace characters include:

- Space (' ')
- Horizontal tab ('\t')
- Newline ('\n')
- Vertical tab ('\v')

## Syntax

```pseudo
some_str.isspace()
```

`some_str` is the string being checked for whitespace.

## Example

The example below uses `.isspace()` to evaluate the string `txt`:

```py
txt = "   Welcome   "
x = txt.isspace()
print(x)
```

The output will look like this:

```shell
False
```

## Codebyte Example

The following example is runnable and checks if `my_string` consists entirely of whitespace characters:

```codebyte/python
my_string = "\v\n "
print(my_string.isspace())
```
