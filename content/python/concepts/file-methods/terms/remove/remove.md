---
Title: '.remove()'
Description: 'Allows the user to delete a file.'
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

The Python `.remove()` file method allows the user to delete a file if it exists in the system or computer. This method is provided by the `os` module which must be imported beforehand.

## Syntax

```pseudo
os.remove("file_name.file_type")
```

Entire folders or directories can be removed using the [`.rmdir()`](https://www.codecademy.com/resources/docs/python/file-methods/rmdir) method.

## Example

Use `.remove()` to delete the **my_file.txt** file:

```python
import os

os.remove("my_file.txt")
```
