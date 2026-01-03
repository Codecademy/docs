---
Title: 'singledispatch()'
Description: 'Turn a function into a single-dispatch generic function, allowing different implementations to be registered based on the type of the first argument.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Function'
  - 'Decorators'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, **`functools.singledispatch`** is a [decorator](https://www.codecademy.com/resources/docs/python/decorators) that converts a [function](https://www.codecademy.com/resources/docs/python/functions) into a generic function(a type single function that can perform different actions depending on the data type of the input it receives) with behavior varying by the type of its first argument. It simplifies type-specific logic by allowing separate implementations to be registered instead of relying on multiple [if statements](https://www.codecademy.com/resources/docs/python/conditionals).

## Syntax

The `singledispatch()` function is included in the `functools` [module](https://www.codecademy.com/resources/docs/python/functools-module):

```py
@functools.singledispatch
def func(arg, ...):
  ...
```

**Parameters:**

- Takes a single callable (function) as the argument when used as a decorator.
- The decorated function must accept at least one argument (the one whose type determines dispatch).

**Return value:**

- `singledispatch()` returns a single-dispatch generic function object.
- Additional implementations can be registered for different types using the .register(type) method on the generic function.

## Example 1: Create a generic function `process`

This example uses the `singledispatch` decorator to handle different input types in a custom way:

```py
from functools import singledispatch

@singledispatch
def process(value):
  print("Processing:", value)

@process.register(int)
def _(value):
  print("Processing an integer:", value)

@process.register(str)
def _(value):
  print("Processing a string:", value)

# Function calls
process(10)
process("Hello")
```

Here is the output for this code:

```shell
Processing an integer: 10
Processing a string: Hello
```

## Codebyte Example: Basic type-based greeting

This minimal example shows how `singledispatch()` changes behavior based on the type of its first argument:

```codebyte/python
from functools import singledispatch

@singledispatch
def greet(value):
  print("Hello!")

@greet.register(str)
def _(value):
  print(f"Hello, {value}!")

greet("Alice")
greet(42)
```
