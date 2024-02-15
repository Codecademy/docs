---
Title: '.update()'
Description: 'Adds the entries in a specified dictionary, or iterable of key-value pairs, to a dictionary.'
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

The `.update()` method returns new Python dictionary with entries from another dictionary, or some other iterable, added to it.

## Syntax

```pseudo
dictionary.update(entries)
```

Where `entries` is another dictionary or an iterable of key-value pairs. Pairs in `dictionary` are replaced by any pair in `entries` with a duplicate key.

## Codebyte Example

The following example creates two dictionaries, then adds the entries from one to the other.

```codebyte/python
d1 = {1:'one',2:'two', 3:'three'}
d2 = {4:'four', 5:'five', 6:'six'}
d1.update(d2)
print(d1)
```
