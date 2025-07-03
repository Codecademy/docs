---
Title: 'Multilevel Inheritance'
Description: 'Explains multilevel inheritance in Python, where a class inherits from a derived class forming a chain of inheritance.'
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

**Multilevel inheritance** is a type of class hierarchy in object-oriented programming (OOP) where a class inherits from a derived class, resulting in a layered inheritance chain. Each level passes its functionality to the next, enabling cumulative extension and specialization.

In Python, multilevel inheritance allows a subclass to indirectly inherit members from a grandparent class through its parent.

## Syntax

```python
class BaseClass:
    # Base class code

class IntermediateClass(BaseClass):
    # Inherits from BaseClass

class DerivedClass(IntermediateClass):
    # Inherits from IntermediateClass
```

- `BaseClass`: The top-most class in the hierarchy.
- `IntermediateClass`: Inherits from `BaseClass`.
- `DerivedClass`: Inherits from `IntermediateClass`, and indirectly from `BaseClass`.

## Example

```python
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

### Explanation:

This example forms a chain:

- `Dog` → `Animal` → `LivingBeing`
- The `Dog` class gains all the methods of its parent and grandparent.

## Codebyte Example

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

## Diagram

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

### Key Takeaways

- Promotes structured layering of functionality.
- Each derived class builds upon its predecessor.
- Best used when deeper specialization is logically needed.

> Avoid overuse, as deep inheritance hierarchies can make debugging and comprehension harder.

### Related Concepts

* [Single Inheritance](../single-inheritance/single-inheritance.md)
* [Multiple Inheritance](../multiple-inheritance/multiple-inheritance.md)
* [super() Function in Python](../../../built-in-functions/terms/super/super.md)
