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

The **`eval()`** function returns the value of a Python expression passed as a [string](https://www.codecademy.com/resources/docs/python/strings).

## Security Concerns

While `eval()` can be useful, care must be taken to understand the security implications of this function. If `eval()` is used with user-generated strings, a malicious user could execute arbitrary code through the function. Good programming practice generally advises against using `eval()`. If it is used, it should never be used with untrusted input.

## Syntax

```pseudo
eval(expression, globals, locals)
```

The `eval()` function uses the following parameters:

- `expression`: The expression to evaluate.
- `globals` (optional): A [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) defining which [variables](https://www.codecademy.com/resources/docs/python/variables) are in the `expression`'s global [scope](https://www.codecademy.com/resources/docs/python/scope). If `globals` isn't specified, `eval()` uses the current global scope.
- `locals` (optional): A dictionary defining the variables in the `expression`'s local scope. If the `locals` argument is specified, the `globals` argument must be specified as well.

> **Note:** While using the `globals` argument overrides the user defined variables available, if it doesn't specify a value for the `__builtins__` key, then a reference for it is automatically added so that `eval()` will have access to all of Python's built-in names when evaluating `expression`.
>
> **Note:** `eval()` does not support keyword arguments and it doesn't work on compound statements or assignment operations. It only works with expressions that can be evaluated to be equal to some value.

## Example

The following example uses `eval()` to evaluate an expression using variables in the current global scope, then evaluates the same expression with its own global scope:

```py
x = 10
y = 5

print(eval("x + y")) # Output: 15
print(eval("x + y", {"x":15, "y":y})) # Output: 20
```

## Codebyte Example

In the examples below, the `eval()` function is used to return a value from a string:

```codebyte/python
x = 2
y = 3

print(eval("x * y"))
print(eval("x * y", {"x": 3, "y": y}))
print(eval("min([-10, 20, 45])"))

# The following example will create a TypeError as the first argument must be a string
# print(eval(x*y))
```
