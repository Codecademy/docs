---
Title: "classmethod()"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Methods"
  - "Character Encoding"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## Definition

Converts a given function into a class method.

## Syntax

```py
classmethod(function)
```

## Example 1

Use `classmethod()` to create the `Codecademy` class method:

```py
class Student:

    name = "Codecademy"

    def print_name(obj):
        print("Welcome to...", obj.name)

Student.print_name = classmethod(Student.print_name)

Student.print_name()
```
