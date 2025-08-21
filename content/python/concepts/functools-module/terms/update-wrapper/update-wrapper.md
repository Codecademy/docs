---
Title: 'update_wrapper()'
Description: 'Updates a wrapper function to look like the wrapped function by copying attributes like `__name__`, `__doc__`, and `__module__`.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Best Practices'
  - 'Decorators'
  - 'Functions'
  - 'Metadata'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`update_wrapper()`** function from the `functools` module updates a wrapper function to look like the wrapped function by copying attributes such as `__name__`, `__doc__`, and `__module__`. This is essential for creating decorators that preserve the original function's metadata, making debugging and introspection much easier.

## Syntax

```pseudo
from functools import update_wrapper

update_wrapper(wrapper, wrapped, assigned=WRAPPER_ASSIGNMENTS, updated=WRAPPER_UPDATES)
```

**Parameters:**

- `wrapper`: The function that is acting as a wrapper (e.g., inside a decorator).
- `wrapped`: The original function being wrapped.
- `assigned`: A tuple of attribute names to copy (defaults to `WRAPPER_ASSIGNMENTS`)
- `updated`: A tuple of attribute names to update (defaults to `WRAPPER_UPDATES`)

**Return value:**

The `update_wrapper()` function returns the `wrapper` function itself, after updating it with the attributes of `wrapped`.

## Example

This example demonstrates how `update_wrapper()` preserves the original function's metadata when creating a decorator:

```py
from functools import update_wrapper

def my_decorator(func):
  def wrapper(*args, **kwargs):
    print(f"Calling {func.__name__}")
    return func(*args, **kwargs)
  
  # Update the wrapper to look like the original function
  update_wrapper(wrapper, func)
  return wrapper

@my_decorator
def greet(name):
  """A simple greeting function."""
  return f"Hello, {name}!"

# Check that metadata is preserved
print(f"Function name: {greet.__name__}")
print(f"Function docstring: {greet.__doc__}")
```

Here is the output:

```shell
Function name: greet
Function docstring: A simple greeting function.
```

## Codebyte Example

This codebyte example shows the difference between using and not using `update_wrapper()`:

```codebyte/python
from functools import update_wrapper

def decorator_without_update(func):
  def wrapper(*args, **kwargs):
    print(f"Executing {func.__name__}")
    return func(*args, **kwargs)
  return wrapper

def decorator_with_update(func):
  def wrapper(*args, **kwargs):
    print(f"Executing {func.__name__}")
    return func(*args, **kwargs)

  # This preserves the original function's metadata
  update_wrapper(wrapper, func)
  return wrapper

@decorator_without_update
def function1():
  """This is function1."""
  return "Hello from function1"

@decorator_with_update
def function2():
  """This is function2."""
  return "Hello from function2"

# Check metadata preservation
print("Without update_wrapper:")
print(f"Name: {function1.__name__}")
print(f"Docstring: {function1.__doc__}")

print("\nWith update_wrapper:")
print(f"Name: {function2.__name__}")
print(f"Docstring: {function2.__doc__}")

# Call the functions
print(f"\nResult: {function1()}")
print(f"Result: {function2()}")
```
