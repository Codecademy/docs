---
Title: 'super()'
Description: 'Returns a temporary object that allows a given class to inherit the methods and properties of a parent or sibling class.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Objects'
  - 'Inheritance'
  - 'Classes'
  - 'Functions'
  **- 'Inheritance'**
  - 'Methods'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`super()`** function returns a temporary object that allows a given [class](https://www.codecademy.com/resource/docs/python/classes) to [inheritance](https://www.codecademy.com/resource/docs/python/inheritance) the methods and properties of a parent or sibling class.

## Syntax

```pseudo
super().function()
super(type) 
```

## `super()`

`super()` returns a temporary object of the superclass, allowing the superclass’s methods to be called. This comes in handy when using [multiple inheritance](#multiple-inheritance).

## Codebyte Example

In this case, the `.say_hi()` method is implemented utilizing `super()` inside `.intro()`:

```codebyte/python
# Base class
class ProgramLanguage:
  def say_hi(self):
    print("Hi! I am a Programming Language")

# Derived class
class Python(ProgramLanguage):
  def intro(self):
    super().say_hi()
    print("Python here!")

doc = Python()
doc.intro()
```
