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
super(type, obj)
```

The `type` parameter specifies the type object of the parent class. The `obj` is optional and is an instance, or subtype, of the class `type`.

### Inside Class Definition

When used inside a class definition, the `super()` function can be used with zero arguments since the given class inherits from a parent class:

```pseudo
class A():
  method(self, arg):
    #Method code starts here

class B(A):
  method(self, arg):
    super().method(arg)
    #Method code starts here
```

The `super()` function allows the child class `B` to access the `.method()` of parent class `A`.

### Outside Class Definition

The following syntax can be applied inside and outside of a class definition:

```pseudo
class B(A):
  method(self, arg):
    super().method(arg)
    #Method code starts here

instance_of_b = B()
super(B, instance_of_b).method()
```

The `super()` function accepts the class type `B` along with an `instance_of_b` variable to direct the lookup search for a `.method()` in the nearest parent class.

## Codebyte Example

In the following example, both syntaxes of `super()` are implemented in the classes `Python` and `Java` to access the `intro()` method of the parent `ProgramLanguage` class:

```codebyte/python
# Base class
class ProgramLanguage:
  def intro(self):
    print("Hi! I am a Programming Language.")

# Derived class
class Python(ProgramLanguage):
  def intro(self):
    super().intro()
    print("Python here!")

# Derived class
class Java(ProgramLanguage):
  def intro(self):
    super(Java, self).intro()
    print("Java here!")

python_lang = Python()
python_lang.intro()

java_lang = Java()
java_lang.intro()
```
