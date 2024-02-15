---
Title: 'type()'
Description: 'Returns the data type of the argument passed to the function.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Built-in Functions'
  - 'Functions'
  - 'Methods'
  - 'Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`type()`** function returns the data type of the argument passed to it. When the argument is an instance of a [class](https://www.codecademy.com/resources/docs/python/classes), it returns the class that it is an instance of.

## Syntax

```pseudo
type(some_object)
```

The `type()` function primarily accepts `some_object` as a parameter, which can be any of Python's [data types](https://www.codecademy.com/resources/docs/python/data-types).

## Example

The `type()` function can be used to confirm the data type of the object `spam`:

```py
spam = 10

print(type(spam))

# Output: int
```

## Codebyte Example

The following example uses the `type()` function to return the data type of the class instance variable, `home`:

```codebyte/python
class Home:
  def __init__(self, rooms, stories):
    self.rooms = rooms
    self.stories = stories

home = Home(4, 2)

print(type(home))
```
