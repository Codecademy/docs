---
Title: '.load()'
Description: 'Decodes a JSON file and returns a Python object.'
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

The `.load()` function decodes a [JSON](https://www.codecademy.com/resources/docs/general/json) file and returns a Python object. The decoding conversion is based on the following [table](https://docs.python.org/3/library/json.html#json-to-py-table). The `.loads()` function, alternatively, takes a JSON string and returns a Python object.

## Syntax

```pseudo
json.load(json_file)

json.loads(json_string)
```

## Example

The `json` library can be used to encode and decode a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries):

```py
import json
foo = {'first':'hello', 'second':'world'}

bar = json.dumps(foo)
print(type(bar))

eggs = json.loads(bar)
print(type(eggs))
```

The output will look like this:

```py
<class 'str'>
<class 'dict'>
```

## Codebyte Example

The `.load()` function can be used to convert a JSON file to a Python object:

```codebyte/python
import json
from urllib.request import urlopen

with urlopen('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json') as response:
    spam = json.load(response)

print([x for x in spam if x['title'].startswith('The Fast and the Furious')])
```
