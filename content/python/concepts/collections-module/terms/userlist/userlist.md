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
  - 'learn-example-course'
  - 'paths/example-path'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **UserList** class from the `collections` module acts as a wrapper around the built-in [`list`](https://www.codecademy.com/resources/docs/python/lists) type, to create custom list-like [classes](https://www.codecademy.com/resources/docs/python/classes) with modified behavior or new functionalities. Although directly subclassing Python’s list reduces the need for this class, UserList remains available in the standard library for convenience and backward compatibility.

## Syntax

```pseudo
collections.UserList(list)
```

**Parameters:**

- `list`: a regular list object used to store the contents of the UserList class. The list is empty by default and can be accessed via the UserList `data` attribute.

**Return value:**

A `<class 'collections.UserList'>` object is returned.

## Example 1: Basic Usage of `collections.UserList`

This example showcases a basic use of `UserList` as a wrapper around a list:

```py
from collections import UserList

# Create a regular list
l = ['USD', 'GBP', 'EUR']
print(l)  # Output: ['USD', 'GBP', 'EUR']

# Instantiate a UserList object from the list
ul = UserList(l)
print(ul)  # Output: ['USD', 'GBP', 'EUR']

# Print out the data type for each instantiated object
print(type(l))  # Output: <class 'list'>
print(type(ul))  # Output: <class 'collections.UserList'>
```

Through the `data` attribute it is possible to access the `ul` content and its built-in methods:

```py
print(ul.data)  # Output: ['USD', 'GBP', 'EUR']

# Append a new item to the UserList object
ul.data.append('$')
print(ul.data)  # Output: ['USD', 'GBP', 'EUR', '$']

# Remove the item
ul.data.remove('$')

# Sort the list-like object in ascending order
ul.data.sort()
print(ul.data)  # Output: ['EUR', 'GBP', 'USD']
```

## Example 2: Creating a Custom List Class with UserList

In the following example, the `CurrencyCodeList` class is instantiated, which inherits from `UserList` and its properties. The class stores only string items from the initial iterable; if non-string items are provided, it returns an empty `UserList` object by default. Additionally, the append `method` is overridden to accept only uppercase strings of exactly three characters; if the new item does not meet this criterion, a `RuntimeError` is raised.

```py
from collections import UserList

class CurrencyCodeList(UserList):
 def __init__(self, iterable):
  # Call the parent constructor with a generator that filters input to only strings
  super().__init__(item for item in iterable if isinstance(item, str))

 def append(self, other):
  # Check if the provided value is in lowercase, which is not allowed
  if other == str(other.lower()):
   raise RuntimeError("Lowercase not allowed")
  # Check if the length of the value is exactly 3 characters, which is required
  if len(other) != 3:
   raise RuntimeError("3 string characters required")
  else:
   self.data.append(other)
```

The code here below shows that `currency` is created as an instance of `CurrencyCodeList`, inheriting its behavior from the class:

```py
currency = CurrencyCodeList(['JPY', 'CHF', 'EUR'])
print(currency)  # Output: ['JPY', 'CHF', 'EUR']

currency_wrong_type = CurrencyCodeList([000, 555, 999])
print(currency_wrong_type)  # Output: []

currency.append('$')  # Output: RuntimeError: Lowercase not allowed
currency.append('AB')  # Output: RuntimeError: 3 string characters required

currency.append('GBP')
print(currency)  # Output: ['JPY', 'CHF', 'EUR', 'GBP']
```

## Codebyte Example

In this example, a class `NoRemovedItem` is defined, inheriting from `UserList`. It initializes with an iterable and stores its items via the parent class constructor. It also overrides `remove` and `pop` methods to raise a `RuntimeError` with the message "Deletion not allowed", which effectively prevents item removal.

```codebyte/py
from collections import UserList

class NoRemovedItemList(UserList):
 def __init__(self, iterable):
  # The constructor takes an iterable of items
  super().__init__(item for item in iterable)

 def remove(self, other):
  raise RuntimeError("Deletion not allowed")

 def pop(self, idx=None):
  raise RuntimeError("Deletion not allowed")


# Instantiate a NoRemovedItemList item and test its properties
ids = NoRemovedItemList([1233, 4566, 7899, 0000])
ids.remove(0000)  # Output: RuntimeError: Deletion not allowed
ids.pop(0000)  # Output: RuntimeError: Deletion not allowed
```
