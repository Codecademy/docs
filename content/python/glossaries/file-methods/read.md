---
Title: "Python File Methods: `read()`"
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
The `read()` method allows the user to read the contents of an open file.

## Syntax
***
```py
file.read()
```

## Example 1
***
Use `read()` to read the full contents of the `gullivers_travels.txt` file:
```codebyte/python
f = open("gullivers_travels.txt", "r", encoding='utf8')
f.read()
```

## Example 2
***
Use `read()` to read the first 100 characters of the `gullivers_travels.txt` file:
```codebyte/python
f = open("gullivers_travels.txt", "r", encoding='utf8')
f.read(100)
```
