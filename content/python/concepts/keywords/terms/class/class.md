---
Title: 'class'
Description: 'Used for defining classes in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Classes'
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`class`** keyword is used for defining [classes](https://www.codecademy.com/resources/docs/python/classes) in Python.

## Syntax

```pseudo
class ClassName:
  # Class body
```

The name of the class should be in CamelCase. The indented class body contains definitions for any attributes or methods. Class definitions cannot be empty, so the `pass` statement can be used as a placeholder to avoid errors.

```pseudo
class ClassName:
  pass
```

## Codebyte Example

The following example is a small Python class made with the `class` keyword:

```codebyte/python
class Student:
  def __init__(self, name, major):
    self.name = name
    self.major = major

code_ninja = Student("Code Ninja", "Computer Science")

print(f"Student name: {code_ninja.name}")
print(f"Major: {code_ninja.major}")
```
