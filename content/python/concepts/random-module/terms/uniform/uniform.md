---
Title: '.uniform()'
Description: 'Returns a pseudo-random floating-point number between two given numbers.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Random'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `random.uniform()` method takes two numbers as arguments and returns a pseudo-random floating-point number between them, inclusive of the first value, and possibly inclusive of the second value, depending on rounding.

## Syntax

```pseudo
random.uniform(value1,value2)
```

Where `value1` and `value2` are numbers bounding the choice of a random floating-point number.

## Example

The below example prints the output of `random.uniform()` picking random floating point numbers between 10 and 15, 100 and 150, -10 and 10, and 0.75 and 0.90.

```py
import random

print(random.uniform(10,15))
print(random.uniform(100,150))
print(random.uniform(-10,10))
print(random.uniform(0.75,0.90)
```

Example output:

```pseudo
10.188312896316244
132.543866583400094
-2.435917997367799
0.885416960748279
```

## Codebyte Example

```codebyte/py
import random

print (random.uniform(10,20))
```
