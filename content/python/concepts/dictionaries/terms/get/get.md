---
Title: '.get()'
Description: 'Returns the value of a dictionary entry for a specified key, with an optional fallback value.'
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

The `.get()` method will return the value of a dictionary entry for a specified key. It may also specify a fallback value if the specified key does not exist in the dictionary.

This method is an alternative to the `dictionary[key]` syntax that does not produce an exception when a key doesn't exist.

## Syntax

```pseudo
dictionary.get(key, value)
```

Where `key` is the key of the value to return and `value` is an optional value to return if `key` does not exist in `dictionary`. If `value` isn't specified, the fallback value will be `None`.

## Codebyte Example

The following example creates a dictionary, then retrieves some values for keys using `.get()`:

```codebyte/python
d = {1:'one', 2:'two', 3:'three'}
print(d.get(3))
print(d.get(4))
print(d.get(4, 'empty'))
```
