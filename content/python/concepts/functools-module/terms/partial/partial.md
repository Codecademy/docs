---
Title: functools-partial()
Description: functools.partial() is a function in the Python functools module that allows you to "pre-fill" or "fix" some arguments of a function, returning a new function with fewer arguments. This is useful for creating specialized or simplified versions of existing functions.

Subjects: 
  - Computer Science

Tags:
  - Python
  - Functions

CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'

---

`functools.partial()` is a function provided by Python’s `functools` module that allows you to **fix (pre-fill) some arguments** of a function and return a new function with fewer arguments.


## Syntax

python
from functools import partial

partial_func = partial(func, /, *args, **keywords)

## Example

from functools import partial

def power(base, exponent):
    return base ** exponent

# Create a version of power that always squares the input
square = partial(power, exponent=2)

print(square(5))  # Output: 25

## Codebyte Example (if applicable)

We can currently support:

- Python

from functools import partial

def greet(greeting, name):
    return f"{greeting}, {name}!"

# Create a new function that always uses "Hello" as the greeting
say_hello = partial(greet, "Hello")

# Use the partial function
print(say_hello("Alice"))   # Output: Hello, Alice!
print(say_hello("Bob"))     # Output: Hello, Bob!
See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js

