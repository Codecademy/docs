---
Title: 'popleft()'
Description: 'Removes and returns an element from the left end of a deque object in Python.'
Subjects:
  - 'Python'
  - 'Data Structures'
Tags:
  - 'Deque'
  - 'Collections'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-python-3'
  - 'python-data-structures'
---

## Definition

The **`popleft()`** method removes and returns the element from the **left side** (the first element) of a `deque` object.  
A `deque` (double-ended queue) allows elements to be added or removed efficiently from both ends.

If the deque is empty, calling `popleft()` raises an **`IndexError`**.

---

## Syntax

```python
deque.popleft()

from collections import deque

# Create a deque with several elements
queue = deque(['apple', 'banana', 'cherry'])

# Remove the leftmost element
left_item = queue.popleft()

print(left_item)   # Output: apple
print(queue)       # Output: deque(['banana', 'cherry'])

from collections import deque

# Demonstration of popleft()
fruits = deque(['apple', 'banana', 'cherry'])
removed_item = fruits.popleft()

print("Removed:", removed_item)
print("Remaining deque:", fruits)
