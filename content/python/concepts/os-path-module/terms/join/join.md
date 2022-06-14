---
Title: '.join()'
Description: 'Returns a string of pathnames delimited with a forward-slash.'
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

The **`.join()`** method returns a string of pathnames delimited with a forward-slash.

## Syntax

```pseudo
os.path.join(path_1, path_2,..., path_n)
```

Before being added to the returned value, each subsequent `path_` string is prepended with a forward-slash `/`.

## Codebyte Example

The following example showcases the `.join()` method:

```codebyte/python
import os.path

path_a = "this-path"
path_b = "that-path"
path_c = "another-path"

print(os.path.join(path_a, path_b, path_c))
```
