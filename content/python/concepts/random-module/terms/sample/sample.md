---
Title: '.sample()'
Description: 'Returns a list of items randomly selected from a given population.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Random'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `.sample()` method returns a list of items that are randomly sampled from a given population. The returned list consists of randomly selected items without duplicates.

## Syntax

For arguments, the `.sample()` method accepts a `population` and a `number` to set the length of the returned sample.

```pseudo
random.sample(population, number)
```

The `population` is a sequence of items can either be a [list](https://www.codecademy.com/resources/docs/python/lists), [string](https://www.codecademy.com/resources/docs/python/strings), or [range](https://www.codecademy.com/resources/docs/python/built-in-functions/range). If [sets](https://www.codecademy.com/resources/docs/python/sets) are used, they should be converted to a list or [tuple](https://www.codecademy.com/resources/docs/python/tuples) before being passed to this method.

## Codebyte Example

```codebyte/python
import random

my_range = range(1000)

my_sample = random.sample(my_range,10)

print(my_sample)
```
