---
Title: 'global'
Description: 'Creates a global variable that can be updated.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Scope'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`global`** keyword creates or references a global variable that can be updated within the [scope](https://www.codecademy.com/resources/docs/python/scope) of a [function](https://www.codecademy.com/resources/docs/python/functions) or [class](https://www.codecademy.com/resources/docs/python/classes).

## Syntax

```pseudo
variable = initial_value

def function_name:
  global variable
  # ...

class ClassName:
  global variable

  def example_method:
    global variable
    # ...
```

The snippet above showcases the various places that a `variable` can be referenced with the `global` keyword.

**Note**: The `variable` must not be defined and set within the function/class scope before being referenced with the `global` keyword. Otherwise, an error will occur.

## Codebyte Example

The following is an example of the `global` keyword being used in an `increment()` function:

```codebyte/python
x = 42

print(f"'x' in global scope: {x}\n")

def increment():
  x = 24
  x = x + 1
  print(f"'x' in scope of increment(): {x}\n")

def global_increment():
  global x
  x = x + 1
  print(f"'x' in scope of global_increment(): {x}\n")

print("Running increment()")
increment()

print("Running global_increment()...")
global_increment()
```
