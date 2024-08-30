---
Title: '.write()'
Description: 'Adds additional text to a file when the file is opened in append mode.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Methods'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.write()` file method allows the user to add additional text to a file when the file is opened in append mode.

The position of the additional text is determined by the mode the file was accessed in and the stream position. Append mode will insert the text at the current file handle's reference point. Write mode will first empty the file before inserting the text.

## Syntax

```pseudo
file.write(text)
```

The `text` is a string that is written to a given `file`. Then, the length of `text` is returned.

## Example

In the example below, the `.write()` method is set to append mode (`"a"`) to add text to the end of the `gullivers_travels.txt` file. The file is then opened to view changes to it:

```py
f = open("gullivers_travels.txt", "a")

f.write("Hello Gulliver!!") # Returns 16
f.close()

f = open("gullivers_travels.txt", "r")

print(f.read())

f.close() # Always close the file
```

This will print the following:

```shell
Hello Gulliver!!
```

## Codebyte Example

When in write mode (`"w"`), the `.write()` method first deletes all of the original text in the `gullivers_travels.txt` file. Then, it adds text to the file:

```codebyte/python
f = open("gullivers_travels.txt", "w")

f.write("Hello Gulliver!!")
f.close()

# File is re-opened in "read" mode.
f = open("gullivers_travels.txt", "r")

print(f.read())

f.close()
```
