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

```py
>>> import random
>>> print(random.uniform(10,15))
10.188312896316244
>>> print(random.uniform(10,15))
13.543866583400094
>>> print(random.uniform(10,15))
12.435917997367799
```

## Codebyte Example

```codebyte/py
import random

print (random.uniform(10,20))
```
