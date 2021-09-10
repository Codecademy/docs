---
Title: '.write()'
Description: 'Allows the user to add additional text to a file when the file is opened in append mode.'
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

The position of the additional text is determined by the mode the file was accessed in and the stram position. Append mode will insert the text at the current file handle's reference point. Write mode will first empty the file before inserting the text.

## Syntax

```py
file.write(text)
```

## Example 1

Use `.write()` in append mode to add text to the end of the **gullivers_travels.txt** file, then open the file to view changes to the file:

```python
f = open("gullivers_travels.txt", "a")

f.write("Hello Gulliver!!")
f.close()

f = open("gullivers_travels.txt", "r")

print(f.read())
```

## Example 2

Use `.write()` in write mode to first delete all the original text in the **gullivers_travels.txt** file, then add text to the file. Finally view the changes to the file:

```python
f = open("gullivers_travels.txt", "w")

f.write("Hello Gulliver!!")
f.close()

f = open("gullivers_travels.txt", "r")

print(f.read())
```
