---
Title: 'dir()'
Description: 'Returns the list of valid attributes of the passed object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Objects'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`dir()`** function returns the list of valid attributes of the passed object.

## Syntax

```pseudo
dir(object)
```

- `object` : An empty/filled tuple, list, set, dictionary or any user-defined object.

## Example

Use `dir()` function to return all the valid attributes of the list `fruits`:

```python
fruits = ['apple', 'banana', 'pineapple']

print(dir(fruits))
```

The following output will look like below:

```shell
['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Codebyte Example

Use `dir()` to return both the methods made available by default to all classes defined in Python and the user-defined properties of the class `Phone`:

```codebyte/python
class Phone:
  manufacturer = "Apple"
  model = "Iphone 4"
  color = "green"

print(dir(Phone))
```
