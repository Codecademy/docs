---
Title: '.randrange()'
Description: 'Selects a random number from a defined range of int values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `.randrange()` method selects a random number from a defined range of `int` values.

## Syntax

```pseudo
random.randrange(start, stop, step)
```

## Example

Here, `.randrange()` is used to return a random number between `0` and `99`:

```py
import random

print(random.randrange(0, 100))
```

## Codebyte Example

In the example below, `.randrange()` is used to return a random number that is between `0` and `99` and divisible by `5`:

```codebyte/python
import random

print(random.randrange(0, 100, 5))
```
