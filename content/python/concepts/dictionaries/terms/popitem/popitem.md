---
Title: '.popitem()'
Description: 'Returns the last inserted key-value pair from a dictionary as a tuple, and removes the entry.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dictionaries'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.popitem()` method of a Python dictionary returns the last inserted key-value pair from a dictionary as a [tuple](https://www.codecademy.com/resources/docs/python/tuples) and removes the entry. It takes no arguments.

**Note:** Prior to Python version 3.7, this method would remove a random item from the dictionary.

## Syntax

```pseudo
dictionary.popitem()
```

## Codebyte Example

The following example creates a dictionary, adds an item, then uses `.popitem()` to remove it:

```codebyte/python
d = {1:'one', 2:'two', 3:'three'}
d[4] = 'four'
d_item = d.popitem()
print(d_item)
print(d)
```
