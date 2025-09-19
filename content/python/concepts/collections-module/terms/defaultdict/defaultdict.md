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

In Python, **defaultdict** is a data type that belongs to the [`collections`](https://www.codecademy.com/resources/docs/python/collections-module) module. It is a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) subclass that is used to return a dictionary-like object.

## Syntax

```pseudo
collections.defaultdict(default_factory)
```

- `default_factory`: It is a **callable** that gives the default value for the dictionary object.

## Example

The following example demonstrates the `defaultdict` data type with a custom function as `default_factory`:

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

The next example demonstrates the use of other callables as `default_factory`:

```py
from collections import defaultdict

intdd = defaultdict(int)
listdd = defaultdict(list)
strdd = defaultdict(str)
setdd = defaultdict(set)

print(intdd[0])
print(listdd[0])
print(strdd[0])
print(setdd[0])
```

Here is the output of the above code:

```shell
0
[]
''
set()
```
Moreover, the callable determines the methods that can be used when entering key-value pair into the `defaultdict`, here is an example with `list`:

```py
from collections import defaultdict

listdd = defaultdict(list)

listdd[0].append(1)
# listdd[0] does not exist so it defaults to empty list [],
# then 1 is appended to it

listdd[1] = 2
#the empty list [] is replaced by integer 2 here
 
print(listdd[0])
print(listdd[1])
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
