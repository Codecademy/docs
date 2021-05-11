---
Title: "randrange()"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Methods"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## Definition
***
The `randrange()` method generates random numbers from a stated range.

## Syntax
***
random.randrange(start, stop, steps)

## Example 1
***
Use `randrange()` to return a random number between 0 and 99:
```codebyte/python
import random

print(random.randrange(0, 100))
```

## Example 2
***
Use `randrange()` to return a random number between 0 and 99 and is divisible by 5:
```codebyte/python
import random

print(random.randrange(0, 100, 5))
```
