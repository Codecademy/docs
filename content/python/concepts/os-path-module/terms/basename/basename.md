---
Title: '.basename()'
Description: 'Returns the part of a pathname after the last forward-slash.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Libraries'
  - 'Modules'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.basename()`** method returns the part of a pathname after the last forward-slash.

## Syntax

```pseudo
os.path.basename(path_string)
```

The `path_string` must be a string or byte [data type](https://www.codecademy.com/resources/docs/python/data-types).

## Codebyte Example

The following example showcases the `.basename()` method using a Codecademy course [URL](https://www.codecademy.com/resources/docs/general/url):

```codebyte/python
import os.path

url = "https://www.codecademy.com/learn/learn-python-3"

print(os.path.basename(url))
```
