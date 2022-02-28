---
Title: '.seed()'
Description: 'Initializes a pseudo-random number generator with a seeded a value.'
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

In the Python `random` module, the `.seed()` function is used to create a pseudo-random number generator. Pseudo-random number generators appear to produce random numbers by performing some operation on a value. This value is the seed, which acts as the first "previous" value in the sequence of numbers. By using a particular seed value, a user is able to reproduce the same random numbers multiple times.

## Syntax

The `.seed()` function sets the first random number of the generator, either with a `value` or without one:

```pseudo
random.seed(value)
```

If a `value` is not provied, the random number generator will use the current system time to create the seed. The `value` can be an `int`, `float`, `byte`, `bytearray`, or `NoneType`, and

## Example

In most cases, the `.seed()` function uses the current time of the computer's system to initialize a new generator:

```py
import random

random.seed()

print(random.random())
```

## Codebyte Example

In the example below, the `.seed()` function is used three times, once with no value and the other two with the same value of `5`. In the output, we will notice that each call to `random.seed(5)` guarantees the first pseudo-random value is the same each time:

```codebyte/py
import random

random.seed()

print(random.random())

random.seed(5)

print(random.random())

random.seed(5)

print(random.random())
```
