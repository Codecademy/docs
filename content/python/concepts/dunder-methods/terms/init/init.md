---
Title: '__init__()'
Description: 'Initalizes a newly created object and is called each time a new class instance is created.'
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

The **`__init__()`** method initializes a newly created object. It is called each time a new instance of the defined class is created.

## Syntax

```pseudo
class ClassName:
  __init__(self, param1, param2, ..., paramN):
    self.param1 = param1
    self.param2 = param2
    self.paramN = paramN
```

Instance variables (`param1, param2, ..., paramN`) are set within the `__init__()` method block. They can be set initially within the `__init__()` method when the instance is created, or instance variables can be added by setting them to values:

```pseudo
new_instance = ClassName()
```

## Codebyte Example

The example below showcases the `__init__()` method being implicitly called after a new instance of the `Home` class, `home`, is created with `rooms` and `stories` attributes passed in:

```codebyte/python
class Home:
  def __init__(self, rooms, stories):
    # Setting instance variables
    self.rooms = rooms
    self.stories = stories

home = Home(4, 2)

print(home.rooms)
print(home.stories)
```
