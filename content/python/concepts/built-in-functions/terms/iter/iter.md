---
Title: 'iter()'
Description: 'create an iterator object.'
Subjects:
  - 'computer science'
  - 'data science'
Tags:
  - 'Iterators'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

**iter()** function is a built-in function in Python that returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators) from an object such as a list, tuple, string or any object that follows iterator protocol.

## Syntax

```pseudo
iter(object)
iter(object, sentinel)
```

- `object`: A required argument represents an object such as a list, tuple, string, or any object that follows iterator or sequence protocol.
- `sentinel`: An optional argument represents the end of the sequence.

## Examples

```py
from functools import partial
import random

# iter() method with no sentinel argument
fruits = ['apples', 'bananas', 'oranges']

my_iterator = iter(fruits)
print('fruits Iterator')
print(next(my_iterator))
print(next(my_iterator))
print(next(my_iterator))

# iter() method with a callable object and a sentinel argument
def get_random_num(a, b):
  return random.randint(a, b)

another_iterator = iter(partial(get_random_num, 1, 10), 7)
print('\nNumbers: ')
for i in another_iterator:
  print(i)
```

```shell
fruits Iterator
apples
bananas
oranges

Numbers:
2
4
2
4
1
2
1
9
9
9
1
6
```

## Codebyte Example (if applicable)

```codebyte/python
import randint from random

technologies = ['next.js', 'react', 'node.js', 'postgreSql', 'firebase', 'tailwindcss']
tech_iterator = iter(technologies)

for tech in tech_iterator:
  print(tech)

def callback_fn():
  return randint(1,10)

call_iterator = iter(callback_fn, 7)
for val in call_iterator:
  print(val)
```
