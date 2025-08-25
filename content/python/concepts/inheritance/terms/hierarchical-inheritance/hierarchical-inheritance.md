---
Title: 'Hierarchical Inheritance'
Description: 'Allows multiple subclasses to inherit from the same parent class, enabling shared behavior across different child classes.'
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

**Hierarchical inheritance** is a type of [object-oriented programming (OOP)](https://www.codecademy.com/resources/blog/object-oriented-programming) structure where multiple subclasses inherit from a single parent class. Each child class gets access to the shared attributes and methods of the base class, while also defining its own specific behavior.

This approach promotes code reuse and consistency, especially when different classes share core functionality but need their own specialized features.

## Syntax

```pseudo
class Parent:
  # Base class with shared behavior

class ChildA(Parent):
  # Inherits from Parent

class ChildB(Parent):
  # Also inherits from Parent
```

Here:

- `Parent`: The superclass that defines common functionality.
- `ChildA` and `ChildB`: Independent subclasses that derive from the same base.

Each subclass can use the base functionality or override it as needed.

## Example

In this example, `Bird` and `Fish` inherit from the `Animal` class and override the `move()` method to define specific behaviors:

```py
class Animal:
  def move(self):
    return "Moves in some way"

class Bird(Animal):
  def move(self):
    return "Flies"

class Fish(Animal):
  def move(self):
    return "Swims"

b = Bird()
f = Fish()

print(b.move())
print(f.move())
```

The output of this code is:

```shell
Flies
Swims
```

In this code:

- `Bird` and `Fish` both inherit from the `Animal` class.
- The `move()` method is overridden in each subclass to define movement specific to that type of animal.
- This demonstrates how each child can provide its own interpretation of a shared method.

An illustration of how hierarchical inheritance is structured:

```plaintext
        +-------------+
        |   Animal    |
        |-------------|
        |  move()     |
        +------+------+
         /          \
        ▼            ▼
+-------------+   +-------------+
|    Bird     |   |    Fish     |
|-------------|   |-------------|
|  move()     |   |  move()     |
+-------------+   +-------------+
```

## Codebyte Example

In this example, `Laptop` and `Desktop` inherit shared functionality from the `Device` class while adding their own unique methods:

```codebyte/python
class Device:
  def power(self):
    return "Powered on"

class Laptop(Device):
  def feature(self):
    return "Portable computing"

class Desktop(Device):
  def feature(self):
    return "High-performance workstation"

l = Laptop()
d = Desktop()

print(l.power())      # Inherited from Device
print(l.feature())    # Specific to Laptop
print(d.power())      # Inherited from Device
print(d.feature())    # Specific to Desktop
```

## Benefits of Hierarchical Inheritance

- **Efficient reuse**: Shared logic is centralized in the parent class.
- **Cleaner structure**: Each subclass can focus on its unique behavior.
- **Expandable design**: New types can be introduced without modifying existing code.

> Choose hierarchical inheritance when multiple types share standard features but diverge in implementation.
