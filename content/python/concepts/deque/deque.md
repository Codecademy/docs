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

- `iterable`: An optional parameter representing an iterable object (like a list, tuple, or string) whose elements will be used to initialize the deque. If no iterable is provided, an empty deque is created.
- `maxlen`: An optional parameter that specifies the maximum length of the deque.

## Example

The following example demonstrates the usage of `deque`:

```py
from collections import deque

# Create a deque using a tuple of integers
a = deque((8, 7, 9, 6))
print(a)

# Create a deque using a list of integers
b = deque([45, 845, 65])
print(b)

# Create a deque using a range of integers from 5 to 9
c = deque(range(5, 10))
print(c)

# Create a deque using a string, which will be split into individual characters
d = deque("wxyz")
print(d)

# Create a dictionary with some key-value pairs
numbers = {"firstname": "John", "age":25}

# Create a deque containing the keys of the dictionary
e = deque(numbers.keys())
print(e)

# Create a deque containing the values of the dictionary
f = deque(numbers.values())
print(f)

# Create a deque containing the items (key-value pairs) of the dictionary
g = deque(numbers.items())
print(g)
```

The above code produces the output as follows:

```
deque([8, 7, 9, 6])
deque([45, 845, 65])
deque([5, 6, 7, 8, 9])
deque(['w', 'x', 'y', 'z'])
deque(['firstname', 'age'])
deque(['John', 25])
deque([('firstname', 'John'), ('age', 25)])
```

## Equivalent Methods for Stacks and Queues

- Stacks: A stack operates on the Last In, First Out (LIFO) principle, where pushing (adding an item) is done with `.append()` to the right end, and popping (removing the most recent item) is performed using `.pop()` from the right end.
- Queues: A queue, based on the First In, First Out (FIFO) principle, utilizes `.append()` at the right end for adding (enqueueing) and `.popleft()` from the left end for removing (dequeuing).
