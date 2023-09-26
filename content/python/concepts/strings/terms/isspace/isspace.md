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
  - 'paths/data-science'
---

The **`.isspace()`** string method takes in a string and returns `True` if all the characters in a string are whitespaces, otherwise `False`.

Whitespace characters include:

- Space (' ')
- Horizontal tab ('\t')
- Newline ('\n')
- Vertical tab ('\v')

## Syntax

```py
string.isspace()
```

## Example

The example below uses `.isspace()` to check if all characters in the string `txt` are whitespace characters:

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

The following example returns `True` because all the characters in the string `my_string` are whitespace characters:

```codebyte/python
my_string = "\v\n "
print(my_string.isspace())
```
