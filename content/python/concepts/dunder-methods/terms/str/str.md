---
Title: '__str__()'
Description: 'Returns a reader-friendly string representation of a class object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Functions'
  - 'Methods'
  - 'Objects'
  - 'OOP'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`__str__()`** dunder method returns a reader-friendly string representation of a class object. It can be called with [`str()`](https://www.codecademy.com/resources/docs/python/built-in-functions/str) as well as the built-in function [`print()`](https://www.codecademy.com/resources/docs/python/built-in-functions/print). Unlike [`__repr__()`](https://www.codecademy.com/resources/docs/python/dunder-methods/repr), it is not necessary that **`__str__()`** return a valid python expression. 

## Syntax

```pseudo
class ClassName:
  def __str__(self):
```
The `__str__()` method accepts no parameters. `self` is an implicit reference to the instance of `ClassName`.

## Codebyte Example

The example below showcases various ways the `__str__()` can be called. All return the same string output. The aim is to make the output readable:

```codebyte/python
class  Home:
  def  __init__(self, rooms, stories):
    self.rooms = rooms
    self.stories = stories

  def  __str__(self):
		return  "The house has {} rooms and {} stories".format(self.rooms, self.stories)

home1 = Home(4, 2)

print(home1)
print(str(home1))
print(home1.__str__())
```