---
Title: "Python Random Module: `randint()`"
Subjects:
  - "Language Fluency"
  - "Code Foundations"
Tags:
  - "Function"
  - "Methods"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---

## Definition
***
The `randint()` method is an alias for `randrange(start, end(+1))`, which takes as input two integers, and returns a pseudo-random integer within the stated range.

## Syntax
***
random.randint(start, end)

## Example 1
***
Use `randint()` to return a random number between `0` and `50`:
```codebyte/python
import random

print(random.randint(0, 50))
```

## Example 2
***
Use `randint()` to return a random number between `-25` and `25`:
```codebyte/python
import random

print(random.randint(-25, 25))
```
