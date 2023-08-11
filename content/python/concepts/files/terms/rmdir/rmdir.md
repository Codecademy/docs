---
Title: '.rmdir()'
Description: 'Allows the user to delete a folder if it exists.'
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

The Python `.rmdir()` method allows the user to delete a folder if it exists in the system or computer and does not contain other folders or files.

**Note**: A `FileNotFoundError` is raised if the directory is not found.

## Syntax

This method is provided by the `os` module which must be imported beforehand.

```pseudo
import os

os.rmdir("folder_name")

os.rmdir("folder_path")
```

The `.rmdir()` method works in the following ways:

- A `"folder_name"` that will be successfully deleted if the folder exists in the current directory.
- A `"folder_path"` can also be passed if it exists outside of the current directory.

Files can be removed using the [`.remove()`](https://www.codecademy.com/resources/docs/python/files/remove) method.

## Example

Use `.rmdir()` to delete the `myfolder` folder:

```py
import os

# Delete folder in current directory
os.rmdir("myfolder")

# Delete folder in another directory
os.rmdir("/path/to/myfolder")
```
