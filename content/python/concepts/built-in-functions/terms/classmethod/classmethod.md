---
Title: 'classmethod()'
Description: 'Converts a given function into a class method.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Character Encoding'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

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
