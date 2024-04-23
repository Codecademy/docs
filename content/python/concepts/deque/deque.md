---
Title: 'deque()'
Description: 'A deque data structure in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Queues'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'

---

The `deque`, short for _double-ended queue_," is a [Python](https://www.codecademy.com/resources/docs/python) data structure that allows for the efficient addition and removal of elements from both ends. It is a component of the [collections module](https://www.codecademy.com/resources/docs/python/collections-module) and serves as an alternative to the list where frequent insertions and deletions occur at both ends. Deques are notably advantageous when a queue is needed to enable fast appends and pops from both ends, or when a stack is required to support the same operations efficiently.

## Syntax

Initialize a deque with optional parameters `iterable` and `maxlen`.

```pseudo
d = deque(iterable=[], maxlen=None)

In this syntax, deque() creates a new deque object, which can be initialized with an optional iterable and a maximum length. The append() and appendleft() methods add items to the right and left ends, respectively.
The pop() and popleft() methods remove items from the corresponding ends. The rotate() method moves elements from one end to the other, effectively rotating the deque.

## Example

```py
from collections import deque

# Create a deque variable
numbers_deque = deque([1, 2, 3, 4, 5])

# Append a number to the right end
numbers_deque.append(6)

# Append a number to the left end
numbers_deque.appendleft(0)

# Pop a number from the right end
numbers_deque.pop()

# Pop a number from the left end
numbers_deque.popleft()

# Print the deque
print(numbers_deque)

Output:
deque([0, 1, 2, 3, 4])

```


Start by importing the deque class from the collections module. Then, create a deque variable called numbers_deque containing a list of numbers [1, 2, 3, 4, 5].

Append the number 6 to the right end of the deque using the append() method, and then append 0 to the left end using the appendleft() method.

Next, pop a number from the right end of the deque using the pop() method, and pop a number from the left end using the popleft() method.

Finally, print the contents of the deque, which should be [0, 1, 2, 3, 4].

## Equivalent Methods for Stacks and Queues

- Stacks: To implement a stack using a deque, use the append() method to push items onto the stack and the pop() method to remove them.
- Queues: To implement a queue, use the append() method to enqueue items at the back and the popleft() method to dequeue items from the front.
