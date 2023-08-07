---
Title: '.unlink()'
Description: 'Allows the user to delete a file path if it exists.'
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

The Python `.unlink()` file method allows the user to delete a file path if it exists in the system or computer. [`.remove()`](https://www.codecademy.com/resources/docs/python/files/remove) is the alternative to delete a specific file.

**Note**: A `FileNotFoundError` is raised if the file is not found or isn't in the current directory.

## Syntax

This method is provided by the `os` module which must be imported beforehand.

```pseudo
import os

os.unlink("file_path")
```

Entire folders or directories can be removed using the [`.rmdir()`](https://www.codecademy.com/resources/docs/python/files/rmdir) method.

## Example

Use `.unlink()` to delete the `my_file.txt` file:

```py
import os

# Delete file path
os.unlink("path/to/my_file.txt")
```
