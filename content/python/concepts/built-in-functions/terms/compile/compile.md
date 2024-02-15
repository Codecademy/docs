---
Title: 'compile()'
Description: 'Returns a runnable code object created from a string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Returns a runnable code object created from a `string`.

## Syntax

```pseudo
compile(source, filename, mode)
```

## Parameters

- `source`: string or AST object
- `filename`: The file from which the code is being read
- `mode`:
  - `eval`: It accepts only a single expression.
  - `exec`: It can take a code block that has Python statements, class and functions, and so on.
  - `single`: It consists of a single interactive statement.
- `flags` (optional) and `dont_inherit` (optional): Controls which future statements affect the compilation of the source. Default set to 0.
- `optimize` (optional): The optimization level of the compiler. Default set to -1.

## Example

Use `compile()` to take a code block containing a function and a statement, to return a runnable code object.

```py
def dog():
    print("Woof woof wooo!")

friend = compile('print("Who\'s a good boy?")\ndog()', 'test', 'exec')

exec(friend)
```

This will output:

```shell
Who's a good boy?
Woof woof wooo!
```

## Codebyte Example

Use `compile()` to take a code block containing a single expression and return a runnable code object.

```codebyte/python
fact = compile('print("Codecademy Docs is a great learning tool!")', 'test', 'eval')

eval(fact)
```
