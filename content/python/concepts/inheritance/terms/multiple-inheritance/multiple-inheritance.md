---
Title: 'Multiple Inheritance'
Description: 'Explains multiple inheritance in Python, where a subclass inherits from more than one parent class.'
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

**Multiple inheritance** is a concept in object-oriented programming (OOP) where a single class can derive functionality from more than one parent class. Python allows this, making it possible for a subclass to inherit features from multiple independent base classes.

This design encourages flexibility and reusability of code. However, it also introduces ambiguity when parent classes define methods or properties with the same name. Python addresses such conflicts using its **Method Resolution Order (MRO)**.

## Syntax

```python
class ParentA:
    # ParentA methods and attributes

class ParentB:
    # ParentB methods and attributes

class Child(ParentA, ParentB):
    # Inherits from both ParentA and ParentB
```

- `ParentA`, `ParentB`: Two distinct base classes.
- `Child`: The derived class that inherits from both.
- Python determines which method to use using the order declared (left to right).

## Example

```python
class Flyer:
    def ability(self):
        return "Can fly"

class Swimmer:
    def ability(self):
        return "Can swim"

class Duck(Flyer, Swimmer):
    pass

d = Duck()
print(d.ability())  # Output: Can fly
```

### Explanation:

- `Duck` inherits from both `Flyer` and `Swimmer`.
- Since both define the same method, Python uses the version from `Flyer` because it appears first.
- The method selection follows the **MRO** rules.

## Codebyte Example

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

## Diagram

A visual example of multiple inheritance:

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
          | description()      |
          +--------------------+
```

### Key Considerations

- Encourages combining capabilities from separate classes.
- Ideal for mixins—lightweight, reusable functionality.
- Be aware of method name clashes and resolution order.
- Python provides tools like `super()` and `.mro()` to navigate complex inheritance trees.

> Choose multiple inheritance when your subclass needs to aggregate unrelated behaviors—just make sure method conflicts are intentionally handled.

### Related Concepts

* [Single Inheritance](../single-inheritance/single-inheritance.md)
* [Multilevel Inheritance](../multilevel-inheritance/multilevel-inheritance.md)
* [super() Function in Python](../../../built-in-functions/terms/super/super.md)
