---
Title: '.exists()'
Description: 'Checks whether a given file or folder exists in the directory of an operating system.'
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

The **`.exists()`** method checks whether a given file or folder exists in the operating system's directory.

## Syntax

```pseudo
os.path.exists(path_string)
```

The `path_string` must be a string or byte [data type](https://www.codecademy.com/resources/docs/python/data-types) that represents a file or folder.

## Codebyte Example

The following example uses [Python files](https://www.codecademy.com/resources/docs/python/files) to showcase the `.exists()` method:

```codebyte/python
import os.path

f = open('file_a.py', 'w')
f.close()

print(os.path.exists('./file_a.py'))

print(os.path.exists('./file_b.py'))
```
