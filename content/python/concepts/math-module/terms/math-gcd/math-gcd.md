---
Title: 'math.gcd()'
Description: 'Returns the Greatest Common Divisor (GCD) of two or more integers.'
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

The **`math.gcd()`** function in Python returns the Greatest Common Divisor (GCD) of two or more integers. The GCD is the largest positive integer that divides all of the given numbers without leaving a remainder.

## Syntax

```pseudo
math.gcd(*integers)
```

- `*integers`: This represents the integers for which to compute the GCD.

## Example

The example below uses the `math.gcd()` function to return the greatest common divisor of the specified integers:

```py
import math

# GCD of two integers.
print(math.gcd(54, 24))

# GCD of more than two integers.
print(math.gcd(54, 108, 216))

# GCD of zero and non-zero integers.
print(math.gcd(54, 0))
```

The output of the example code above is:

```shell
6
54
54
```

> Note: If `math.gcd()` function is called with no arguments or if all arguments are zero (`0`), it will return zero (`0`).

## Codebyte Example

Run the following example that uses the `math.gcd()` function to understand how it works:

```codebyte/python
import math

x = 0
y = 0

result = math.gcd(x, y)

print(f"The GCD of {x} and {y} is {result}")
```
