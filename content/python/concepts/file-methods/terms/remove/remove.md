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

**Note**: A `FileNotFoundError` is raised if the file is not found or isn't in the current directory.

## Syntax

```pseudo
os.remove("file_name.file_type")

os.remove("file_path")
```

- A file that is passed into `.remove()` will be successfully deleted if it exists in the current directory.
- A file's path can also be passed into `.remove()` if it's outside the current directory.

Entire folders or directories can be removed using the [`.rmdir()`](https://www.codecademy.com/resources/docs/python/file-methods/rmdir) method.

## Example

Use `.remove()` to delete the **my_file.txt** file:

```python
import os

# Delete file in current directory
os.remove("my_file.txt")

# Delete file in another directory
os.remove("path/to/my_file.txt")
```
