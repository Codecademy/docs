---
Title: 'finally'
Description: 'Defines a block of code that is guaranteed to run without depending on what happens in the try block.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Error Handling'
  - 'Exceptions'
  - 'Python'
  - 'Try'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `finally` keyword in Python is used in conjunction with [`try`](https://www.codecademy.com/resources/docs/python/keywords/try) and optionally [`except`](https://www.codecademy.com/resources/docs/python/keywords/except) blocks. It defines a block of code that is guaranteed to run, no matter what happens in the `try` block — whether an [error](https://www.codecademy.com/resources/docs/python/errors) occurs or not. This is particularly useful for actions like closing [files](https://www.codecademy.com/resources/docs/python/files), releasing resources, or cleaning up after an operation.

## Syntax

```pseudo
try:
  # Code that may raise an exception
  ...
except SomeException:
  # Code to handle the exception
  ...
finally:
  # Code that will run no matter what
  ...
```

In the syntax:

- `try`: Defines the code block to test for errors.
- `except` (Optional): Catches and handles specific exceptions.
- `finally`: Always runs, regardless of whether an exception occurred.

## Example 1: Basic `Try-Finally` Without Exception

In this example, there is no exception, but the `finally` block runs regardless:

```py
try:
  print("Running try block...")
finally:
  print("This will always run.")
```

Here is the output:

```shell
Running try block...
This will always run.
```

## Example 2: File Handling with `finally`

In this example, `finally` is used to ensure that a file or resource is closed or released even if an error happens during processing:

```py
try:
  file = open("example.txt", "w")
  file.write("Hello, World!")
except IOError:
  print("File operation failed.")
finally:
  file.close()
  print("File closed.")
```

Here is the output:

```shell
File closed.
```

## Codebyte Example: `Try-Except-Finally` with an Exception

In this codebyte example, an exception occurs, and the `except` block handles it — but the `finally` block still runs afterward:

```codebyte/python
try:
  result = 10 / 0
except ZeroDivisionError:
  print("Division by zero!")
finally:
  print("Cleaning up...")
```

## Frequently Asked Questions

### 1. Can I use `finally` without an `except` block?

Yes. `finally` can be used with just a `try` block:

```py
try:
  risky_operation()
finally:
  print("Always executed.")
```

### 2. What happens if an exception is not caught but a `finally` block exists?

The `finally` block still runs, and the exception is propagated after its execution:

```py
try:
  1 / 0
finally:
  print("Finally runs before the exception is raised.")
```

### 3. Can `finally` suppress exceptions?

No. The `finally` block does not suppress exceptions unless it raises another exception or the program exits using `sys.exit()` or similar. Any exception in the `try` block will still propagate after the `finally` block executes.
