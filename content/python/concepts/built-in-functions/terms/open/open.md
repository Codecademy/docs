---
Title: 'open()'
Description: ''
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

## Opening files

In Python, the `open()` function is built-in, and can be used to open files. To open a file, the file name can be specified in the function. Do note that the entire file path has to be specified unless the file is in the current directory.

There are several modes Python can do when opening a file. The default one is reading. Here is a list of modes.

r - reads a file\
w - writes a file\
a - appends a file\
x - creates a file

Files can be read in either text or binary, and are denoted as `t` and `b` respectively. The default is text.

```py
open("text.txt") # To open a file. Remember the default is reading in text form!
open("text.txt", 'bx') # Creates a file in binary mode
```
