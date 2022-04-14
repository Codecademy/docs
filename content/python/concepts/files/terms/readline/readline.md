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
---

The `.readline()` returns the first line of content from an open file.

## Syntax

```py
file.readline()
```

## Example

Use `.readline()` to read the first line of content from the **gullivers_travels.txt** file:

```python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.readline()
```
