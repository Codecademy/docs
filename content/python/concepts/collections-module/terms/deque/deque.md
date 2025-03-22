---
Title: 'deque()'
Description: 'Creates a deque object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Data Types'
  - 'Queues'
  - 'Stacks'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, a deque is a double-ended queue that allows fast appends and pops from both ends. The **`deque()`** method, a part of the `collections` [module](https://www.codecademy.com/resources/docs/python/modules), creates a new deque object.

## Syntax

```pseudo
my_deque = deque(iterable, maxlen)
```

- `my_deque`: The name of the deque object to be created.
- `iterable`: The iterable to be used for intializing the deque.
- `maxlen`: The maximum length for the deque.

## Example

The following example demonstrates the usage of the `deque` method:

```py
from collections import deque

fruit = 'apple'

fruit_slices = deque(fruit)

print(fruit_slices)
```

The above code produces the following output:

```shell
deque(['a', 'p', 'p', 'l', 'e'])
```

Here is another example using the `deque` method:

```py
from collections import deque

friends = ['Dave', 'Mary', 'Luis', 'Zachary']

car_five_seater = deque(friends, 5)

print(car_five_seater)
```

The above code gives the following output:

```shell
deque(['Dave', 'Mary', 'Luis', 'Zachary'], maxlen=5)
```

## Codebyte Example

The following codebyte example demonstrates the use of the `deque` method:

```codebyte/python
from collections import deque

tools = ['screwdriver', 'wrench', 'pliers']

toolbox = deque(tools)

print(toolbox)
```
