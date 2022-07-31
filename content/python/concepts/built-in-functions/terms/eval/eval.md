---
Title: 'eval()'
Description: 'Returns the value of a Python expression passed as a string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`eval()`** function returns the value of a python expression passed as a string. 

## Syntax

```pseudo
eval(expression, globals, locals)
```

The argument `expression` is the expression to evaluate. The optional argument `globals` is a dictionary defining what variables are in the `expression`'s global scope. If `globals` isn't specified, `eval()` uses the current global scope.  The optional argument `locals` is a dictionary defining the variables in the `expression`'s local scope. If the `locals` argument is specified, the `globals` argument must be specified as well. It's not possible to use keyword arguments with `eval()`.

**Note:** While using the `globals` argument overrides the user defined variables avalible, if it doesn't specify a value for the key `__builtins__`, then a refrence for it is automatically added so that `eval()` will have access to all of Python's built-in names when evaluating `expression`.

**Note:** `eval()` doesn't work with compound statements or assignment operations. It only works with expressions that can be evaluated to be equal to some value.

## Examples

```py
x = 10
y = 5

print(eval("x + y")) # Output 15.
print(eval("x + y"), {"x":15, "y":y}) # Output 20.
```
