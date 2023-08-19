---
Title: '.seek()'
Description: "Allows the user to move the location of the file handle's reference point within an open file from one place to another."
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

The `.seek()` file method allows the user to move the location of the file handle's reference point within an open file from one place to another.

## Syntax

```py
file.seek(offset, from what location)
```

## Example

Use `.seek()` to change the position of the reference point within the `gullivers_travels.txt` file:

```python
f = open("gullivers_travels.txt", "r")

# Print first line of the document from default 0th position
print(f.readline())

# Change the reference point to the 50th index position
f.seek(50)

# Print line from new reference point
print(f.readline())

f.close()
```

## Codebyte Example

The example below opens a file named `demofile.txt` first at the default position, Then again using `.seek()` at the 5th index position:

```codebyte/python
import os

# Creates a text file with Example text
with open('demofile.txt', 'w') as f:
    # Adding Example Text
    f.write('This text is an example.')

f = open('demofile.txt', 'r')

# Prints first line of document from default position
print(f.readline())

# Changes the reference point
f.seek(5)

# Prints the first line from new reference point
print(f.readline())

# Closes the file
f.close()
```
