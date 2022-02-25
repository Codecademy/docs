---
Title: '.shuffle()'
Description: 'Takes a list and randomly re-orders the contents.'
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

The `random.shuffle()` method takes a list as a parameter and randomly re-orders the contents in place.

## Syntax

```pseudo
random.shuffle(list)
```

The `list` is the collection of items to be shuffled in place.

## Codebyte Example

```codebyte/py
import random

my_list = [0,1,2,3,4,5,6,7,8,9]

random.shuffle(my_list)

print(my_list)
```
