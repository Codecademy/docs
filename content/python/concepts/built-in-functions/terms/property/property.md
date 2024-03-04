---
Title: 'property()'
Description: 'Declares a range of functions to manipulate class attributes.'
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

The **`property()`** function is a built-in Python function used to define methods that get, set, and delete class attributes. It can be used as a [decorator](https://www.codecademy.com/resources/docs/python/decorators) or assigned to a class attribute.

## Syntax

```pseudo
property(fget, fset, fdel, doc)
```

The `property()` function requires four parameters:

- `fget`: function to get the value of the attribute.
- `fset`: function to set the value of the attribute.
- `fdel`: function to delete the value of the attribute.
- `doc`: string that creates `docstring` for the attribute.

> **Note:** If no arguments are given then the function returns a base property attribute without any getter, setter or deleter.

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
```

The code results in the following output:

```shell
Bruno
Mars
```

## Codebyte Example

In this example the `property()` function is used to access the `radius` attribute of the `Circle` class.

```codebyte/python
class Flower:
    def __init__(self, color):
        self._color = color

    def get_color(self):
        return self._color

    def set_color(self, color):
        self._color = color

    def del_color(self):
        del self._color

    color = property(get_color, set_color, del_color)

# Create an instance of Flower
flower = Flower("Blue")

# Access the color attribute using the property
print(flower.color)

# Set a new value for the color attribute
flower.color = "Red"

# Access the updated color attribute
print(flower.color)

# Delete the radius attribute
del flower.color
```
