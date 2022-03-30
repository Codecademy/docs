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

**Note**  A `FileNotFoundError` is raised if the directory is not found or isn't in the current directory.

## Syntax

```pseudo
os.rmdir("foldername")

os.rmdir("folder_path")
```

- A folder that is passed into `.rmdir()` will be successfully deleted if it exists in the current directory.
- A folder's path can also be passed into `.rmdir()` if it's outside the current directory.

Files can be removed using the [`.remove()`](https://www.codecademy.com/resources/docs/python/file-methods/remove) method.

## Example

Use `.rmdir()` to delete the **myfolder** folder:

```python
import os

# Delete folder in current directory
os.rmdir("myfolder")

# Delete folder in another directory
os.rmdir("/path/to/myfolder")
```
