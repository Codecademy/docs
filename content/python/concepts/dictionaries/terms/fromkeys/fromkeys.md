---
Title: '.fromkeys()'
Description: 'Returns a dictionary with the specified keys.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dictionaries'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.fromkeys()` method returns a dictionary with a specified set of keys. It can also initialize the entries with a specified value.

## Syntax

```py
dict.fromkeys(keys,value)
```

Where `keys` is an iterable containing the keys for the new dictionary and `value` is an optional inital value for the new entries in the dictionary. If `value` is not specified, the default inital value for each key will be `None`.

## Codebyte Example

The following example creates a new dictionary with an inital value for each key.

```py
keylist = ('A','B','C','D')
value = 0
d = dict.fromkeys(keylist,value)
print(d)
```
