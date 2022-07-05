---
Title: 'del'
Description: 'Removes an object from the namespace of a Python shell or environment.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `del` keyword is used to remove an object from the namespace of a Python shell or environment.

## Syntax

```pseudo
del object
```

Depending on the `object`, the `del` keyword will do one of the following:

- Plain deletion where the name of the `object` variable is removed from the local/global namespace.
- Recursive deletion where any inner elements or attributes of the `object` (e.g., lists and classes) are deleted as well.
  - These inner elements can include list items and class attributes.
- Slicing of specific inner elements in a sequence.

## Codebyte Example

The following example showcases some uses of the `del` keyword:

```codebyte/py
class Home:
  def __init__(self, rooms, stories):
    self.rooms = rooms
    self.stories = stories

  def __repr__(self):
    return f"Home class instance - Rooms: {self.rooms} | Stories: {self.stories}"

home = Home(4, 2)
home_2 = Home(6, 3)
home_3 = Home(8, 4)

home_list = [home, home_2, home_3]

# home_3 removed from namespace
del home_list[2]

print(f"Home class definition: {Home}")

print(f"List of class instances: {home_list}")

# Delete "rooms" attribute of home_2
del home_2.rooms

# Delete entire list
del home_list

# Delete entire Home class
del Home

# NameError expected
print(Home)
```
