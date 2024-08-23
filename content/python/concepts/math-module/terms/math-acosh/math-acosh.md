---
Title: 'math.acosh()'
Description: 'Computes the inverse hyperbolic cosine of a number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Discrete Math'
Tags:
  - 'Functions'
  - 'Integers'
  - 'Math'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.acosh()`** function in Python returns the inverse hyperbolic cosine (also known as the hyperbolic arccosine) of a given number.

## Syntax

```pseudo
math.acosh(x)
```

- `x`: The value for which the inverse hyperbolic cosine is computed. The input `x` must be a real number greater than or equal to *1*.

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
3.0422471120933285
```

> **Note:** If `math.acosh()` function is called with an argument less than one (`1`), it will return a `ValueError`.

## Codebyte Example

Run the following example that uses the `math.acosh()` function to understand how it works:

```codebyte/python
import math

n = 0

result = math.acosh(5)

print(f"The Hyperbolic arccosine of {n} is {result}")
```
