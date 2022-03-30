---
Title: '.unlink()'
Description: 'Allows the user to delete a file path.'
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

The Python `.unlink()` file method allows the user to delete a file path if it exists in the system or computer. This method is provided by the `os` module which must be imported beforehand. [`.remove()`](https://www.codecademy.com/resources/docs/python/file-methods/remove) is the alternative to delete a specific file.

## Syntax

```pseudo
os.unlink("file_path")
```

## Example

Use `.unlink()` to delete the **my_file.txt** file:

```python
import os

os.unlink("my_file.txt")

os.unlink("path/to/my_file.txt")
```
