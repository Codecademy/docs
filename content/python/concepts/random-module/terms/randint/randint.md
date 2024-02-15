---
Title: .randint()
Description: 'Returns a random integer that exists between two values.'
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
---

The `.randint()` method returns a random integer that exists between two `int` values, `int_a` and `int_b` (inclusive), passed as arguments.

## Syntax

```pseudo
random.randint(int_a, int_b)
```

Another way of writing this would be `random.randrange(int_a, int_b + 1)`.

## Example

In the example below, `.randint()` is used to return a random number between `0` and `50`:

```py
import random

print(random.randint(0, 50))
```

## Codebtye Example

The `.randint()` method can also be applied to negative `int` values, as shown in the example below:

```codebyte/python
import random

print(random.randint(-25, 25))
```
