---
Title: 'random.randrange()'
Description: 'Generates random numbers from a defined range of int values.'
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

Generates random numbers from a defined range of `int` values.

## Syntax

```py
random.randrange(start, stop, steps)
```

## Example 1

Use `random.randrange()` to return a random number between `0` and `99`:

```codebyte/python
import random

print(random.randrange(0, 100))
```

## Example 2

Use `random.randrange()` to return a random number between `0` and `99` and is divisible by `5`:

```codebyte/python
import random

print(random.randrange(0, 100, 5))
```
