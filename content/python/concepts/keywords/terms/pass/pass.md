---
Title: 'pass'
Description: 'Acts as a placeholder in Python code, allowing empty code blocks (like functions or loops) to run without causing errors.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`pass`** keyword in Python acts as a placeholder in code blocks where no action is required. It prevents syntax errors when a statement is needed but no operation should occur.

## Syntax

```pseudo
def function_name():
  pass
```

The `pass` statement is written in lowercase and is often used inside a [function](https://www.codecademy.com/resources/docs/python/functions), [class](https://www.codecademy.com/resources/docs/python/classes), [loop](https://www.codecademy.com/resources/docs/python/loops), or [conditional](https://www.codecademy.com/resources/docs/python/conditionals) block.

> **Note:** Using incorrect casing like `Pass` or `PASS` will result in a `SyntaxError`.

## Example 1

In this example, the `sum()` function is defined but its logic is not yet implemented:

```py
def sum(a, b):
  pass  # actual logic is yet to be implemented

print(sum(5,6))
```

When called, this function returns `None` because no return statement is defined.

## Codebyte Example

In real projects, developers use `pass` as a temporary placeholder in unfinished functions to keep the program running without errors:

```codebyte/python
# Example: Placeholder for a future login verification function

def verify_login(username, password):
  pass  # Logic will be added later to check user credentials

print("Login system is under construction...")
verify_login("Alice", "mypassword")
```
