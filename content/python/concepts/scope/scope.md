---
Title: 'Scope'
Description: 'Scope refers to the areas that variables are visible and accessible.'
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

Scope refers to the areas that variables are visible and accessible. Variables that can be accessed anywhere in a Python program are in the global scope. Conversely, variables that are defined within the body of structures like classes and methods exist only in the local scope.

## Local Scope

Suppose there is a function and a variable is initialized in it. Now this variable can only be used within that funtion not from outside the function.

```
def fun():
 x = 200
 print(x)

myfun()
```

## Nested Functions and Local Scope

In the example below, a variable `x` is defined within the local scope of the `outer_function()` function, followed by a defined `inner_function()` function. Since `inner_function()` exists within the local scope of `outer_function()`, `x` can be accessed and printed within `inner_function()`:

```
def outer_function():
  x = 200
  #initialised in outer function.

  def inner_function():
      print(x)
  inner_function()

outer_function()
# Output: 200
```

## Global Scope

A variable initialised in the main body is defined as a **global** variable and can be used anywhere in the code. It could be nested blocks, loops, etc.

```py
x = 200

def fun():
  print(x)

fun()
print(x)
"""
Output:
200
200
"""
```
