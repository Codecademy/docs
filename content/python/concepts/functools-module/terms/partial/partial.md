---
Title: 'partial()'
Description: 'Creates a new function with some arguments of the original function pre-filled.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`functools.partial()`** function in Python’s [`functools`](https://docs.python.org/3/library/functools.html) module returns a new callable with some arguments of the original function fixed (pre-filled). This can simplify calls by creating specialized versions of existing functions.

## Syntax

```pseudo
from functools import partial
partial_func = partial(func, /, *args, **keywords)
```

**Parameters:**

- `func`: The original callable to be partially applied.
- `*args`: Positional arguments to pre-fill.
- `**keywords`: Keyword arguments to pre-fill.

**Return value:**

A `functools.partial` object that behaves like the original function but with the specified arguments fixed.

## Example: Pre-filling a Keyword Argument

In this example, the `exponent` parameter is fixed to 2, creating a specialized version of the `power` function that always squares the input:

```py
from functools import partial

def power(base, exponent):
  return base ** exponent

square = partial(power, exponent=2)

print(square(5))
```

The output of this code is:

```shell
25
```

## Codebyte Example: Pre-filling a Positional Argument

This example fixes the `greeting` argument of the `greet` function to always use `"Hello"`:

```codebyte/python
from functools import partial

def greet(greeting, name):
  return f"{greeting}, {name}!"

say_hello = partial(greet, "Hello")

print(say_hello("Alice"))
print(say_hello("Bob"))
```
