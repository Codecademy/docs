---
Title: '.sample()'
Description: 'Returns a given number of randomly selected items from a given population.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Random'
  - 'Functions'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `random.sample()` method takes a population (list, range, set) and a number as arguments and returns a list consisting of that number of randomly selected, non-duplicated, items from the population.

## Syntax

```pseudo
random.sample(<population>,<number>)
```

Where `<population>` is the list (or range, or set) where items are being selected from, and `<number>` is the number of items selected to return.

## Codebyte Example

```codebyte/py
import random

myRange = range(1000)

mySample = random.sample(myRange,10)

print(mySample)
```
