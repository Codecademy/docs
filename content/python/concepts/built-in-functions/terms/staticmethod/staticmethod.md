---
Title: 'staticmethod()'
Description: 'Transforms a method to a static method.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The built-in function **`staticmethod()`** converts a method to a static method. The function to be converted is passed as a parameter and the static conversion of the method is returned.

This function has several applications, one use case is the generation of a new static method from an existing instance method. A static method differs from a class or instance method in that it can't modify the class or instance. These methods serve to impose a tighter scope over a given functionality and are used to signal the design intention and use of the class.

> **Note:** While use of this built-in function was common in older versions of Python, it is considered more Pythonic to use the @staticmethod decorator to define static methods.

## Syntax

```pseudo
staticmethod(function)
```

## Example 1

Use `staticmethod()` to convert the print_welcome method in the `Codecademy` class to a static method:

```py
class Codecademy:
  def print_welcome(name):
    print("Welcome to...", name)

# Converting to static method
Codecademy.print_welcome = staticmethod(Codecademy.print_welcome)

# Calling as a static method by the class
Codecademy.print_welcome("Codecademy")
# Calling as a static method by the object
Codecademy().print_welcome("Codecademy")
```

## Example 2

Use `staticmethod()` to create a static method in `Codecademy` class from an external function:

```py
def print_hello():
    print("Hello, I'm not from the class")

class Codecademy:
  #converting print_hello to a static function and assigning to a method in Codecademy class
  codecademy_hello = staticmethod(print_hello)

#calling codecademy_hello as a static method
Codecademy.codecademy_hello()
```

## Example 3

Use `staticmethod()` to create a static function from a method in the `Codecademy` class and call the function on its own:

```py
class Codecademy:
  def print_welcome(name):
    print("Welcome to...", name)

# Converting to static method
new_welcome = staticmethod(Codecademy.print_welcome)

# Calling new_welcome
new_welcome("Codecademy")
```
