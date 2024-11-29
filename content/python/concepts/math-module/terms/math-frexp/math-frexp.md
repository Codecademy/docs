---
Title: 'math.frexp()'
Description: 'Returns the mantissa and the exponent of a given number as a tuple.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Math'
  - 'Methods'
  - 'Numbers'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`math.frexp()`** method calculates the mantissa and the exponent of a given number. The mathematical formula that is used in this method is `n = m * 2^e`, where `n` is the given number, `m` is the mantissa, and `e` is the exponent. The method returns the mantissa and the exponent in a [tuple](https://www.codecademy.com/resources/docs/python/tuples) `(m, e)`.

## Syntax

```pseudo
math.frexp(x)
```

- `x`: The number whose mantissa and exponent are to be calculated. If the input is not a number, the method returns a `TypeError`.

## Example

The following example demonstrates the usage of the `math.frexp()` method:

```py
import math

# Calculating the mantissa and the exponent of different numbers
print(math.frexp(10))
print(math.frexp(20))
print(math.frexp(30))
```

The above code produces the following output:

```shell
(0.625, 4)
(0.625, 5)
(0.9375, 5)
```

## Codebyte Example

Run the following codebyte example to understand the use of the `math.frexp()` method:

```codebyte/python
import math

# Calculating the mantissa and the exponent of different numbers
print(math.frexp(40))
print(math.frexp(50))
print(math.frexp(60))
```
