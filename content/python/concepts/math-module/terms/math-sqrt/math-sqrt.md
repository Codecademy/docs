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

## Example

Use `math.sqrt()` to return the square root of integer `5`:

```python
import math

print(math.sqrt(5))
```

The above code gives the following output:

```shell
2.23606797749979
```

Use `math.sqrt()` to return the square root of the float `5.5`:

```python
import math

print(math.sqrt(5.5))
```

The above code gives the following output:

```shell
2.345207879911715
```

## Codebyte Example

Run the following example that uses the `math.sqrt()` function to understand its working:

```codebyte/python
import math

square_root_int = math.sqrt(25)
print(square_root_int)

square_root_float = math.sqrt(49.0)
print(square_root_float)
```
