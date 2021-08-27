---
Title: '.readline()'
Description: 'Returns the first line of content from an open file.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Methods'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Returns the first line of content from an open file.

## Syntax

```py
file.readline()
```

## Example 1

Use `readline()` to read the first line of content from the `gullivers_travels.txt` file:

```codebyte/python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.readline()
```
