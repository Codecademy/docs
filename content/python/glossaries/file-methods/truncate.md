---
Title: "Python File Functions: `.truncate()`"
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
The `.truncate()` file function allows the user to resize the file to a given number of bytes when the file is accessed through the append mode.

## Syntax
***
```py
file.truncate(n)
```

## Example 1
***
Use `.truncate()` to change the size of the `gullivers_travels.txt` file from 603,908 bytes to 100:
```codebyte/python
f = open("gullivers_travels.txt", "a")
f.truncate(100)
f.close()

f = open("gullivers_travels.txt", "r")
print(f.read())
```
