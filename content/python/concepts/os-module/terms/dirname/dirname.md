---
Title: '.dirname()'
Description: 'Returns the part of the pathname ranging from the start to the last forward-slash.'
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

The **`.dirname()`** method returns the part of the pathname ranging from the start to the last forward-slash.

## Syntax

```pseudo
os.path.dirname(path_string)
```

The `path_string` must be a string or byte [data type](https://www.codecademy.com/resources/docs/python/data-types).

## Codebyte Example

The following example showcases the `.dirname()` method using a Codecademy [URL](https://www.codecademy.com/resources/docs/general/url):

```codebyte/python
import os.path

url = "https://www.codecademy.com/learn/learn-python-3"

print(os.path.dirname(url))
```
