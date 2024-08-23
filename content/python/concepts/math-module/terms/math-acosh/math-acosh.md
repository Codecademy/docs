---
Title: 'math.acosh()'
Description: 'Returns the arccosh (inverse of the hyperbolic cosine) of a number.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Discrete Math'
Tags:
  - 'Functions'
  - 'Integers'
  - 'Math'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.acosh()`** function in Python returns the inverse of the hyperbolic cosine, also known as the hyperbolic arccosine of a number.

## Syntax

```pseudo
math.acosh(*number)
```

- `*number`: This represents the number for which to compute the hyperbolic arccosine.

The `number` can be an `int` or `float` but must be greater than or equal to 1. If `number` is less than 1, it returns a `ValueError`.

## Example

The example below uses the `math.acosh()` funtion to return the hyperbolic arccosine of the specified numbers:

```py
import math

# Hyperbolic Arccosine of 1.
print(math.acosh(1))

# Hyperbolic Arccosine of 2.
print(math.acosh(2))

# Hyperbolic Arccosine of 10.5.
print(math.acosh(10.5))
```

The output of the example code above is:

```shell
0.0
1.3169578969248166
2.8287527602640226
```

> Note: If `math.acosh()` function is called with an argument less than one (`1`), it will return a `ValueError`.

## Codebyte Example

Run the following example that uses the `math.acosh()` function to understand how it works:

```codebyte/python
import math

n = 0

result = math.acosh(n)

print(f"The Hyperbolic arccosine of {n} is {result}")
```
