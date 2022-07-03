---
Title: 'collections.OrderedDict'
Description: 'A dict subclass that tracks the order in which items were added.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dictionaries'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

An **OrderedDict** is an datatype in the collections module that is [`dict`](https://www.codecademy.com/resources/docs/python/dictionaries) subclass that tracks the order in which items were added. It offers all the standard dictionary methods as well as two additional methods that deal with the ordering of the `OrderedDict`.

## Syntax

```pseudo
myOrderedDict = collections.OrderedDict()
```

Like a regular dictionary, an `OrderedDict` can also be initialized with the `.fromkeys()` method.

```pseudo
myOrderedDict = collections.OrderedDict.fromkeys(keylist,value)
```

## Additional Methods

An `OrderedDict` has the following methods in addition to the standard `dict` methods:

- `.popitem(last)`: Returns and removes a key-value pair from the `OrderedDict`. The pairs are returned in LIFO order if `last` is true and FIFO order if `last` is false. The `last` argument is optional and defaults to `True`.
- `.move_to_end(key,last)`: Moves the `key` to one end of the `OrderedDict`. If `last` is `True` it is moved to the right end (last entered) otherwise it is moved to the start (first entered). The `last` argument is optional and defaults to `True`.

## Codebyte Example

The following example creates an `OrderedDict` and rearranges some items in it.

```codebyte/python
import collections

d = collections.OrderedDict()
d["A"] = 1
d["B"] = 2
d["C"] = 3
d["D"] = 4

print(d.popitem())

print(d)

d.move_to_end("A")
d.move_to_end("C",False)

print(d)

```
