---
Title: ".truncate()"
Description: "Allows the user to resize the file to a given number of bytes when the file is accessed through the append mode."
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Files"
  - "Methods"
  - "Functions"
  - "Strings"
CatalogContent:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## Definition

Allows the user to resize the file to a given number of bytes when the file is accessed through the append mode.

## Syntax

```py
file.truncate(n)
```

## Example 1

Use `.truncate()` to change the size of the **gullivers_travels.txt** file from 603,908 bytes to 100:

```codebyte/python
f = open("gullivers_travels.txt", "a")

f.truncate(100)
f.close()

f = open("gullivers_travels.txt", "r")
print(f.read())
```
