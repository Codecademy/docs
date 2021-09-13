---
Title: 'Comments'
Description: 'A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code. In Python, the # character is used to start a comment. The comment continues after the # until the end of the line. py name = "Pied Piper" # Comment after code  Python does not have a specific syntax for multi-line comments, unlike some other languages. Instead, multiple # characters can be used:'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Single-line Comments

In Python, the `#` character is used to start a comment. The comment continues after the `#` until the end of the line.

```py
# Comment on a single line

name = "Pied Piper" # Comment after code
```

## Multi-line Comments

Python does not have a specific syntax for multi-line comments, unlike some other languages.

Instead, multiple `#` characters can be used:

```py
# This is a comment written over
# more than one line

print("Hello, World!")
```

Another, less official way of writing comments in Python is to use a multi-line string. Python will ignore string literals that are not assigned to a variable, so multi-line strings (created by surrounding text with triple quotes `"""`) can be used as de facto comments:

```py
"""
This is a string written over
more than one line
"""

print("Hello, World!")
```

## Codebyte Example

Here are some examples of comments in a Python program:

```codebyte/py
"""
Tip Calculator
Written by Sonny
"""

# Calculate tip
tip = 18.95 * 0.2

# Output tip
print(tip)
```
