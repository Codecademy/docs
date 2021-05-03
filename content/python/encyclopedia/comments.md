---
Title: "Comments in Python"
Subjects:
  - "Code Foundations"
  - "Computer Science Path"
Tags: 
  - "comment"
  - "documentation"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

A comment is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Syntax

In Python, the `#` character is used to start a comment and it continues until the end of the line.

```py
# Comment on a single line
 
user = "JDoe" # Comment after code
```

## Multi-line Comments

Python does not have a specific syntax for multi-line comments, like some other languages.

Instead, multiple `#` can be used:

```py
# This is a comment written in
# more than just one line

print("Hello, World!")
```

Or, not quite as intended, a multi-line string can be used instead.

Since Python will ignore string literals that are not assigned to a variable, you can add a multi-line string (triple quotes `"""`) in your code, and place your comment inside it:

```py
"""
This is a string written in
more than just one line
"""

print("Hello, World!")
```

As long as the string is not assigned to a variable, Python will read the code, but then ignore it, and you have made a multi-line comment.
