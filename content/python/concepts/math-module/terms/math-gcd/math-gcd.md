---
Title: 'math.gcd()' 
Description: 'Returns the Greatest Common Divisor (GCD) of two integers.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'Discrete Math'
Tags:
  - 'Algorithms'
  - 'Functions'
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

- `x`: This is the first integer whose greatest common divisor is to be computed.
- `y`: This is the second integer whose greatest common divisor is to be computed.

The `math.gcd()` function returns an integer value that represents the greatest common divisor of the two integers `x` and `y`. If either `x` or `y` is zero, the GCD is the absolute value of the non-zero number. If both `x` and `y` are zero, the GCD is zero.

## Example

The example below uses the `math.gcd()` function to return the greatest common divisor of _54_ and _24_:

```py
import math

print(math.gcd(54, 24))
```

The GCD of _54_ and _24_ is: 

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
