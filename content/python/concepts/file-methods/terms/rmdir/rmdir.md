---
Title: '.rmdir()'
Description: 'Allows the user to delete a folder.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Files'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The Python `.rmdir()` method allows the user to delete a folder if it exists in the system or computer and does not contain other folders or files. This method is provided by the `os` module which must be imported beforehand.

## Syntax

```pseudo
os.rmdir("foldername")
```

Files can be removed using the [`.remove()](https://www.codecademy.com/resources/docs/python/file-methods/remove)` method.

## Example

Use `.rmdir()` to delete the **removeme** folder:

```python
import os

os.rmdir("removeme")
```
