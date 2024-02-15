---
Title: '.remove()'
Description: 'Allows the user to delete a file if it exists.'
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

The Python `.remove()` file method allows the user to delete a file if it exists in the system or computer. [`.unlink()`](https://www.codecademy.com/resources/docs/python/files/unlink) is an alternative to delete a file.

**Note**: A `FileNotFoundError` is raised if the file is not found or isn't in the current directory.

## Syntax

This method is provided by the `os` module which must be imported beforehand.

```pseudo
import os

os.remove("file_name.file_type")

os.remove("file_path")
```

The `.remove()` method works in the following ways:

- If the file exists in the current directory, a string argument for the file (written as `"file_name.file_type"`) can be used to successfully delete it.
- A `"file_path"` can also be passed if a file exists outside the current directory.

Entire folders or directories can be removed using the [`.rmdir()`](https://www.codecademy.com/resources/docs/python/files/rmdir) method.

## Example

In the example below, the `.remove()` method is used to delete the `my_file.txt` file:

```py
import os

# Delete file in current directory
os.remove("my_file.txt")

# Delete file in another directory
os.remove("path/to/my_file.txt")
```

## Codebyte Example

The example below creates a file called `example.txt` and then deletes it using the `.remove()` method. The `.isfile()` method is used to show at which stage the file is found.

```codebyte/python
filename = "example.txt"
f = open(filename, "w")
f.close()

print("File found." if os.path.isfile(filename) else "File not found.")

os.remove(filename)

print("File found." if os.path.isfile(filename) else "File not found.")
```
