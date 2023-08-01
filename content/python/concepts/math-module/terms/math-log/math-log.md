---
Title: 'math.log()'
Description: 'Returns the natural logarithm of n.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Returns the natural logarithm of `n`.

## Syntax

```py
math.log(n, base)
```

`base` is optional and it's the logarithmic base to use. Default is e.

## Example 1

Use `math.log()` to return the natural log of `12` (base e):

```python
import math

print(math.log(12))

# Output: 2.4849066497880004
```

## Example 2

Use `math.log()` to return the natural log of `12` (base `5`):

```python
import math

print(math.log(12, 5))

# Output: 1.5439593106327716
```

## Codebyte Example

The following example is runnable and uses the `math.log()` function:

```codebyte/py
import math

print(math.log(10))
```
