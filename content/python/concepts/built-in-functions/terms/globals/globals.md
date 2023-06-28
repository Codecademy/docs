---
Title: 'globals()'
Description: 'Returns a dictionary with all the global variables and symbols for the current program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dictionary'
  - 'Scope'
  - 'Values'
  - 'Variable Types'
  - 'Variables'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The built-in **`globals()`** function allows access to the global scope's name table, which is a writable dictionary containing the current global names and their corresponding values in the code. This function can be used to access or modify the value of a global variable from within functions.

## Syntax

```pseudo
globals()
```

- This method doesn't take any parameters.
- This method returns the dictionary of the current global symbol table.

## Example 1

```py
length = 123

print(globals())
```

This code returns the following dictionary. Notice that the `length` global variable is listed in the dictionary.

```shell
{'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <class '_frozen_importlib.BuiltinImporter'>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, 'length': 123}
```

## Example 2

```py
length = 123

globals()['length'] = 125
print('The length is:', length)
```

The global variable in this example is modified using the `globals()` function with the dictionary key `[length]`. It can be also modified from within a function.

The code will return:

```shell
The length is: 125
```

## Codebyte Example

Use `globals()` to get the symbol table:

```codebyte/python
print(globals())
```
