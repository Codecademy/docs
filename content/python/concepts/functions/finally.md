---
Title: 'finally'
Description: 'The `finally` block in Python is used in conjunction with `try` and `except` to define cleanup actions that must be executed regardless of whether an exception was raised or not'
Subjects:
  - 'Computer Science'
Tags:
  - 'Python'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

# `finally`

**Definition**  
The `finally` block in Python is used in conjunction with `try` and `except` to define cleanup actions that must be executed **regardless of whether an exception was raised or not**.

**Syntax**
```python
try:
    # code that might raise an exception
except SomeException:
    # code that handles the exception
finally:
    # code that always runs
```

**Example**
```python
try:
    file = open("example.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found.")
finally:
    file.close()  # Always closes the file, even if an error occurred
```

**Use Case**
- Ensures important cleanup code runs (e.g., closing files, releasing resources, disconnecting from a database).

**Notes**
- The `finally` block is optional but recommended when resources need to be released.
- If no exceptions are raised, the `finally` block still executes after the `try` block.

**Related Concepts**
- `try` – Defines a block of code to test for errors.
- `except` – Handles exceptions raised in the `try` block.
- `else` – Runs if the `try` block does not raise an exception.
- [`Python`](https://docs.python.org/3/tutorial/errors.html) – for documentation.



