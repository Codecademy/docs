---
Title: 'UserList'
Description: 'Wrapper around list objects for easier list subclassing.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Modules'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`UserList`** class from the `collections` module acts as a wrapper around the built-in [`list`](https://www.codecademy.com/resources/docs/python/lists) type, to create custom list-like [classes](https://www.codecademy.com/resources/docs/python/classes) with modified behavior or new functionalities. Although directly subclassing Python’s list reduces the need for this class, UserList remains available in the standard library for convenience and backward compatibility.

## Syntax

```pseudo
collections.UserList([list])
```

**Parameters:**

- `list`: A regular list object used to store the contents of the UserList class. The list is empty by default and can be accessed via the UserList `data` attribute.

**Return value:**

Returns a `collections.UserList` instance that behaves like a standard Python list.

## Example: Basic Usage of `collections.UserList`

This example showcases a basic use of `UserList` as a wrapper around a list:

```py
from collections import UserList

# Create a regular list
l = ['USD', 'GBP', 'EUR']
print(l)

# Instantiate a UserList object from the list
ul = UserList(l)
print(ul)

# Print out the data type for each instantiated object
print(type(l))
print(type(ul))
```

The code returns the following output:

```shell
['USD', 'GBP', 'EUR']
['USD', 'GBP', 'EUR']
<class 'list'>
<class 'collections.UserList'>
```

The `UserList` behaves like a standard list, but its contents are stored in the `data` attribute:

```py
print(ul.data)  # Access the underlying list

# Append a new item
ul.append('$')
print(ul)

# Remove an item
ul.remove('$')

# Sort the list-like object in ascending order
ul.sort()
print(ul)
```

The above code will return the following output:

```shell
['USD', 'GBP', 'EUR']
['USD', 'GBP', 'EUR', '$']
['EUR', 'GBP', 'USD']
```

## Codebyte Example: Creating a Custom List Using `UserList`

The following example demonstrates how `UserList` can be subclassed to restrict unwanted behavior, here, preventing negative numbers from being added:

```codebyte/python
from collections import UserList

# Custom list that disallows negative numbers
class PositiveList(UserList):
  def append(self, item):
    if item < 0:
      print("Negative values not allowed!")
    else:
      super().append(item)

# Create and modify the custom UserList
pl = PositiveList([1, 3, 5])
print("Initial list:", pl)

pl.append(10)
pl.append(-4)   # This will trigger the custom rule
print("Final list:", pl)
```
