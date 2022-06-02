---
Title: '.dump()'
Description: 'Encodes a Python object as a JSON file.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
  - 'JSON'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.dump()` function encodes a Python object as a [JSON](https://www.codecademy.com/resources/docs/general/json) file. The encoding conversion is based on the following [table](https://docs.python.org/3/library/json.html#json-to-py-table). The `.dumps()` function, alternatively, takes a Python object and returns a JSON string.

## Syntax

```pseudo
json.dump(py_obj, file_name)

json.dumps(py_obj)
```

A `py_obj` can be a string, list, dictionary, etc.

## Example

The `.dump()` function can be used to convert a Python object to a JSON file:

```py
import json
import string

letters = string.ascii_lowercase

with open('alphabet.json', 'w') as outfile:
    json.dump(letters, outfile)
```

## Codebyte Example

The `json` library can be used to encode and decode a Python dictionary:

```codebyte/python
import json
foo = {'first':'hello', 'second':'world'}

bar = json.dumps(foo)
print(type(bar))

eggs = json.loads(bar)
print(type(eggs))
```
