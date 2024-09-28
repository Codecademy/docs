---
Title: 'iter()'
Description: 'Create an iterator object.'
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
---

**iter()** function is a built-in function in Python that returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators) from an object such as a list, tuple, string, or any object that follows iterator protocol.

## Syntax

```pseudo
iter(object)
iter(object, sentinel)
```

- `object`: A required argument represents an object such as a list, tuple, string, or any object that follows iterator or sequence protocol.
- `sentinel`: An optional argument represents the end of the sequence.

> **Note:** The `sentinel` parameter is used to repeatedly call a function until a specific value is returned, which stops the iteration.

## Examples 1

The following examples show how to use `iter()` function.

```py
from functools import partial
import random

# iter() method with no sentinel argument
fruits = ['apples', 'bananas', 'oranges']

my_iterator = iter(fruits)
print('Fruits:')
print(next(my_iterator))
print(next(my_iterator))
print(next(my_iterator))
```

The output would be:

```shell
Fruits:
apples
bananas
oranges
```

## Examples 2

The below example shows how to use `iter()` function with the `sentinel` parameter.

```py
from functools import partial
import random

# iter() method with a callable object and a sentinel argument as 7
def get_random_num(a, b):
  return random.randint(a, b)

another_iterator = iter(partial(get_random_num, 1, 10), 7)

print('\nNumbers: ')

# Loop will run till 7 is returned by get_random_num
for i in another_iterator:
  print(i)
```

The output would be:

```shell
Numbers: 
2
8
1
6
9
5
8
2
9
5
2
9
4
```

## Codebyte Example

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
