---
Title: "Python File Functions: `.writable()`"
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
The `.writable()` file function allows the user to check if a file is writable or not. The function will return `True` if the file is writable and accessed in append or write mode, and `False` if it was accessed in read mode.

## Syntax
***
```py
file.writable()
```

## Example 1
***
Use `.writable()` to check if the `gullivers_travels.txt` file is writable:
```codebyte/python
f = open("gullivers_travels.txt", "a")
f.writable()
```

## Example 2
***
Use `.writable()` to check if the `gullivers_travels.txt` file is writable:
```codebyte/python
f = open("gullivers_travels.txt", "r")
f.writable()
```
