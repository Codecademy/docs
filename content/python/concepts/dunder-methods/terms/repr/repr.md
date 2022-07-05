---
Title: '__repr__()'
Description: 'Returns the string representation of the class'
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

The **`__repr__()`** method returns the string representation of the object or class. This overwrites the built-in `repr()` This representation can be seen by calling [`print()`](https://www.codecademy.com/resources/docs/python/built-in-functions/print) on the instance.

## Syntax

```pseudo
class ClassName:
  __repr__(self):
```

The `__repr__()` method accepts no parameters. `self` is an implicit reference to the instance of `ClassName`.

## Codebyte Example

In the following example, the `__repr__()` function is written to return a formatted string of the `Home` class (with the help of the [`.format()`](https://www.codecademy.com/resources/docs/python/strings/format) string function):

```codebyte/python
class Home:
  def __init__(self, rooms, stories):
    self.rooms = rooms
    self.stories = stories

  def __repr__(self):
    return "Home with {} rooms and {} stories".format(self.rooms, self.stories)

home1 = Home(4, 2)
print(home1) # Output: Home with 4 rooms and 2 stories

home2 = Home(5, 2)
print(home2) # Output: Home with 5 rooms and 2 stories
```
