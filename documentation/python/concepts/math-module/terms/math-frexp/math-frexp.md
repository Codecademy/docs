---
Title: 'math.frexp()'
Description: 'The function math.frexp() returns mantissa and exponent as a pair (m, e) value of a given number x'
Codecademy Hub Page: 'https://www.codecademy.com/catalog/language/python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The function[function](https://www.codecademy.com/resources/docs/python/functions) **`math.frexp()`** in Python returns mantissa and exponent as a pair _(m, e)_ value of a given number _x_. 

##Sytax

```pseudo
math.frexp(x)
```

_x_ must be a valid number, or the function will return `TypeError`.

##Example

Use `math.frexp()` to return the mantissa and exponent of 10: 

```py
import math

print(math.frexp(10))
```

The above code gives the following output:

```shell
(0.625, 4)
```

##Codebyte Example

Run the following codes for better understanding: 

```codebyte/python
import math
print(math.frexp(0))
print(math.frexp(1))
print(math.frexp(10))
print(math.frexp(100))
print(math.frexp(50))
```
