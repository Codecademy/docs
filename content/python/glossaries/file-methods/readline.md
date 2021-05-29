---
Title: ".readline()"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Files"
  - "Methods"
  - "Functions"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## Definition

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
