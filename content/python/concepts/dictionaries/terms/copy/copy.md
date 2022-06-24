---
Title: '.copy()'
Description: 'Returns a copy of a dictionary.'
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

The `.copy()` method of a Python dictionary returns a copy of the dictionary. It takes no arguments.

## Syntax

```pseudo
dictionary.copy()
```

## Codebyte Example

The following example creates a dictionary, creates a copy of the dictionary, then adds new elements to the copy.

```codebyte/python
d = {1:'one',2:'two',3:'three'}

d_copy = d.copy()
d_copy[4] = 'four'
d_copy[5] = 'five'
d_copy[6] = 'six'

print(d)
print(d_copy)
```
