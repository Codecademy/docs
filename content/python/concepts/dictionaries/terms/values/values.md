---
Title: '.values()'
Description: 'Returns a view of values for a dictionary.'
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

The `.values()` method returns all of its values of a Python dictionary in a view object that will reflect any changes to the dictionary values. It takes no arguments.

## Syntax

```pseudo
dictionary.values()
```

## Codebyte Example

The following example creates a dictionary, then prints all the values:

```codebyte/python
d = {1:'one', 2:'two', 3:'three'}
d_values = d.values()
print(d_values)
d[3] = 'four'
print(d_values)
```
