---
Title: 'try'
Description: 'Attempts to execute a block of code and lets the program handle exceptions gracefully if errors occur.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Error Handling'
  - 'Exceptions'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`try`** keyword in Python is used to define a block of code that may raise an exception, allowing errors to be caught and handled gracefully with `except`, and optionally complemented by `else` and `finally` clauses.

## Syntax

```py
try:
  # Code that might raise an exception
except ExceptionType:
  # Code to handle the exception
else:
  # (optional) Code to run if no exceptions occur
finally:
  # (optional) Code that always runs
```

**Parameters:**

- `except ExceptionType` (optional): Specifies the type of exception to catch. Multiple `except` blocks can handle different exceptions.
- `else` (optional): A block that runs only if the `try` block did not raise an exception.
- `finally` (optional): A block that always runs, regardless of whether an exception occurred or not.

**Return value:**

The `try` statement itself does not return a value. It controls the flow of execution by handling exceptions within its block.

## Example: Handling Division Error with try-except

This example shows how to catch a `ZeroDivisionError` using a simple `try-except` block:

```py
try:
  x = 10 / 0
except ZeroDivisionError:
  print("Cannot divide by zero.")
```

The output of this code will be:

```shell
Cannot divide by zero.
```

## Codebyte Example: Handling Multiple Exceptions with `try-except-finally`

This example captures both invalid input and division-by-zero errors while ensuring a final message always prints:

```codebyte/python
try:
  number = 5
  print("Reciprocal is:", 1 / number)
except ValueError:
  print("That's not a valid number!")
except ZeroDivisionError:
  print("Cannot divide by zero.")
finally:
  print("Thanks for trying!")
```

> **Note:** Change the value entered for `number` to see different results and exception handling in action.
