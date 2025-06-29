---
Title: 'Hierarchical Inheritance'
Description: 'Explains hierarchical inheritance in Python, where multiple subclasses inherit from a single parent class.'
Subjects:
  - 'Python'
  - 'Object-Oriented Programming'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Hierarchical inheritance** refers to a structure in object-oriented programming (OOP) where several subclasses share a common parent class. Each of these child classes gains access to the attributes and methods of the same base class, while also having the flexibility to define their own unique behavior.

This pattern encourages consistency and reduces redundancy in code—especially useful when multiple types share core functionality but differ in specialized behavior.

## Syntax

```python
class Parent:
    # Base class with shared behavior

class ChildA(Parent):
    # Inherits from Parent

class ChildB(Parent):
    # Also inherits from Parent
```

- `Parent`: The superclass that defines common functionality.
- `ChildA` and `ChildB`: Independent subclasses that derive from the same base.

Each subclass can use the base functionality or override it as needed.

## Example

```python
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

print(b.move())  # Output: Flies
print(f.move())  # Output: Swims
```

### Explanation

- `Bird` and `Fish` both inherit from the `Animal` class.
- The `move()` method is overridden in each subclass to define movement specific to that type of animal.
- This demonstrates how each child can provide its own interpretation of a shared method.

## Codebyte Example

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

## Diagram

An illustration of how hierarchical inheritance is structured:

```
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

### Benefits of Hierarchical Inheritance

- **Efficient reuse**: Shared logic is centralized in the parent class.
- **Cleaner structure**: Each subclass can focus on its unique behavior.
- **Expandable design**: New types can be introduced without modifying existing code.

> Choose hierarchical inheritance when multiple types share common features but diverge in implementation.

### Related Concepts

* [Single Inheritance](../single-inheritance/single-inheritance.md)
* [Multiple Inheritance](../multiple-inheritance/multiple-inheritance.md)
* [Multilevel Inheritance](../multilevel-inheritance/multilevel-inheritance.md)
* [super() Function in Python](../../../built-in-functions/terms/super/super.md)
