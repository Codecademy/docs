---
Title: 'Single Inheritance'
Description: 'Explains single inheritance in Python, where one subclass inherits from a single parent class.'
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

**Single inheritance** is a foundational principle in object-oriented programming (OOP), where a class (known as the child or subclass) derives its behaviour and structure from one parent class (or superclass). This mechanism promotes code reusability and clear hierarchical design.

In Python, single inheritance is implemented by defining the subclass with the parent class name in parentheses. This allows the child class to use, override, or extend the functionality of its parent.

## Syntax

```python
class ParentClass:
    # Methods and attributes of the parent class

class ChildClass(ParentClass):
    # Inherits from ParentClass
    # Can override or add new functionality
```

- `ParentClass`: The class being inherited from.
- `ChildClass`: The subclass that inherits behaviour.
- The child class gains access to the parent’s members and can override or expand upon them.

## Example

```python
class Animal:
    def speak(self):
        return "Makes a sound"

class Dog(Animal):
    def speak(self):
        return "Barks"

a = Animal()
d = Dog()

print(a.speak())  # Output: Makes a sound
print(d.speak())  # Output: Barks
```

### Explanation

- `Dog` inherits from the `Animal` class.
- Both define a `speak()` method, but `Dog` overrides it to provide a more specific output.
- This demonstrates how subclasses can customise inherited behaviour.

## Codebyte Example

```codebyte/python
class Vehicle:
    def start_engine(self):
        return "Engine started"

class Car(Vehicle):
    def drive(self):
        return "Car is driving"

my_car = Car()

print(my_car.start_engine())  # Inherited from Vehicle
print(my_car.drive())         # Defined in Car
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

### Related Concepts

* [Multiple Inheritance](../../inheritance.md)
* [super() Function in Python](../../../built-in-functions/terms/super/super.md)
