---
Title: 'math.atan2()'
Description: 'Returns the arc tangent of the quotient of its two arguments in radians.'
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

The **`math.atan2()`** [function](https://www.codecademy.com/resources/docs/python/functions) in Python takes two numeric values representing a point `(x, y)` and returns a float that represents the arc tangent of `y` divided by `x`. The resulting value is in radians and ranges from `-π` to `π`.

## Syntax

```pseudo
math.atan2(y, x)
```

- `y`: A numeric value representing the `y` coordinate of the point.
- `x`: A numeric value representing the `x` coordinate of the point.

> Note: The function takes the y-coordinate (`y`) as the first parameter and the x-coordinate (`x`) as the second.

## Example

In the example below, the `math.atan2()` function is used to return the arc tangent of a point:

```py
import math

print(math.atan2(6, 5))
```

The above code gives the following output:

```shell
0.8760580505981934
```

## Codebyte Example

Run the following codebyte example to understand how the `math.atan2()` function works:

```codebyte/python
import math

print(math.atan2(-30, 5))

print(math.atan2(-70, -60))
```
