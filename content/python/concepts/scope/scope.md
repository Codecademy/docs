---
Title: 'Scope'
Description: 'Scope refers to the areas where variables are visible and accessible.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Conceptual'
  - 'Scope'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Scope** refers to the areas where variables are visible and accessible. Variables that can be accessed anywhere in a Python program are in the global scope. Conversely, variables that are defined within the body of structures like classes and methods exist only in the local scope.

## Local Scope

Suppose a variable is initialized within a function. This variable can only be used within that function and not from outside the function.

```py
def my_function():
 x = 200
 print(x)

my_function()
```

## Nested Functions and Local Scope

In the example below, a variable `x` is defined within the local scope of the `outer_function()` function, followed by a defined `inner_function()` function. Since `inner_function()` exists within the local scope of `outer_function()`, `x` can be accessed and printed within `inner_function()`:

```py
def outer_function():
  x = 200
  # Initialized in outer function

  def inner_function():
    print(x)
  inner_function()

outer_function()
# Output: 200
```

## Global Scope

A variable initialized in the main body is defined as a global variable and can be used anywhere in the code, including nested blocks, loops, etc. This is because these variables exist in the global scope of the code.

```codebyte/python
x = 200

def fun():
  print(x)

fun()

print(x)
```
