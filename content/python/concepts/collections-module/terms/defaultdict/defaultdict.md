---
Title: 'defaultdict'
Description: 'Returns a dictionary-like object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Modules'
  - 'Dictionaries'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, **defaultdict** is a [data type](https://www.codecademy.com/resources/docs/python/data-types) that belongs to the [`collections`](https://www.codecademy.com/resources/docs/python/collections-module) [module](https://www.codecademy.com/resources/docs/python/modules). It is a [`dict`](https://www.codecademy.com/resources/docs/python/dictionaries) subclass that is used to return a dictionary-like object.

## Syntax

```pseudo
defaultdict(default_factory)
```

- `default_factory`: It is a [function](https://www.codecademy.com/resources/docs/python/functions) that returns the default value for the dictionary specified.

## Example

The following example demonstrates the `defaultdict` data type:

```py
from collections import defaultdict

def default_value():
  return "Not Declared"

myDefaultDict = defaultdict(default_value)

myDefaultDict["first"] = 100
myDefaultDict["second"] = 90

print(myDefaultDict["first"])
print(myDefaultDict["second"])
print(myDefaultDict["third"])
```

Here is the output for the above code:

```shell
100
90
Not Declared
```

## Codebyte Example

Here is a codebyte example for the `defaultdict` data type:

```codebyte/python
from collections import defaultdict

def def_val():
  return "Unknown"

newDefaultDict = defaultdict(def_val)

newDefaultDict["john"] = 25
newDefaultDict["snow"] = 40

print(newDefaultDict["john"])
print(newDefaultDict["snow"])
print(newDefaultDict["smith"])
```
