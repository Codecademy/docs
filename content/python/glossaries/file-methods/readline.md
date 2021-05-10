---
Title: "Python File Methods: `readline()`"
Subjects:
  - "Language Fluency"
  - "Code Foundations"
Tags:
  - "Function"
  - "Methods"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---

## Definition
***
The `readline()` method returns the first line of content from an open file.

## Syntax
***
```py
file.readline()
```

## Example 1
***
Use `readline()` to read the first line of content from the `gullivers_travels.txt` file:
```codebyte/python
f = open("gullivers_travels.txt", "r", encoding='utf8')
f.readline()
```
