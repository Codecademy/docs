---
Title: 'math.gcd()' 
Description: 'Calculates the Greatest Common Divisor (GCD) of two integers.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'Discrete Math'
Tags:
  - 'Functions'
  - 'Algorithms'
  - 'Integers'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`math.gcd()`** function in Python is used to calculate the Greatest Common Divisor (GCD) of two integers. 

## Syntax

```pseudo
math.gcd(x, y)
```

The `math.gcd()` function takes the following parameters:

- `x` is the first integer.
- `y` is the second integer.

The `math.gcd()` function returns an `integer` value, that represents the greatest common divisor of the two integers `x` and `y`. If either `x` or `y` is zero, the GCD is the absolute value of the non-zero number. If both `x` and `y` are zero, the GCD is zero.

## Example

Use `math.gcd()` to return the greatest common divisor of `54` and `24`:

```py
import math

print(math.gcd(54, 24))
```

The GCD of 54 and 24 is: 

```shell
6
```

## Codebyte Example

Run the following example that uses the `math.gcd()` function to understand how it works:

```codebyte/python
import math

x = 48
y = 18

result = math.gcd(x, y)

print(f"The GCD of {x} and {y} is {result}")
```


