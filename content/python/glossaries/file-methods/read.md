---
Title: ".read()"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Files"
  - "Methods
  - "Functions"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## Definition

Allows the user to read the contents of an open file.

## Syntax

```py
file.read()
```

## Example 1

Use `read()` to read the full contents of the `gullivers_travels.txt` file:

```codebyte/python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.read()
```

## Example 2

Use `read()` to read the first 100 characters of the **gullivers_travels.txt** file:

```codebyte/python
f = open("gullivers_travels.txt", "r", encoding='utf8')

f.read(100)
```
