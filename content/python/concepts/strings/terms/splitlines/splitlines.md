---
Title: '.splitlines()'
Description: 'Splits a string into a list of lines'
Subjects:
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Formatting'
  - 'Lists'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

**`.splitlines()`** is a built-in [string](https://www.codecademy.com/resources/docs/python/strings) method in Python method in Python that splits a multi-line string into a list of lines. It recognizes different newline characters such as `\n`, `\r`, or `\r\n` and splits the string at those points. The method returns a list of strings, each corresponding to a line in the original multi-line string.

## Syntax

```pseudo
string.splitlines(keepends=False)
```

**Parameters:**

- `string`: This is the string on which to apply the `.splitlines()` method.
- `keepends` (Optional): This is a Boolean parameter. If `True`, the line break characters are included in the resulting lines. If `False` (default), the line break characters are excluded.

**Return value:**

The `.splitlines()` method returns a list of strings, each corresponding to a line in the original multi-line string.

## Example 1: Basic Usage of `.splitlines()`

In this example, `.splitlines()` is applied to a custom multi-line string with various line break characters (`\n`, `\r\n`, and `\r`):

```py
custom_multi_line_string = "Line A\nLine B\r\nLine C\rLine D"

custom_lines = custom_multi_line_string.splitlines()

print(custom_lines)

for line in custom_lines:
  print(line)
```

The output of this code is:

```shell
['Line A', 'Line B', 'Line C', 'Line D']
Line A
Line B
Line C
Line D
```

## Example 2: Working with File Input

This example demonstrates how `.splitlines()` helps when reading entire [file](https://www.codecademy.com/resources/docs/python/files) content as a string and needing to process it line by line:

```py
with open("example.txt", "r") as file:
  content = file.read()

lines = content.splitlines()

print(lines)
```

The output of this code is (assuming file content is multi-line):

```shell
['This is line 1', 'This is line 2', 'This is line 3']
```

## Codebyte Example: Keeping Line Endings

In this codebyte example, `.splitlines(keepends=True)` is used to include the line break characters in the resulting lines:

```py
multi_line_string = "This is line 1.\nThis is line 2.\nThis is line 3."

lines_with_breaks = multi_line_string.splitlines(keepends=True)

print(lines_with_breaks)

for line in lines_with_breaks:
  print(line)
```

## Frequently Asked Questions

### 1. How is `.splitlines()` different from `.split('\n')`?

`.split('\n')` only handles `\n` as a newline, while `.splitlines()` handles all common line breaks (`\n`, `\r`, `\r\n`). This makes it more robust for cross-platform text handling.

### 2. Can `.splitlines()` be used on an empty string?

Yes. In that case, `.splitlines()` returns an empty list:

```py
print("".splitlines()) # Output: []
```

### 3. What happens if there are trailing newlines while using `.splitlines()`?

Trailing newlines create extra empty strings only if `keepends=True` in `.splitlines()`:

```py
print("text\n".splitlines()) # Output: ['text']

print("text\n".splitlines(True)) # Output: ['text\n']
```
