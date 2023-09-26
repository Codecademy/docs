---
Title: '.writable()'
Description: 'Allows the user to check if a file is writable or not. The function will return True if the file is writable and accessed in append or write mode, and False if it was accessed in read mode.'
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
  - 'paths/data-science'
---

The `.writeable()` file method allows the user to check if a file is writable or not. The function will return `True` if the file is writable and accessed in append or write mode, and `False` if it was accessed in read mode.

## Syntax

```py
file.writable()
```

## Example 1

Use `.writable()` to check if the `gullivers_travels.txt` file is writable:

```python
f = open("gullivers_travels.txt", "a")

f.writable()
```

The `.writable()` method will return `True` here.

## Example 2

Use `.writable()` to check if the `gullivers_travels.txt` file is writable:

```python
f = open("gullivers_travels.txt", "r")

f.writable()
```

The `.writable()` method will return `False` here.

## Codebyte Example

In this example `writable.txt` is opened in two different ways, and the `.writable()` method is used to return whether or not the file is writable:

```codebyte/python
# Create empty text file
f = open ("writable.txt", "w")

print("Is this file writable when opened in 'write' mode? ", f.writable())


# Open file in read mode and check if file is writable
f = open("writable.txt", "r")

print("Is this file writable when opened in 'read' mode? ", f.writable())
```
