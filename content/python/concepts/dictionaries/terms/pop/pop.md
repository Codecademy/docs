---
Title: '.pop()'
Description: 'Returns the value of a specified key, then removes the key-value pair from a dictionary.'
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

The `.pop()` method of a Python dictionary returns the value of a specified key, then removes the key-value pair from the dictionary.

## Syntax

```pseudo
dictionary.pop(key)
```

Where `key` is the key of the value to return and the entry to remove.

## Codebyte Example

The following example creates a dictionary and "pops" a value from it:

```codebyte/python
d = {1:'one', 2:'two', 3:'three'}
d_value = d.pop(2)
print(d_value)
print(d)
```
