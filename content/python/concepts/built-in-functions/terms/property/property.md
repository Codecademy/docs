---
Title: 'property()'
Description: 'Declares property to access class attributes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Classes'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`property()`** function is a built-in Python function used to create properties by defining getter, setter and deleter for class attributes. It returns the object of property class that can be used as decorator or assigned to a class attribute.

## Syntax

```pseudo
property(fget, fset, fdel, doc)
```

The `property()` function requires four parameters:

- `fget`: function to get the value of the `attribute`.
- `fset`: function to set the value of the `attribute`.
- `fdel`: function to delete the value of the `attribute`.
- `doc`: string that creates `docstring` for the `attribute`.

> **Note:** In case no arguments are given then the function returns a base property attribute without any getter, setter or deleter.

## Example

The following example will demonstrate the use of `property()` function using the `Pet` class:

```py
class Pet:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        return self._name

    def set_name(self, name):
        self._name = name

    def del_name(self):
        del self._name

    name = property(get_name, set_name, del_name)

# Create an instance of Pet class
dog = Pet("Bruno")

# Access the name attribute using the property
print(dog.name)

# Set a new value for the name attribute
dog.name = "Mars"

# Access the updated name attribute
print(dog.name)

# Delete the name attribute
del dog.name

# Accessing the radius after deletion will raise an AttributeError

```

The code results in the following output:

```shell
Bruno
Mars
```

## Codebyte Example

In this example the `property()` function is used to access the `radius` attribute of the `Circle` class.

```codebyte/py
class Circle:
    def __init__(self, radius):
        self._radius = radius

    def get_radius(self):
        return self._radius

    def set_radius(self, radius):
        self._radius = radius

    def del_radius(self):
        del self._radius

    radius = property(get_radius, set_radius, del_radius)

# Create an instance of Circle
circle = Circle(5)

# Access the radius attribute using the property
print(circle.radius)

# Set a new value for the radius attribute
circle.radius = 7

# Access the updated radius attribute
print(circle.radius)

# Delete the radius attribute
del circle.radius

```
