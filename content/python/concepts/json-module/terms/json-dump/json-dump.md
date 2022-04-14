---
Title: 'json.dump()'
Description: 'Encodes a Python object as a json file.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `dump()` function encodes a Python object as a json file. The encoding conversion is based on the following [table](https://docs.python.org/3/library/json.html#json-to-py-table). The `dumps()` function, alternatively, takes a Python object and returns a json string.

## Syntax

```psuedo
json.dump(py_obj)

json.dumps(py_obj)
```

A `py_obj` can be a string, list, dictionary, etc.

## Example

The `json` library can be used to encode and decode a Python dictionary:

```py
import json
foo = {'first':'hello', 'second':'world'}

bar = json.dumps(foo)
print(type(bar))

eggs = json.dumps(bar)
print(type(eggs))
# Output: <class 'str'> <class 'dict'>
```

## Codebyte Example

The `json.dump` function can be used to convert a Python object to a json file:

```codebyte/python
import json
import string

letters = string.ascii_lowercase

with open('alphabet.json', 'w') as outfile:
    json.dump(letters, outfile)
```
