---
Title: "compile()"
Description: "Returns a runnable code object created from a string."
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Methods"
  - "Strings"
CatalogContent:
  - "learn-python-3"
  - "paths/computer-science"
  - "paths/data-science"
---



Returns a runnable code object created from a `string`.

## Syntax

```py
compile(source, filename, mode)
```
## Parameters

* `source`: string or AST object
* `filename`: The file from which the code is being read
* `mode`:
  - `eval`: accepts only a single expression.
  - `exec`: It can take a code block that has Python statements, class and functions, and so on.
  - `single`: if it consists of a single interactive statement
* `flags` (optional) and `dont_inherit` (optional): controls which future statements affect the compilation of the source. Default set to 0.
* `optimize` (optional): optimization level of the compiler. Default set to -1.

## Example 1

Use `compile()` to return the absolute value of `-6.5`:

```py
x = compile('print(55)\nprint(88)', 'test', 'exec')
exec(x)
```
