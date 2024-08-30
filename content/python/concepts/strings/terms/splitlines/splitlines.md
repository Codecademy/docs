---
Title: '.splitlines()'
Description: 'Used to split a multi-line string into a list of lines.'
Subjects:
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Formatting'
  - 'Lists'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

**`.splitlines()`** is a built-in string method in Python that is used to split a multi-line string into a list of lines. It recognizes different newline characters such as `\n`, `\r`, or `\r\n` and splits the string at those points. The method returns a list of strings, each corresponding to a line in the original multi-line string.

## Syntax

```pseudo
string.splitlines(keepends=False)
```

- `string`: This is the string on which to apply the `.splitlines()` method.
- `keepends` (optional): This is a boolean parameter. If `True`, the line break characters are included in the resulting lines. If `False` (the default), the line break characters are excluded.

## Examples

In this example, `.splitlines(keepends=True)` is used to include the line break characters in the resulting lines.

```py
multi_line_string = "This is line 1.\nThis is line 2.\nThis is line 3."

lines_with_breaks = multi_line_string.splitlines(keepends=True)

print(lines_with_breaks)

for line in lines_with_breaks:
  print(line)
```

This results in the following output:

```shell
['This is line 1.\n', 'This is line 2.\n', 'This is line 3.']
This is line 1.

This is line 2.

This is line 3.
```

In next example, `.splitlines()` is applied to a custom multi-line string with various line break characters (`\n`, `\r\n`, and `\r`).

```py
custom_multi_line_string = "Line A\nLine B\r\nLine C\rLine D"

custom_lines = custom_multi_line_string.splitlines()

print(custom_lines)

for line in custom_lines:
  print(line)
```

This results in the following output:

```shell
['Line A', 'Line B', 'Line C', 'Line D']
Line A
Line B
Line C
Line D
```

## Codebyte Example

The code below is runnable and uses `.splitlines()` to split `multi_line_string`:

```codebyte/python
multi_line_string = """This is line 1.
This is line 2.
This is line 3."""

lines = multi_line_string.splitlines()

print(lines)

for line in lines:
  print(line)
```
