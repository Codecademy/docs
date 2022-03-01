---
Title: '.sample()'
Description: 'Returns a list of items randomly selected from a given population.'
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

The `random.sample()` method returns a list of items that are randomly sampled from a given population. The returned list consists of randomly selected items without duplicates.

## Syntax

For arguments, the `random.sample()` method accepts a `population` and a `number` to set the length of the returned sample. 

```pseudo
random.sample(population, number)
```

Where `<population>` is the sequence the items are selected from, and `<number>` is the number of item(s) to be returned.

## Codebyte Example

```codebyte/py
import random

myRange = range(1000)

mySample = random.sample(myRange,10)

print(mySample)
```
