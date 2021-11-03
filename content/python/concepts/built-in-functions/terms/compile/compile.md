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

```py
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

Use `compile()` to take a code block and return a runnable code object.

```py
x = compile('print(55)\nprint(88)', 'test', 'exec')

exec(x)
```

This will output:

```shell
55
88
```
