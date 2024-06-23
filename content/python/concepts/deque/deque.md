---
Title: 'deque'
Description: 'The deque is a Python data structure that allows efficient oppend and pop operations from both ends.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Queues'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'

---

The **deque**, short for Double-ended queue, is a [Python](https://www.codecademy.com/resources/docs/python) data structure that efficiently adds and removes elements from both ends. It is a component of the [collections module](https://www.codecademy.com/resources/docs/python/collections-module) and serves as an alternative to the list for scenarios where frequent insertions and deletions occur at both ends. Deques are notably advantageous when a queue is needed to enable fast appends and pops from both ends or when a stack is required to support the same operations efficiently.

## Syntax

```pseudo
from collections import deque
d = deque([iterable[, maxlen]])
```

## Example

In this syntax, deque() creates a new deque object, which can be initialized with an optional iterable and a maximum length.

**numbers_deque = deque([1, 2, 3, 4, 5])**
**a = deque(maxlen=3)**

```py

# Start by importing the deque class from the collections module.
from collections import deque

# Create a deque variable containing a list of numbers.
a = deque([1, 2, 3, 4, 5])
print(a)

# Create a deque string variable.
b = ('Hello')
print(b)

# Create a integer deque variable.
j = (645)
print(j)

# Create a deque range variable.
e = deque(range(7,21,27))
print(e)

# Create a deque float variable.
m = (100.56)
print(m)

# Print the contents of the deque variable.
print(a)


Output:
deque([1, 2, 3, 4, 5])

```

## Equivalent Methods for Stacks and Queues

- Stacks: A stack operates on the Last In, First Out (LIFO) principle, where pushing (adding an item) is done with `.append()` to the right end, and popping (removing the most recent item) is performed using `.pop()` from the right end.
- Queues: A queue, based on the First In, First Out (FIFO) principle, utilizes `.append()` at the right end for adding (enqueueing) and `.popleft()` from the left end for removing (dequeuing).
