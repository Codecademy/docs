---
Title: 'iter()'
Description: 'Returns an iterator object from an iterable.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`iter()`** function is a built-in function in Python that returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators) from an iterable object, such as a list, tuple, string, or any object that implements the iterator protocol.

## Syntax

```pseudo
iter(object, sentinel)
```

- `object`: A required argument that represents an iterable object such as a list, tuple, string, or any object that follows iterator or sequence protocol.
- `sentinel`: An optional argument that represents the end of the sequence.

> **Note:** `sentinel` parameter is used to repeatedly call a function until a specific value is returned, which stops the iteration.

## Example 1

This example demonstrates the use of the `iter()` function to create an iterator from a list and retrieve its elements one by one using the [`next()`](https://www.codecademy.com/resources/docs/python/built-in-functions/next) function:

```py
# Example of iter() function without sentinel
fruits = ['apples', 'bananas', 'oranges']

# Creating an iterator from the list
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

## Example 2

This example demonstrates the use of the `iter()` function with a callable and a `sentinel` value, repeatedly calling the function until the `sentinel` is returned:

```py
from functools import partial
import random

# iter() method with a callable and a sentinel argument os 7
def get_random_num(a, b):
  return random.randint(a, b)

another_iterator = iter(partial(get_random_num, 1, 10), 7)

print('\nNumbers: ')

# Loop will run till 7 is returned
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

> **Note**: The output varies with each execution due to random integer generation, continuing until the sentinel value is encountered.

## Codebyte Example

```codebyte/python
import random

technologies = ['next.js', 'react', 'node.js', 'postgreSql', 'firebase', 'tailwindcss']
tech_iterator = iter(technologies)

for tech in tech_iterator:
  print(tech)

def callback_fn():
  return random.randint(1,10)

call_iterator = iter(callback_fn, 7)
for val in call_iterator:
  print(val)
```
