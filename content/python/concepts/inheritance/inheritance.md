---
Title: 'Inheritance'
Description: 'Inheritance supports code reusability and allows programmers to create classes built upon existing classes.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Inheritance'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Inheritance** is a concept in [object-oriented programming](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming) where a child [class](https://www.codecademy.com/resources/docs/python/classes) (or subclass) derives attributes and behaviors from a parent or sibling class.

This eliminates the need to implement the methods inherited by a subclass, or child class, again. In other words, it enables a child class to inherit/reuse the attributes and methods of a parent class. In terms of real-world objects, it represents an IS-A relationship.

```py
# Base/super/parent class
class ProgramLanguage:
  def __init__(self, name):
    self.name = name

# Derived/sub/child class
class Python(ProgramLanguage):
  pass

# Create an object of the derived class
y = Python("Inheritance")

print(y.name)
# Output: Inheritance
```

In the above code, subclass `Python` inherits the variable `name` and method `__init__` from the base class `ProgramLanguage`. The `pass` statement acts as a placeholder for the class body.

## Reusing Parent Methods

Base class methods can be reused in the derived classes. This prevents redundant code.

In the example below, the derived class, `Python`, implements the `.say_hi()` parent method inside the `.intro()` definition:

```py
# Base class
class ProgramLanguage:
  def say_hi(self):
    print("Hi! I am a Programming Language.")

# Derived class
class Python(ProgramLanguage):
  def intro(self):
    ProgramLanguage.say_hi(self) # Parent class method
    print("Python here!")

# Object of the derived class
doc = Python()
doc.intro()
```

The output would be:

```shell
Hi! I am a Programming Language.
Python here!
```

> **Note**: Inside the child class, the same number and type of arguments need to be passed into the parent class' method.

## Overriding Methods

In the child class, a parent class method gets overridden when a method of the same name is declared within it.

```py
class Python(ProgramLanguage):
  def say_hi(self): # Overriding parent method
    print("Hi! I am Python. I am fun!")

y = Python()
y.say_hi()
# Output: Hi! I am Python. I am fun!
```

If a method is overridden in the child class, the original method can still be accessed by calling the method directly on the parent class name and passing the child class object as an argument:

```py
y = Python()
y.say_hi()

print("... and now the 'old' ProgramLanguage way of saying hi")

# Using the overridden method from parent class
ProgramLanguage.say_hi(y)
```

The output would be:

```shell
Hi! I am Python.
... and now the 'old' ProgramLanguage way of saying hi
Hi! I am a Programming Language.
```

## Private Variables

When instance variables of the parent class don’t need to be inherited by the child class, they can be made unavailable to the child class by adding double underscores (`__`) before the variable name. This appends `_classname` before the variable name. So, when we try to access it like other instance variables of the class it gives an "Attribute error".

```py
class ProgramLanguage:
  def __init__(self, name):
    self.name = name
    self.__private = 'Private variable'

class Python(ProgramLanguage):
  pass

y = Python("Python")

print(y.name)
print(y.__private)
```

The error would be:

```error
AttributeError: 'Python' object has no attribute '__private'
```

`__private` in parent class `ProgramLanguage` is now `_ProgramLanguage__private` and can't be accessed using `.__private`. Same is true for class methods.

**Note:** Employing a double underscore prefix only makes the method or variable inaccessible using the originally declared name. These can still be accessed, like `y._ProgramLanguage__private` in the above example. The use of this syntax is an indication of how the variable or method should be treated.

## `isinstance()` and `issubclass()`

Python has two built-in functions that work with inheritance:

- `isinstance()`
- `issubclass()`

`isinstance()` checks an instance’s type:

```py
isinstance(obj, int)
```

The code above will be `True` only if `obj` is an object of class `int` or an object of some derived class of `int`.

`issubclass()` checks class inheritance:

```py
print(issubclass(bool, int))   # True
print(issubclass(float, int))  # False
```

Since `bool` is a subclass of `int`, it returns `True`. However, since `float` is not a subclass of `int`, it returns `False`.

## Abstract Base Class

Abstract base classes are inherited rather than instantiated.

```py
from abc import ABC, abstractmethod

class AbstractClass(ABC):
  def __init__(self, id, name):
    self.id = id
    self.name = name

  @abstractmethod
  def calculate_payroll(self):
    pass
```

`AbstractClass` is derived from `ABC`, making it an Abstract Base Class. This tells users of the module that `AbstractClass` can not be instantiated, only inherited.

`.calculate_payroll()` is decorated with `@abstractmethod`, denoting it as an abstract method. This tells developers that if they wish to inherit from `AbstractClass`, they must override the `.calculate_payroll()` method. Otherwise, the derived class cannot be instantiated.

## Types of Inheritance

### Single Inheritance

When a child class inherits from only one parent class, it is called single inheritance. All prior code snippets use single inheritance.

### Multiple Inheritance

When a child class inherits from multiple parent classes, it is called multiple inheritance.

`Python` IS-A `ProgramLanguage` and a `ScriptLanguage`; it inherits from both these classes:

```py
# Parent 1
class ProgramLanguage:
  def __init__(self, name):
    self.name = name

# Parent 2
class ScriptLanguage:
  def __init__(self, text):
    self.text = text

# Child class
class Python(ProgramLanguage, ScriptLanguage):
  # Reusing methods/constructors and overriding __init__()
  def __init__(self, name, text):
    ProgramLanguage.__init__(self, name)
    ScriptLanguage.__init__(self, text)

# Create object of derived class
y = Python("Inheritance","I allow code reusability.")

print("Hi! I am {}. {}".format(y.name, y.text))
```

The output would be:

```shell
Hi! I am Inheritance. I allow code reusability.
```

### Multilevel Inheritance

When a derived class inherits from another derived class.

In the code below, class `GrandChild()` inherits from class `Child`:

```py
# Base 1
class Base(object):
  def __init__(self, name):
    self.name = name

  def getName(self):
    return self.name

# Inherited/sub class
class Child(Base):
  def __init__(self, name, age):
    Base.__init__(self, name)
    self.age = age

  def getAge(self):
    return self.age

# Inherited class from sub class above
class GrandChild(Child):
  def __init__(self, name, age, address):
    Child.__init__(self, name, age)
    self.address = address

  def getAddress(self):
    return self.address

g = GrandChild("James", 23, "Transylvania")
print(g.getName(), g.getAge(), g.getAddress())

# Output: James 23 Transylvania
```

### Hierarchical Inheritance

More than one derived class is created from a single base class:

```py
class ProgramLanguage:
  def __init__(self, name):
    self.name = name

class Python(ProgramLanguage):
  pass

class Java(ProgramLanguage):
  pass

y = Python("Python")
print(y.name)

x = Java("Java")
print(x.name)

# Output:
# Python
# Java
```

### Hybrid Inheritance

This form is a blend of more than one type of inheritance mentioned above.

## Potential Complications

### Class Explosion Problem

Although a program may work as expected, having many classes to support the idea implementation causes the class hierarchy's inevitable growth. All this leads to the class explosion problem where class hierarchies become too extensive and make code hard to understand and maintain.

### Diamond Problem

The diamond problem is an obscurity that arises in multiple inheritance.

Classes, `B` and `C`, inherit from class `A`, and class `D` inherits from both `B` and `C`. If there is a method in `A` that `B` and `C` have overridden and `D` does not override it, which version of the method does `D` inherit: that of B, or that of C?

```py
class A:
  def m(self):
    print("inside A")

class B(A):
  def m(self):
    print("in B")

class C(A):
  def m(self):
    print("in C")

class D(B, C):
  pass

obj = D()
obj.m()
# Output: in B
```

The order of parent classes decide which class `D` inherits from. To call the parent function of choice, the `super()` method is called inside the child class.
