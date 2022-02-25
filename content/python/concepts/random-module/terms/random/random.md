---
Title: '.random()'
Description: 'Returns a pseudo-random floating-point number between 0 and 1.'
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

The `random.random()` method accepts no parameters and returns a pseudo-random floating-point number between 0.0 and 1.0.

It can be useful to create a pseudo-random float less than a given number just by multiplying that number by `random.random()`.

## Syntax

```py
random.random()
```

## Codebyte Example

```codebyte/py
import random

print(random.random())

print(random.random() * 10.0)
```
