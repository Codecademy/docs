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
  - 'Inheritance'
  - 'Methods'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`super()`** function returns a temporary object that allows a given [class](https://www.codecademy.com/resources/docs/python/classes) to [inherit](https://www.codecademy.com/resources/docs/python/inheritance) the methods and properties of a parent or sibling class.

## Syntax

```pseudo
super()
super(type, obj)
```

`.method()` is the accessed method of the parent class. `type` specifies the type object of the parent class and `obj` is an instance or subtype of the `type`.

```
class A():
  method(arg):
    #Method code starts here

class B():
  method(arg):
    #Method code starts here
```

The super() function allows the .method() of child class B to access the .method of parent class A.

## `super()`

`super()` returns a temporary object of the superclass, allowing the superclass’s methods to be called. This comes in handy when using multiple inheritance to derive a class from more than one base class.

## Example

In the following example, the `.say_hi()` method is implemented utilizing `super()` inside `.intro()` for Python and uses `super(type, object)` inside `.intro()` for Java :

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

# Derived class
class Java(ProgramLanguage):
  def intro(self):
    super(Python, self).say_hi()
    print("Java here!")

doc1 = Python()
doc1.intro()
doc2 = Java()
doc2.intro()
```
