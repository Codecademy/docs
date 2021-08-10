---
Title: random.randint()
Description: "Takes as input two int values, and returns a pseudo-random integer within the defined range of int values."
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Random"
CatalogContent:
  - "learn-python-3"
  - "paths/computer-science"
---



Takes as input two `int` values, and returns a pseudo-random integer within the defined range of `int` values.

## Syntax

```python
random.randint(start, end)
```

An alias for `randrange(start, end(+1))`.

## Example 1

Use `random.randint()` to return a random number between `0` and `50`:

```codebyte/python
import random

print(random.randint(0, 50))
```

## Example 2

Use `random.randint()` to return a random number between `-25` and `25`:

```codebyte/python
import random

print(random.randint(-25, 25))
```
