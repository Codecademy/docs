---
Title: '.popleft()'
Description: 'Removes and returns an element from the left end of a deque object in Python.'
Subjects:
  - 'Code Foundations'
  - 'Data Structures'
Tags:
  - 'Collections'
  - 'Deques'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-python-3'
  - 'python-data-structures'
---

The **`deque.popleft()`** method removes and returns the element from the left end (first element) of a `deque` object. A `deque` (double-ended queue) allows elements to be added or removed efficiently from both ends. Calling `popleft()` on an empty deque raises an `IndexError`.

## Syntax

```pseudo
deque.popleft()
```

**Parameters:**

The `.popleft()` method does not take any parameters.

**Return value:**

Returns the element removed from the left end of the deque.

## Example

In this example, the first element is removed from the left end of a deque:

```py
from collections import deque

# Create a deque with several elements
queue = deque(['apple', 'banana', 'cherry'])

# Remove the leftmost element
left_item = queue.popleft()
print("Removed element:", left_item)
print("Deque after popleft():", queue)
```

The output of this code is:

```shell
Removed element: apple
Deque after popleft(): deque(['banana', 'cherry'])
```

## Codebyte Example

In this example, a deque is used to simulate a queue of customers. The first customer is served using `.popleft()`:

```codebyte/python
from collections import deque

# Queue of customers
customers = deque(["Alice", "Bob", "Charlie", "Diana"])

print("Queue before serving:", list(customers))

# Serve the first customer
served_customer = customers.popleft()
print("Serving customer:", served_customer)

print("Queue after serving:", list(customers))
```
