---
Title: 'Multiple Inheritance'
Description: 'Allows a class to inherit attributes and methods from more than one parent class.'
Subjects:
  - 'Code Foundations`
  - `Computer Science'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Multiple inheritance** is a foundational concept in [object-oriented programming (OOP)](https://www.codecademy.com/resources/blog/object-oriented-programming) where a class can inherit methods and attributes from more than one parent class. Python supports this, allowing a subclass to combine functionality from multiple base classes.

This promotes flexibility and code reuse. However, it also raises the risk of method name conflicts. Python resolves such issues using its Method Resolution Order (MRO).

## Syntax

```pseudo
class ParentA:
  # Methods and attributes of ParentA

class ParentB:
  # Methods and attributes of ParentB

class Child(ParentA, ParentB):
  # Inherits from both ParentA and ParentB
```

Here:

- `ParentA`, `ParentB`: Two distinct base classes.
- `Child`: The derived class that inherits from both.

Python determines which method to use using the order declared (left to right).

## Example

In this example, the `Duck` class inherits from both `Flyer` and `Swimmer`, but due to Python’s MRO, the method from `Flyer` takes priority:

```py
class Flyer:
  def ability(self):
    return "Can fly"

class Swimmer:
  def ability(self):
    return "Can swim"

class Duck(Flyer, Swimmer):
  pass

d = Duck()
print(d.ability())
```

The output of this code is:

```shell
Can fly
```

## Codebyte Example

In this codebyte example, the `Tablet` class inherits input methods from both `Keyboard` and `Touchscreen`, but the method from `Keyboard` is used due to its position in the inheritance list:

```codebyte/python
class Keyboard:
  def input_method(self):
    return "Typed input"

class Touchscreen:
  def input_method(self):
    return "Touch input"

class Tablet(Keyboard, Touchscreen):
  def description(self):
    return "Tablet can accept multiple input types"

my_tablet = Tablet()
print(my_tablet.input_method())   # Inherited from Keyboard (first in order)
print(my_tablet.description())    # Defined in Tablet
```

A visual overview of multiple inheritance:

```
+-------------+     +---------------+
|  Keyboard   |     |  Touchscreen  |
|-------------|     |---------------|
| input_method|     | input_method  |
+------+------+     +-------+-------+
       \                  /
        \                /
         ▼              ▼
          +--------------------+
          |      Tablet        |
          |--------------------|
          |    description()   |
          +--------------------+
```
