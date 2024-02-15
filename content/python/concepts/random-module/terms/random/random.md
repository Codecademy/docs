---
Title: '.random()'
Description: 'Returns a pseudo-random floating-point number between 0 and 1.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Random'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `.random()` method accepts no parameters and returns a pseudo-random floating-point number between 0.0 and 1.0.

## Syntax

```py
random.random()
```

## Codebyte Example

It is possible to generate a pseudo-random float between 0 and a given number by multiplying it by `random.random()`:

```codebyte/python
import random

print(random.random())

print(random.random() * 10.0)
```
