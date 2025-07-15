---
Title: 'Single Inheritance'
Description: 'Single inheritance allows a class to derive behavior and attributes from one parent class only.'
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

**Single inheritance** is a foundational principle in object-oriented programming (OOP), where a class (called the child or subclass) inherits its behaviour and structure from a single parent class (or superclass). This promotes code reusability and maintains a clear logical hierarchy.

In Python, single inheritance is implemented by defining the subclass with the parent class name in parentheses. This enables the child class to use, override, or extend the methods and attributes of its parent.

## Syntax

```pseudo
class ParentClass:
  # Methods and attributes of the parent class

class ChildClass(ParentClass):
  # Inherits from ParentClass
  # Can override or add new functionality
```

- `ParentClass`: The class inherited from (also known as superclass or base class).
- `ChildClass`: The class that inherits from the parent class (also known as the subclass or the derived class).

The `ParentClass` is passed inside parentheses when defining the `ChildClass`.

## Example

This example demonstrates single inheritance where the `Dog` class inherits from `Animal` and overrides the `speak()` method to customize behavior:

```py
class Animal:
  def speak(self):
    return "Makes a sound"

class Dog(Animal):
  def speak(self):
    return "Barks"

a = Animal()
d = Dog()

print(a.speak())
print(d.speak())
```

Here's the output:

```shell
Makes a sound
Barks
```

### Explanation

- `Dog` inherits from the `Animal` class.
- Both define a `speak()` method, but `Dog` overrides it to provide a more specific output.
- This demonstrates how subclasses can customise inherited behaviour.


```codebyte/python
class Vehicle:
  def start_engine(self):
    return "Engine started"

class Car(Vehicle):
  def drive(self):
    return "Car is driving"

my_car = Car()

print(my_car.start_engine())
print(my_car.drive())
```

## Diagram

Visual structure of single inheritance:

```
+-------------+
|  Vehicle    |
|-------------|
| start_engine|
+------+------+
       |
       ▼
+-------------+
|    Car      |
|-------------|
|   drive     |
+-------------+
```

### Advantages of Single Inheritance

- **Reusability**: Shared logic lives in the parent class and can be used across multiple child classes.
- **Modularity**: Logical separation of generic and specific behaviours.
- **Simplicity**: Easier to trace inheritance paths and maintain codebases.

> Use single inheritance when the subclass is a specialised form of the parent and there’s no need to inherit from multiple sources.
