---
Title: 'Dunder Methods'
Description: 'Dunder methods use a special syntax to perform class-specific operations in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Methods'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Double-underscore**, or **"dunder", or **"magic"**  methods** use a special syntax to perform [class](https://www.codecademy.com/resources/docs/python/classes)-specific operations in Python, including the following:

- Performing arithmetic operations on numeric-type attributes.
- Initializing a new class instance and binding any necessary attributes.
- Overloading certain methods to make their behaviors unique to that class.

## Syntax

```pseudo
class ClassName:
  __methodname__(self, param1, param2, ... paramN):
    # Method body here
```

The `methodname` is all lowercase even if there is more than one word in the name. The first parameter, `self`, is never explicitly passed as an argument because it refers to the class instance the method would be called against. However, any parameters defined afterward (`param1, param2, ... paramN`) must be passed as arguments when the dunder method is called.

## Example

The following example showcases the [`__init__()`](https://www.codecademy.com/resources/docs/python/dunder-methods/init) dunder method used for the `Home` class. This particular method will be called each time a new instance of `Home` is created, binding the values of any attributes that were passed:

```py
class Home:
  def __init__(self, rooms):
    self.rooms = rooms

myHome = Home(4)
```

More information about specific dunder methods can be found below.
