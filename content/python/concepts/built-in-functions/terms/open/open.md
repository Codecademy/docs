---
Title: 'open()'
Description: 'Used for opening files in a Python program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `open()` function is built into Python and can be used for opening files.

## Syntax

```pseudo
# First syntax
f = open("file-name.format")
f.close()

# Second syntax
with open("file-name.format") as f:
  print("This syntax auto-closes the file.")
```

As shown above, the `open()` function uses two distinct syntaxes:

- The first is assigned to a variable and closed afterwards with the [.close()](https://www.codecademy.com/resources/docs/python/files/close) method.
- The second uses the `with` keyword that includes a self-closing function body.

In both cases, file names can be specified in the `open()` function. An important point to note is that unless the file exists within the scope of the current directory, the entire file path must be specified.

## File Modes

There are several modes Python can do when opening a file. Some commonly-used modes include the following:

- `'r'`: Reads from an existing file (default mode).
- `'w'`: Writes to a file (initially trims the whitespace).
- `'a'`: Appends the content of an existing file.
- `'x'`: Creates a new file with the provided name string.

## Example

Files can be read in either a textual or binary format and denoted as `t` and `b`, respectively. The default format is text.

```py
open("text.txt") # To open a file
open("text.txt", 'bx') # Creates a file in binary mode
```

## Codebyte Example

In the example below, multiple calls to the `open()` function are made, using several modes to initially create a file with some content and then overwrite it:

```codebyte/python
# Create the file
f = open("text.txt", "w")

f.write("Hello, World!\n")

# Amend the file
f = open("text.txt", "a")

f.write("Hello, Code Ninjas!")

# Read from the file
f = open("text.txt", "r")

# Display its contents
print(f.read())

# Close the file
f.close()
```
