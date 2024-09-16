---
Title: 'iter()'
Description: 'create an iterator object.'
Subjects:
  - 'computer science'
  - 'data science'
Tags:
  - 'Iterators'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**iter()** function is a built-in function in python that returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators)

## Syntax

```pseudo
iter(object)
```

```pseudo
iter(object, sentinel)
```

- `object` parameter supplies the object on which the iter() method will return the iterator. The type of this parameter depends on the presence of the optional second `sentinel` parameter. In the case where the sentinel parameter is not given, the object parameter type must be one that supports iteration or a sequence. These types include: list, str, and tuple among others. You may also pass in objects that you've defined with either **\_\_iter\_\_()** or **\_\_getitem\_\_()** methods. When the sentinel parameter is present, the object parameter must be callable.

- `sentinel` is the parameter that stores the value which represents the end of the sequence. When the callable object returns this value, the iterator will terminate.

## Example

```py
from functools import partial
import random

## example one iter() with no sentinel parameter
fruits = ['apples', 'bananas', 'oranges']

my_iterator = iter(fruits)
print(my_iterator)

## example two iter() with a sentinel parameter
func_iterator = iter(partial(random.randint, 1, 10), 7)
print(func_iterator)
```

```shell
<list_iterator object at 0x000001CCFDCAA470>
<callable_iterator object at 0x000001CCFDE37910>
```

## Codebyte Example (if applicable)

```codebyte/python
technologies = ['next.js', 'react', 'node.js', 'postgreSql', 'firebase', 'tailwindcss']

tech_iterator = iter(technologies)

for tech in tech_iterator:
  print(tech)
```

```codebyte/python
import randint from random

def callback_fn():
  return randint(1,10)

call_iterator = iter(callback_fn, 7)

for val in call_iterator:
  print(val)
```
