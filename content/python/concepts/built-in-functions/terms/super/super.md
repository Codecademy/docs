---
Title: 'super()'
Description: 'implicitly refer to the superclass'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Objects'
  - 'Inheritance'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `super()` function is built into python and is used to refer to the the superclass of an object without specifically using the parent name.

## Syntax

```pseudo
super().function()
super(type) 
```

## `super()`

`super()` returns a temporary object of the superclass, allowing the superclass’s methods to be called. This comes in handy when using [multiple inheritance](#multiple-inheritance).

## Example
In this case, the `.say_hi()` method is implemented utilizing `super()` inside `.intro()`:

```py
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

The output would be:

```shell
Hi! I am a Programming Language.
Python here!
```

