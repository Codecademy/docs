---
Title: '.seed()'
Description: 'Initializes a pseudo-random number generator with a seeded value and sets the first number.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Random'
  - 'Methods'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

In the Python `random` module, the `.seed()` method is used to create a pseudo-random number generator. Pseudo-random number generators appear to produce random numbers by performing some operation on a value. This value is the seed and it sets the first "random" value of the number sequence. With seeds, a user is able to reproduce the same pseudo-random numbers multiple times.

## Syntax

The `.seed()` method sets the first random number of the generator, either with a `value` or without one:

```pseudo
random.seed(value)
random.seed()
```

The `value` can be an `int`, `float`, `str`, `byte`, `bytearray`, or `NoneType`. If one is not provied, the random number generator will use the current system time to create the seed.

## Example

In most cases, the `.seed()` method uses the current time of the computer's system to initialize a new generator:

```py
import random

random.seed()

print(random.random())
```

## Codebyte Example

In the example below, the `.seed()` method is used three times, once with no value and the other two with the same value of `5`. In the output, each call to `random.seed(5)` guarantees the first pseudo-random value from the output will be the same every time:

```codebyte/python
import random

random.seed()
print(random.random())

random.seed(5)
print(random.random())

random.seed(5)
print(random.random())
```
