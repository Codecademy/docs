---
Title: '.uniform()'
Description: 'Returns a pseudo-random floating-point number between two given numbers, inclusive.'
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

The `random.uniform()` method takes two numbers as arguments and returns a pseudo-random floating-point number between them, inclusive of the numbers provided.

## Syntax

```pseudo
random.uniform(<low value>,<high value>)
```

Where `<low value>` is the number representing the lower bound of possible values and `<high value>` is a number representing the higher bound of possible values.

## Codebyte Example

```codebyte/py
import random

print (random.uniform(10,20))
```
