---
Title: 'hasattr()'
Description: 'Returns True if an object has an attribute and False otherwise.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Attributes'
  - 'Built-in Functions'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`hasattr()`** function can be used to check if a given attribute belongs to a given object. It returns `True` if it does have the attribute, and `False` otherwise.

## Syntax

```pseudo
hasattr(object, attribute)
```

The `attribute` is a [string](https://www.codecademy.com/resources/docs/python/strings) data type. The `object` is usually some kind of data structure such as a [class](https://www.codecademy.com/resources/docs/python/classes), a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries), or a [list](https://www.codecademy.com/resources/docs/python/lists).

## Codebyte Example

```codebyte/python
class Home:
  def __init__(self, rooms, stories):
    self.rooms = rooms
    self.stories = stories

home = Home(4, 2)

print(hasattr(home, "rooms"))
print(hasattr(home, "year"))
```
