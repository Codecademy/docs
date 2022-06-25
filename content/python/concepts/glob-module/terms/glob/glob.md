---
Title: '.glob()'
Description: 'Returns a list of possible matches for a pathname string.'
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

The `.glob()` method returns a list of possible matches for a pathname string.

## Syntax

```pseudo
glob.glob(pathname, recursive)
```

The `pathname` must be a valid string that represents a file path that can either be absolute or relative.

By default, `recursive` is set to `False`. But when set to `True`, the pattern `**` can be used to match any files and folders in a given directory.

## Example

The example below showcases some common use-cases for the `.glob()` method:

```py
import glob

# Files in current folder
glob.glob('*.*')

# Files in subfolder
glob.glob('*/*')

# Everything in current folder
glob.glob('**/*', recursive=True)
```
