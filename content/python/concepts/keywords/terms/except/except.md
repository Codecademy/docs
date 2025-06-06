---
Title: 'except'
Description: 'Catches and handles exceptions raised in the try block.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Error Handling'
  - 'Exceptions'
  - 'Try'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`except`** keyword defines a block of code that executes when an [error](https://www.codecademy.com/resources/docs/python/errors) occurs in the associated try block, allowing the program to handle exceptions gracefully.

## Syntax

```pseudo
try:
  # code that might raise an exception
except:
  # code to handle the exception
```

A specific exception type can also be mentioned as follows:

```pseudo
try:
  # code that might raise an exception
except ExceptionType:
  # code that runs if the specified exception occurs
```

**Parameters:**

- `ExceptionType` (optional): Specifies the type of exception to catch (e.g., `ValueError`, `ZeroDivisionError`).

**Return value:**

- The except block itself does not return a value.
- It executes code when the associated `try` block raises a matching exception.

## Working of the `try-except` block

In the `try` block, code that might cause an error is executed. If an error occurs, the flow jumps to the `except` block to handle it gracefully. Specifying an exception type in `except` limits handling to that particular error, allowing for more precise control.

**Note**: If no exception type is specified, the `except` block will catch all exceptions. It’s best to use specific exception types to avoid unintentionally hiding bugs or critical errors.

## Example: Handling Index Error with a General `except` Block

This example attempts to access an invalid index in a list, triggering an error that is caught using a general `except` block to prevent the program from crashing:

```py
try:
  array = [0, 1, 2]
  # list index out of range
  n = array[3]
except:
  print('An error occurred.')
```

The output for this code block will be:

```shell
An error occurred.
```

## Codebyte Example

The following example demonstrates how the `except` block handles dividing by zero error:

```codebyte/python
try:
  result = 10 / 0
except ZeroDivisionError:
  print('Error: Cannot divide by zero.')
```
