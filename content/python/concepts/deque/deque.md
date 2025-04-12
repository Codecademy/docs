---
Title: 'Deque'
Description: 'Implements a double-ended queue for efficient additions and removals from both ends.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Algorithms'
  - 'Collections'
  - 'Data Structures'
  - 'Deques'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **deque** is a double-ended queue implementation in Python's [collections module](https://www.codecademy.com/resources/docs/python/collections-module). It provides a versatile data structure that generalizes a stack and a queue by allowing efficient append and pop operations from both ends of the sequence. Unlike regular lists which have O(n) time complexity for inserting or removing elements at the beginning, deques provide O(1) time complexity for these operations on both ends.

Deques are particularly useful in scenarios requiring fast access to both ends of a sequence, such as implementing queues, stacks, sliding window algorithms, and tracking recent history with a limited size buffer. They are thread-safe for append and pop operations from different threads, making them valuable for concurrent programming applications.

## Syntax

```pseudo
from collections import deque

d = deque([iterable[, maxlen]])
```

**Parameters:**

- `iterable` (Optional): A parameter providing initial data for the deque. If not provided, an empty deque is created.
- `maxlen` (Optional): An integer specifying the maximum number of items allowed in the deque. When this limit is reached, adding new items causes items from the opposite end to be removed.

**Return value:**

A deque object returns a new deque object containing elements from the iterable in the same order (if provided), with an optional maximum length constraint.

## Example 1: Creating and Using a Basic Deque

This example demonstrates basic deque operations including `append()`, `appendleft()`, `pop()`, `popleft()`, and index access:

```py
from collections import deque

# Create a deque
numbers = deque([1, 2, 3, 4, 5])
print(f"Initial deque: {numbers}")

# Add elements to both ends
numbers.append(6)         # Add to the right end
numbers.appendleft(0)     # Add to the left end
print(f"After adding elements: {numbers}")

# Access elements
print(f"First element: {numbers[0]}")
print(f"Last element: {numbers[-1]}")

# Remove elements from both ends
right_element = numbers.pop()      # Remove from the right end
left_element = numbers.popleft()   # Remove from the left end
print(f"Popped from right: {right_element}")
print(f"Popped from left: {left_element}")
print(f"Final deque: {numbers}")
```

This example results in the following output:

```shell
Initial deque: deque([1, 2, 3, 4, 5])
After adding elements: deque([0, 1, 2, 3, 4, 5, 6])
First element: 0
Last element: 6
Popped from right: 6
Popped from left: 0
Final deque: deque([1, 2, 3, 4, 5])
```

## Example 2: How to Append and Pop Items from Both Ends of a Deque

This example compares the performance of deque operations with list operations to demonstrate why deques are more efficient for certain tasks:

```py
from collections import deque
import time

def measure_performance(operation, times=10000):
  """Measure the execution time of an operation."""
  start_time = time.perf_counter()
  operation(times)
  end_time = time.perf_counter()
  return end_time - start_time

def list_append_left(n):
  """Add elements to the beginning of a list."""
  lst = []
  for i in range(n):
    lst.insert(0, i)  # Insert at the beginning (expensive for lists)
  return lst

def deque_append_left(n):
  """Add elements to the beginning of a deque."""
  d = deque()
  for i in range(n):
    d.appendleft(i)   # Append to the left (efficient for deques)
  return d

# Compare performance for left-side operations
list_time = measure_performance(list_append_left)
deque_time = measure_performance(deque_append_left)

print(f"Time to insert 10,000 items at the beginning:")
print(f"List insert(0, item): {list_time:.6f} seconds")
print(f"Deque appendleft(): {deque_time:.6f} seconds")
print(f"Deque is approximately {list_time/deque_time:.1f}x faster")

# Demonstrate bidirectional functionality
d = deque([1, 2, 3])
print("\nBidirectional operations demonstration:")
print(f"Initial deque: {d}")

# Append operations
d.append(4)       # Add to right
d.appendleft(0)   # Add to left
print(f"After appends: {d}")

# Pop operations
right = d.pop()           # Remove from right
left = d.popleft()        # Remove from left
print(f"Popped from right: {right}")
print(f"Popped from left: {left}")
print(f"Final deque: {d}")
```

This example results in the following output (timing results may vary):

```shell
Time to insert 10,000 items at the beginning:
List insert(0, item): 0.020001 seconds
Deque appendleft(): 0.000671 seconds
Deque is approximately 29.8x faster

Bidirectional operations demonstration:
Initial deque: deque([1, 2, 3])
After appends: deque([0, 1, 2, 3, 4])
Popped from right: 4
Popped from left: 0
Final deque: deque([1, 2, 3])
```

## Codebyte Example: How to Use Deque to Build Efficient Queues and Stacks

This example demonstrates how to implement both a queue and a stack using a deque:

```py
from collections import deque

# Implementing a queue (FIFO) with deque
queue = deque()
print("Queue Operations (FIFO):")
# Enqueue operations
queue.append('apple')
queue.append('banana')
queue.append('cherry')
print(f"Queue after enqueuing: {queue}")

# Dequeue operations
first_item = queue.popleft()  # FIFO: first in, first out
print(f"Dequeued first item: {first_item}")
print(f"Queue after dequeuing: {queue}")

# Implementing a stack (LIFO) with deque
stack = deque()
print("\nStack Operations (LIFO):")
# Push operations
stack.append(1)
stack.append(2)
stack.append(3)
print(f"Stack after pushing items: {stack}")

# Pop operations
last_item = stack.pop()  # LIFO: last in, first out
print(f"Popped last item: {last_item}")
print(f"Stack after popping: {stack}")

# Bounded history example with maxlen
history = deque(maxlen=3)
actions = ["open file", "edit content", "save file", "close file"]
for action in actions:
  history.append(action)
print(f"\nLimited history (latest 3 actions): {history}")
```

## Frequently Asked Questions

<details>
<summary>1. When should I use a deque instead of a list?</summary>
<p>Use a deque when you need efficient append and pop operations from both ends of a collection. Lists are only efficient for operations at the right end (append/pop) but inefficient for left-end operations.</p>
</details>

<details>
<summary>2. How do I limit the size of a deque?</summary>
<p>Use the `maxlen` parameter when creating the deque: `d = deque(iterable, maxlen=n)`. When the deque reaches this size, adding new items causes items from the opposite end to be removed.</p>
</details>

<details>
<summary>3. Can I access elements in a deque by index?</summary>
<p>Yes, deques support index access like `d[0]` and `d[-1]`, but unlike lists, deques are not optimized for random access in the middle. Use index access sparingly with large deques.</p>
</details>

<details>
<summary>4. Is deque FIFO or LIFO in Python?</summary>
<p>A deque is neither inherently FIFO nor LIFO, it's a flexible data structure that can be used to implement both patterns. Use `append()` and `popleft()` for FIFO (queue) behavior, or use `append()` and `pop()` for LIFO (stack) behavior.</p>
</details>

<details>
<summary>5. Is deque faster than list?</summary>
<p>Yes, for operations at the beginning of the collection. Deques have O(1) time complexity for append and pop operations at both ends, while lists have O(n) time complexity for operations at the beginning. For operations at the end, both have similar performance. For random access by index, lists are generally faster.</p>
</details>

<details>
<summary>6. What is the difference between stack and deque?</summary>
<p>A stack is a LIFO (Last In, First Out) data structure with operations typically limited to pushing and popping elements from one end. A deque (double-ended queue) is a more flexible data structure that allows efficient insertion and removal at both ends. A deque can be used to implement a stack, but it offers additional functionality that a traditional stack does not have.</p>
</details>
