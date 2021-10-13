---
Title: 'Inheritance'
Description: 'Inheritance supports code reusability. It allows programmers to create classes that are built upon existing classes, and this enables a class created through inheritance to inherit/reuse the attributes and methods of the parent class.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Inheritance'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Inheritance is an object-oriented programming concept where a class derives attributes and behaviors from another class, eliminating the need to implement them again. The methods inherited by a subclass is considered to be reused in the subclass. It represents a IS-A relationship between real-world objects.

```py
# base/super/parent class
class Robot:
    def __init__(self, name):
        self.name = name

# derived/sub/child class
class PhysicianRobot(Robot):
    pass

# create object of derived class
y = PhysicianRobot("Jamie")

print(y.name) # Output: Jamie
```

In the above code subclass _PhysicianRobot_ inherits variable `name` and method `__init__` from the base class _Robot_.

## Reusing Parent methods

Base class methods can be reused in the derived classes. This prevents redundant code.

```py
# base class
class Robot:
    def __init__(self, name):
        self.name = name

    def say_hi(self):
        print("Hi! I am",self.name)

# derived class
class PhysicianRobot(Robot):
    def intro(self):
        Robot.say_hi(self) # parent class method
        print("and I am a physician!")

# object of derived class
doc = PhysicianRobot("Dr. Frankenstein")
doc.intro()

# Output:
# Hi! I am Dr. Frankenstein
# and I am a physician!
```

Derived class _PhysicianRobot_ calls parent class method `say_hi()` inside `intro()`.

_Note_: The same number and type of arguments need to be passed in the parent class method inside the child class.

### super()

