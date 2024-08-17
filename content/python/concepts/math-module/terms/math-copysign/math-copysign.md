---
Title: 'math.copysign()'
Description: 'Takes two numeric values and returns a float with the magnitude (absolute value) of the first value and the sign of the second value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Values'
  - 'Elements'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.copysign()`** [function](https://www.codecademy.com/resources/docs/python/functions) in Python takes two numeric values and returns a `float` with the magnitude (absolute value) of the first value and the sign of the second value.

## Syntax

```pseudo
math.copysign(x, y)
```

- `x`: A numeric value (`int` or `float`) whose magnitude is used in the result.
- `y`: A numeric value (`int` or `float`) whose sign is used in the result.

## Example

In the example below, the `math.copysign()` function is used to return `10` with the same sign as `-5`:

```py
import math

print(math.copysign(10, -5))
```

The above code gives the following output:

```shell
-10.0
```

## Codebyte Example

The following codebyte example demonstrates how the `math.copysign()` function works:

```codebyte/python
import math

print(math.copysign(-40, 5.5))

print(math.copysign(7, -7))
```
