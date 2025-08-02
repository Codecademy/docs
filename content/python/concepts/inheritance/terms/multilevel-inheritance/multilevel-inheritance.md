---
Title: 'Multilevel Inheritance'
Description: 'Allows a class to inherit from a subclass, creating an inheritance chain across multiple levels.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Multilevel inheritance** is a type of class hierarchy in [object-oriented programming (OOP)](https://www.codecademy.com/resources/blog/object-oriented-programming) where a class inherits from a derived class, forming a chain of inheritance. Each level passes down methods and properties, enabling cumulative specialization and reuse.

In Python, multilevel inheritance allows a subclass to indirectly inherit members from a grandparent class through its parent.

## Syntax

```pseudo
class BaseClass:
  # Base class code

class IntermediateClass(BaseClass):
  # Inherits from BaseClass

class DerivedClass(IntermediateClass):
  # Inherits from IntermediateClass
```

Here:

- `BaseClass`: The top-most class in the hierarchy.
- `IntermediateClass`: Inherits from `BaseClass`.
- `DerivedClass`: Inherits from `IntermediateClass`, and indirectly from `BaseClass`.

## Example

In this example**, the `Dog` class inherits from `Animal`, which in turn inherits from `LivingBeing`, allowing it to access methods from both ancestor classes:

```py
class LivingBeing:
  def breathe(self):
    return "Breathing"

class Animal(LivingBeing):
  def move(self):
    return "Moving"

class Dog(Animal):
  def bark(self):
    return "Barking"

dog = Dog()
print(dog.breathe())  # Inherited from LivingBeing
print(dog.move())     # Inherited from Animal
print(dog.bark())     # Defined in Dog
```

The output of this code is:

```shell
Breathing
Moving
Barking
```

This example forms a chain:

- `Dog` → `Animal` → `LivingBeing`
- The `Dog` class gains all the methods of its parent and grandparent.

Visual representation of multilevel inheritance:

```
+--------------+
| LivingBeing  |
|--------------|
| breathe()    |
+------+-------+
       |
       ▼
+--------------+
| Animal       |
|--------------|
| move()       |
+------+-------+
       |
       ▼
+--------------+
| Dog          |
|--------------|
| bark()       |
+--------------+
```

## Codebyte Example

In this example**, the `Laptop` class inherits features from `Computer` and `Device`, demonstrating how functionality accumulates across multiple levels of inheritance:

```codebyte/python
class Device:
  def power_on(self):
    return "Device powered on"

class Computer(Device):
  def open_os(self):
    return "OS is loading"

class Laptop(Computer):
  def use_touchpad(self):
    return "Using touchpad"

my_laptop = Laptop()

print(my_laptop.power_on())
print(my_laptop.open_os())
print(my_laptop.use_touchpad())
```

## Benefits and Best Practices of Multilevel Inheritance

- Promotes structured layering of functionality.
- Each derived class builds upon its predecessor.
- Useful when deeper specialization is logically needed.
- Helps organize code when behaviors evolve level by level.

> **Note**: Avoid deep inheritance chains when possible, as too many layers can make debugging and maintenance harder.
