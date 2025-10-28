---
Title: 'defaultdict'
Description: 'Creates a dictionary-like object that provides default values for missing keys.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Modules'
  - 'Data Types'
  - 'Dictionaries'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, **`defaultdict`** is a data type that belongs to the [`collections`](https://www.codecademy.com/resources/docs/python/collections-module) module. It is a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) subclass that automatically provides a default value for missing keys.

## Syntax

```pseudo
collections.defaultdict(default_factory)
```

**Parameters:**

- `default_factory`: A callable (such as a function or type like `int`, `list`, `set`) that provides the default value for missing keys. If set to `None`, a `KeyError` is raised when accessing a missing key.

**Return value:**

Returns a `defaultdict` object, which behaves like a dictionary but creates default values for missing keys using the specified `default_factory`.

## Example 1: Using a Custom Function

The following example demonstrates the `defaultdict` data type with a custom function as `default_factory` argument:

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

## Example 2: Using Built-in Callables

This example demonstrates `defaultdict` with built-in types (`int`, `list`, `str`, `set`) as the `default_factory`:

```py
from collections import defaultdict

intDefaultDict = defaultdict(int)
listDefaultDict = defaultdict(list)
strDefaultDict = defaultdict(str)
setDefaultDict = defaultdict(set)

print(intDefaultDict[0])
print(listDefaultDict['zero'])
print(strDefaultDict['0'])
print(setDefaultDict['a'])
```

Here is the output of the above code:

```shell
0
[]

set()
```

Example 3: Working with Lists

This example shows how `list` as `default_factory` allows appending to keys that don’t yet exist:

```py
from collections import defaultdict

myDefaultDict = defaultdict(list)

myDefaultDict['apple'].append(1)
# myDefaultDict['apple'] does not exist so it defaults to empty list [],
# then 1 is appended to it.

myDefaultDict['orange'] = 2
#The empty list [] is replaced by integer 2 here.

print(myDefaultDict['apple'])
print(myDefaultDict['orange'])
```

Here is the output of the above code:

```shell
[1]
2
```

## Codebyte Example

Run the following codeblock and explore more about the `defaultdict` data type:

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
