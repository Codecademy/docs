---
Title: "math.log()"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Strings"
  - "Arithmetic"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns the natural logarithm of `n`.

## Syntax

```py
math.log(n, base)
```

`base` is optional and it's the logarithmic base to use. Default is e.

## Example 1

Use `math.log()` to return the natural log of `12` (base e):

```python
import math

print(math.log(12))

# Output: 2.4849066497880004
```

## Example 2

Use `math.log()` to return the natural log of `12`, given base `5`(log(x)/log(base)):

```python
import math

print(math.log(5, 12))

# Output: 0.647685462377997
```
