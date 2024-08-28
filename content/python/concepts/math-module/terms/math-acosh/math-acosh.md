---
Title: 'math.acosh()'
Description: 'Computes the inverse hyperbolic cosine of a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Integers'
  - 'Math'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.acosh()`** [function](https://www.codecademy.com/resources/docs/python/functions) returns the inverse hyperbolic cosine (also known as the hyperbolic arccosine) of a given number.

## Syntax

```pseudo
math.acosh(x)
```

- `x`: The value for which the inverse hyperbolic cosine is to be computed. It must be a real number greater than or equal to _1_.

## Example

The example below uses the `math.acosh()` function to return the hyperbolic arccosine of the specified numbers:

```py
import math

# Hyperbolic arccosine of 1
print(math.acosh(1))

# Hyperbolic arccosine of 2
print(math.acosh(2))

# Hyperbolic arccosine of 10.5
print(math.acosh(10.5))
```

The output for the above code is:

```shell
0.0
1.3169578969248166
3.0422471120933285
```

> Note: If the input value is less than _1_, the function will return a `ValueError`.

## Codebyte Example

The following codebyte example demonstrates how the `math.acosh()` function works:

```codebyte/python
import math

n = 0

result = math.acosh(5)

print(f"The hyperbolic arccosine of {n} is {result}")
```
