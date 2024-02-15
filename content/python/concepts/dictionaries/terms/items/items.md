---
Title: '.items()'
Description: 'Returns a list of tuples for each key-value pair in a dictionary.'
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

The `.items()` method of a Python dictionary returns a list of [tuples](https://www.codecademy.com/resources/docs/python/tuples) for each key-value pair in a dictionary. It takes no arguments.

## Syntax

```pseudo
dictionary.items()
```

## Codebyte Example

The following example creates a dictionary, then prints the dictionary and the output from `.items()`:

```codebyte/python
d = {1:'one', 2:'two', 3:'three'}
d_items = d.items()
print(d)
print(d_items)
```
