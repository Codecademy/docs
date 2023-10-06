---
Title: 'repr()'
Description: 'Returns a printable string describing the object that is passed in.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`repr()`** function returns a printable string describing the object that is passed in. In other words, it returns the string representation passed implicitly to the `eval()` function.

A class can control what this function returns for its instances when called by defining a [`__repr__()`](https://www.codecademy.com/resources/docs/python/dunder-methods/repr) dunder method.

## Syntax

The `repr()` function accepts a single object as parameter.

```pseudo
repr(object)
```

## Codebyte Example

Below, two instances of `repr()` are called:

- The first one returns the default value (a string with the name and address of the object, enclosed in angle brackets).
- The second defines the output string and implements the `__repr__()`method.

```codebyte/python
cte = "constant"

class Variable:
  def __init__(self):
    pass
  def __repr__(self):
    return "Undefined variable"

var = Variable()

print(repr(cte))
print(repr(var))
```
