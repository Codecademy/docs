---
Title: 'math.sqrt()'
Description: 'Returns the square root of numeric input x.'
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

Returns the square root of numeric input _x_.

## Syntax

```py
math.sqrt(x)
```

If input `x` is a negative value, `.sqrt()` will return a `ValueError: math domain error`.

## Example 1

Use `math.sqrt()` to return the square root of integer `5`:

```python
import math

print(math.sqrt(5))

# Output: 2.23606797749979
```

## Example 2

Use `math.sqrt()` to return the square root of the float `5.5`:

```python
import math

print(math.sqrt(5.5))

# Output: 2.345207879911715
```

## Codebyte Example

The `math.sqrt()` function can take in any positive int or float and return its square root.

```codebyte/python
import math
square_root_int = math.sqrt(25)
print(square_root_int)
square_root_float = math.sqrt(49.0)
print(square_root_float)
```
