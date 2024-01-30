---
Title: 'math.pow()'
Description: 'Returns the float value of x raised to the power of y.'
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

Returns the `float` value of `x` raised to the power of `y`.

## Syntax

```py
math.pow(x, y)
```

This contrasts with the built-in `**` operator in that `math.pow()` converts both its arguments to type `float`.

## Example 1

Use `math.pow()` to return `5` to the power of `3`:

```python
import math

print(math.pow(5, 3))
```

The above code give the following output:

```shell
125.0
```

Use `math.pow()` to return `5.5` to the power of `3.3`:

```python
import math

print(math.pow(5.5, 3.3))
```

The above code give the following output:

```shell
277.457759723262
```

## Codebyte Example

Run the following example that uses the `math.pow()` function to understand its working:

```codebyte/py
import math

print(math.pow(2, 0.0))
print(math.pow(1.0, 2))
```
