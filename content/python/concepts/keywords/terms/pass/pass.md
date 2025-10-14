---
Title: 'pass'
Description: 'Used as a placeholder when defining functions, indicating that the logic is yet to be implemented but allowing the program to run without errors.'
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

The **`pass`** keyword in Python is used inside a [function](https://www.codecademy.com/resources/docs/python/functions) to act as a placeholder instead of the actual logic. No output is provided.

## Syntax

```pseudo
def function_name():
  pass
```

The `pass` statement is used inside a function defined using the `def` keyword. It must be written in lowercase (`pass`). Using incorrect casing like `Pass` or `PASS` will result in a `SyntaxError`.

## Example 1

In this example, the `sum()` function is defined but its logic is not yet implemented.

```py
def sum(a, b):
  pass  # actual logic is yet to be implemented
```

The output of this code is:

```shell
None
```

## Codebyte Example

A function containing only `pass` does nothing and implicitly returns `None`, since no return statement is provided. The following code demonstrates the same:

```codebyte/python
# Change the value of num and click run to see how the function output changes.

def sum(a, b):
  pass

print(sum(5,6))
```