Another way of reusing parent methods in child classes is the `super()` function. `super()` alone returns a temporary object of the superclass that then allows to call that superclass’s methods. This comes in handy when using [multiple inheritance](#multiple-inheritance).

```py
class PhysicianRobot(Robot):
    def intro(self):
        super().say_hi() # reuse parent class method
        print("and I am a physician!")

doc = PhysicianRobot("Dr. Frankenstein")
doc.intro()

# Output:
# Hi! I am Dr. Frankenstein
# and I am a physician!
```

Derived class _PhysicianRobot_ calls parent class method `say_hi()` inside `intro()`.

_Note_: `self` argument is not needed here and the same number and type of arguments need to be passed in the parent class method inside the child class.

## Overriding methods

A method of a parent class gets overridden by simply defining a method with the same name in the child class.

```py
class PhysicianRobot(Robot):
    def say_hi(self): # overriding parent method
        print("Everything will be okay! ")
        print(self.name + " takes care of you!")

y = PhysicianRobot("James")
y.say_hi()

# Output:
# Everything will be okay!
# James takes care of you!
```

If a method is overridden in a class, the original method can still be accessed but we have to do it by calling the method directly with the parent class name and pass the child calss object as an argument.

```py
y = PhysicianRobot("Doc James")
y.say_hi()
print("... and now the 'old' robot way of saying hi")
Robot.say_hi(y) # using the overridden method from parent

# Output:
# Everything will be okay!
# Doc James takes care of you!
# ... and now the 'old' robot way of saying hi
# Hi, I am Doc James
```

## Private variables in Base

Instance variables of the parent class don’t always need to be inherited by the child class. Make such instance variables of the parent class _private_. These then won’t be available to the child class.<br>
Instance variables of a class can be made private by adding double underscores (`__`) before its name.

```py
class Robot:
    def __init__(self, name):
        self.name = name
        self.__model = '099-AI' # private variable

class PhysicianRobot(Robot):
    pass

y = PhysicianRobot("James")
print(y.name) # Output: James
print(y.__model) # AttributeError
```

Since `__model` is a private variable in parent class _Robot_, it cannot be access by child class object _y_.

## isinstance() & issubclass()

Python has two built-in functions that work with inheritance:

- `isinstance()`
- `issubclasss()`

Use `isinstance()` to check an instance’s type.

```py
isinstance(obj, int)
```

This will be _True_ only if `obj` is an object of class `int` or an object of some derived class of `int`.

Use `issubclass()` to check class inheritance.

```py
issubclass(bool, int) #True
issubclass(float, int)  #False
```

This will be _True_ since `bool` is a subclass of `int`. However, since `float` is not a subclass of `int`, it returns _False_.

## Abstract Base class

Abstract base classes exist to be inherited, but never instantiated. Use leading underscores in class name or [`abc module`](https://docs.python.org/3/library/abc.html) to communicate that objects of that class should not be created.

```py
from abc import ABC, abstractmethod

class Employee(ABC):
    def __init__(self, id, name):
        self.id = id
        self.name = name

    @abstractmethod
    def calculate_payroll(self):
        pass
```

Employee is derived from `ABC`, making it an Abstract Base Class and `.calculate_payroll()` decorate the method with the `@abstractmethod` decorator telling users of the module that objects of type Employee can’t be created and other developers that if they derive from Employee, then they must override the `.calculate_payroll()` abstract method.

## Types of Inheritance

### Single inheritance

When a child class inherits from only one parent class, it is called single inheritance. All code snippets above use single inheritance.

### Multiple inheritance

When a child class inherits from multiple parent classes, it is called multiple inheritance.

```py
# parent 1
class Robot:
    def __init__(self, name):
        self.name = name

# parent 2
class Physician:
    def __init__(self, experience):
        self.experience = experience

# child class
class PhysicianRobot(Robot, Physician):
    # reusing methods/constructors and overriding __init__()
    def __init__(self,name, experience):
        Robot.__init__(self,name)
        Physician.__init__(self,experience)

# create object of derived class
y = PhysicianRobot("Jamie",3)
print("Hi! I am {}. I have been a physician for {} years.".format(y.name, y.experience))

# Output: Hi! I am Jamie. I have been a physician for 3 years.
```

Here _PhysicianRobot_ IS-A _Robot_ and a _Physician_, i.e., it inherits from both these classes.

### Multilevel inheritance

When we have a child and grandchild relationship, i.e., a derived class inherit from a base class and also acts like a base class to another class.

```py
# Base 1
class Base(object):
    def __init__(self, name):
        self.name = name

    def getName(self):
        return self.name


# Inherited or Sub class
class Child(Base):
    def __init__(self, name, age):
        Base.__init__(self, name)
        self.age = age

    def getAge(self):
        return self.age

# Inherited class from above sub class
class GrandChild(Child):
    def __init__(self, name, age, address):
        Child.__init__(self, name, age)
        self.address = address

    def getAddress(self):
        return self.address

g = GrandChild("James", 23, "Transylvania")
print(g.getName(), g.getAge(), g.getAddress())

# Output:
# James 23 Transylvania
```

### Hierarchical inheritance

More than one derived classes are created from a single base class.

```py
class Robot:
    def __init__(self, name):
        self.name = name
        self.__model = '099-AI'

class PhysicianRobot(Robot):
    pass

class NurseRobot(Robot):
    pass

y = PhysicianRobot("James")
print(y.name)
x = NurseRobot("Jamie")
print(x.name)

# Output:
# James
# Jamie
```

### Hybrid inheritance

This form combines more than one form of inheritance. Basically, it is a blend of more than one type of inheritance.

## Look out for

### Class Explosion problem

If not carefully used, inheritance can lead to a huge hierarchical structure of classes that is hard to understand and maintain. This is known as the **class explosion problem**.

The program works as expected, but with many classes to support the idea implementation the class hierarchy will inevitably grow as new requirements come leading to the class explosion problem where your hierarchies will become so big that they’ll be hard to understand and maintain.

### Diamond Problem

The **diamond problem** is an ambiguity that arises in multiple inheritance, when two classes B and C inherit from A, and class D inherits from both B and C. If there is a method in A that B and C have overridden, and D does not override it, then which version of the method does D inherit: that of B, or that of C?

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
obj.m() #Output: in B
```

Call to `obj.m()` the output is `in B`. If D is declared as `D(C, B)` then the output of `obj.m()` will be `in C`. So, the order of parent classes decides which class it inherits from. To call the parent function of choice use the [super() method](<#super()>) inside the child class.
