---
Title: "Python File Methods: `.close()`"
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
The `.close()` method allows the user to close an open file within the IDE.

## Syntax
***
```py
file.close()
```

## Example 1
***
Use `.close()` to close the opened `gullivers_travels.txt` file:
```codebyte/python
f = open("gullivers_travels.txt", "r", encoding='utf8')
f.close()
```
