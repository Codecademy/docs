---
Title: 'math.frexp()'
Description: 'Returns mantissa and exponent as a pair (m, e) value of a given number x.'
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

The **`math.frexp()`** [function](https://www.codecademy.com/resources/docs/python/functions) in Python returns mantissa and exponent as a pair _(m, e)_ value of a given number `x`.

## Syntax

```pseudo
math.frexp(x)
```

- `x`: A valid number whose mantissa and exponent are returned.

## Example

Use `math.frexp()` to return the mantissa and exponent of 10:

```py
import math
	 
mantissa, exponent = math.frexp(10)
	
print("Mantissa of 10: ", mantissa)
print("Exponent of 10: ", exponent)
```

The above code gives the following output:

```shell
Mantissa of 10:  0.625
Exponent of 10:  4
```

## Codebyte Example

Run the following codes for better understanding:

```codebyte/python
import math
print(math.frexp(0))
print(math.frexp(1))
print(math.frexp(10))
print(math.frexp(100))
print(math.frexp(50))
```
