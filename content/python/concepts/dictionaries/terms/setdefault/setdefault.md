---
Title: '.setdefault()'
Description: 'Returns the value of a specified key. If the key does not exist, it is inserted with the specified value.'
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

The `.setdefault()` method will return the value of a dictionary entry for a specified key. If the specified key does not exist in the dictionary, it will create an entry for it with the specified value.

## Syntax

```pseudo
dictionary.setdefault(key, value)
```

Where `key` is the key of the value to return. If `key` does not exist in `dictionary`, it will be created. `value` is an optional parameter specifying the value for `key` if a new entry is created, it has no effect otherwise. If `value` is not specified, the value `None` will be used.

## Codebyte Example

The following example creates a dictionary, then uses `.setdefault()` to return values from it:

```codebyte/python
d = {1:'one', 2:'two', 3:'three'}
print(d.setdefault(3))
print(d.setdefault(4, 'four'))
print(d.setdefault(5))
print(d)
```
