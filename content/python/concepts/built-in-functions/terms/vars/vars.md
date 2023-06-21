---
Title: 'vars()'
Description: 'Returns the __dict__ attribute of an object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Attributes'
  - 'Objects'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**`vars()`** is a built-in Python function that returns the `__dict__` attribute of an object. The `__dict__` attribute is a dictionary containing the object's mutable attributes.

## Syntax

```pseudo
vars(object)
```

Here, `object` refers to an instance of a particular class.

## Codebyte Example

The following example uses `vars()` to return the `__dict__` attributes of the object `Person`:

```codebyte/python
class Person:
  name = "John"
  age = 36
  country = "Norway"

x = vars(Person)
print(x)
```
