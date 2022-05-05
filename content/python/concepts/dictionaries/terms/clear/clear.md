---
Title: '.clear()'
Description: 'Removes all entries in a dictionary.'
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

The `.clear()` method of a Python dictionary removes all the entries in the dictionary. It takes no arguments.

## Syntax

```pseudo
dictionary.clear()
```

## Codebyte Example

The following example creates a dictionary with some values, then replaces the contents by clearing the dictionary and adding different values.

```codebyte/python
d = {1:'one',2:'two',3:'three'}
d.clear()
d[4] = 'four'
d[5] = 'five'
d[6] = 'six'
print(d)
```
