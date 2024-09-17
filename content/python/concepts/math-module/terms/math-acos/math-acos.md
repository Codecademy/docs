---
Title: 'math.acos()'
Description: 'Returns the arc cosine of a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Math'
  - 'Trigonometry'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.acos()`** [function](https://www.codecademy.com/resources/docs/python/functions) returns the arc cosine (inverse cosine) of a number, expressed in radians.

## Syntax

```pseudo
math.acos(x)
```

- `x`: A number between `-1` and `1` representing the cosine value for which the arc cosine is to be calculated.

The `math.acos()` function returns a numeric value in the range `[0, π]` in radians, which represents the inverse cosine of the value `x`.

## Example

The example below demonstrates how to use the `math.acos()` function to calculate the arc cosine of `0`:

```py
import math

print(math.acos(0))
```

The above example gives the following output:

```shell
1.5707963267948966
```

## Codebyte Example

The following codebyte example shows how the `math.acos()` function works:

```codebyte/python
import math

print("The inverse cosine of 1 is: ", math.acos(1))
```
