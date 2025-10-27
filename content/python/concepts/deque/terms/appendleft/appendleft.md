---
Title: 'appendleft()'
Description: 'Adds an element to the left end (front) of the deque.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Deques'
  - 'Methods'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`appendleft()`** method adds an element to the left end (front) of a `collections.deque` object. This is useful for managing elements in a queue-like structure, where items are added and removed from opposite ends.

## Syntax

```pseudo
deque.appendleft(element)
```

**Parameters:**

- `element`: The item to add to the left end (front) of the deque.

**Return value:**

- `None`. The deque is modified in place.

## Example: Adding elements to the left side of a deque using `appendleft()`

In this example, `appendleft()` adds elements to the left end of a deque, demonstrating how items are prepended to the front:

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

The output of this code is:

```shell
Initial deque: deque([1, 2, 3])
Deque after appendleft(0): deque([0, 1, 2, 3])
Deque after appendleft(-1): deque([-1, 0, 1, 2, 3])
```

## Codebyte Example: Using `appendleft()` for Dynamic Queue Operations

In this example, `appendleft()` is used to add elements to the front of a deque, simulating dynamic queue operations where new items arrive at the front:

```codebyte/python
from collections import deque

# Initialize a deque with numbers
numbers = deque([10, 20, 30])
print("Original deque:", numbers)

# Add elements dynamically to the left
numbers.appendleft(5)
numbers.appendleft(0)

print("Deque after dynamic prepend operations:", numbers)

# Access elements to verify positions
print("First element:", numbers[0])
print("Second element:", numbers[1])
print("Last element:", numbers[-1])
```
