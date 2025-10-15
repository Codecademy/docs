---
Title: 'appendleft'
Description: 'Adds an element to the left side (beginning) of a `collections.deque` object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Deques'
  - 'Methods'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
---

The **`appendleft()`** method adds an element to the left side (the beginning) of a `collections.deque` object. This is useful for managing elements in a queue-like structure, where items are added and removed from opposite ends.

## Syntax

```py
from collections import deque

my_deque.appendleft(element) # element: The item to add to the left side of the deque.
```

## Example 1: How to add elements to the left side of a deque using appendleft()

```py
from collections import deque

# Create a deque
my_deque = deque([1, 2, 3])
print(f"Initial deque: {my_deque}")

# Append an element to the left
my_deque.appendleft(0)
print(f"Deque after appendleft(0): {my_deque}")

# Append another element
my_deque.appendleft(-1)
print(f"Deque after appendleft(-1): {my_deque}")
```

The output of the example 1:

```shell
Initial deque: deque([1, 2, 3])
Deque after appendleft(0): deque([0, 1, 2, 3])
Deque after appendleft(-1): deque([-1, 0, 1, 2, 3])
```
