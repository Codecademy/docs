---
Title: 'math.atan2()'
Description: 'Returns the arc tangent of y/x in radians.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.atan2()`** [function](https://www.codecademy.com/resources/docs/python/functions) in Python takes two numeric values representing a point `(x, y)` and returns a `float` with the arc tangent of `y` divided by `x`. The resulting value will be in radians, between `\pi` and `-\pi`.

## Syntax

```pseudo
math.atan2(y, x)
```

- `y`: A numeric value (`int` or `float`) representing the `y` coordinate of a point `(x, y)`.
- `x`: A numeric value (`int` or `float`) representing the `x` coordinate of a point `(x, y)`.

## Example

In the example below, the `math.atan2()` function is used to return the arc tangent of a point `(5, 6)`:

```py
import math

print(math.atan2(6, 5))
```

The above code gives the following output:

```shell
0.8760580505981934
```

## Codebyte Example

The following codebyte example demonstrates how the `math.atan2()` function works:

```codebyte/python
import math

print(math.atan2(-30, 5))

print(math.atan2(-70, -60))
```
