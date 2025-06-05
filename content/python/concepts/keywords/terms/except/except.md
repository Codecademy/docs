---
Title: 'except'
Description: 'Handles errors that occur in a try block.'
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

The **`except`** keyword defines a block of code that runs if an [error](https://www.codecademy.com/resources/docs/python/errors) occurs in the associated **`try`** block, allowing for graceful exception handling.

## Syntax

```pseudo
try:
    # code that may raise an exception
except:
    # code to handle the exception
```

A specific exception type can also be mentioned.

```pseudo
try:
    # code that may raise an exception
except ExceptionType:
    # code to handle the exception
```

In the `try` block, code that might cause an error is executed. If an error occurs, the flow jumps to the `except` block to handle it gracefully. Specifying an exception type in `except` limits handling to that particular error, allowing for more precise control.

**Note**: If no exception type is specified, the `except` block will catch all exceptions. Use specific exception types whenever possible to avoid unintentionally hiding errors.

## Example

```py
try:
    array = [0, 1, 2]
    # list index out of range
    n = array[3]
except:
    print('An error occurred.')
```

## Codebyte Example

The following example demonstrates how the `except` block handles dividing by zero error.

```codebyte/python
try:
    result = 10 / 0
except ZeroDivisionError:
    print('Error: Cannot divide by zero.')
```
