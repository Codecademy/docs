---
Title: 'append()'
Description: 'Adds an element to the right end of a deque.'
Subjects:
  - 'Computer Science'
  - 'Data Structures'
Tags:
  - 'Collections'
  - 'Deque'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`append()`** method of a `collections.deque` object adds an element to the right end (back) of the deque efficiently. This operation runs in O(1) time and is ideal for queue or stack-like use cases.

## Syntax

```pseudo
deque_object.append(value)
```

**Parameters:**

- `value`: The element to be added to the right end of the deque.

**Return value:**

Does not return a `value` (returns None). The deque is modified in place.

## Example 1

In this example, an element is added to an initially empty deque, then another element is appended and the contents are displayed:

```py
from collections import deque

dq = deque()
dq.append('a')
print(dq)

dq.append('b')
print(dq)
```

The output of this code is:

```shell
deque(['a'])
deque(['a', 'b'])
```

## Example 2

In this example, an element is appended to a deque with a fixed maximum length, showing how older elements are automatically dropped from the opposite end when full:

```py
from collections import deque

dq = deque([1, 2, 3], maxlen=3)
print(dq)

dq.append(4)
print(dq)
```

The output of this code is:

```shell
deque([1, 2, 3], maxlen=3)
deque([2, 3, 4], maxlen=3)
```

## Codebyte Example

In this example, multiple items are appended to a deque, then elements are popped from the left while printing the current state and size:

```codebyte/python
from collections import deque

dq = deque()
for ch in ['x', 'y', 'z']:
  dq.append(ch)
  print(f"After append('{ch}'): {dq}")

while dq:
  print(f"Popping left: {dq.popleft()} | Current deque: {dq}")
```

## Frequently Asked Questions

### 1. How do you append to a deque in Python?

Use the `append(value)` method on the deque object to add the element `value` to its right end.

### 2. What is the `append()` function used for in Python?

In the context of a `deque`, `append()` adds an element at the back end of the container, supporting efficient queue- or stack-like operations.

### 3. What is the deque function in Python?

The `deque` class in the `collections` module is a double-ended queue that supports fast appends and pops from both ends, making it useful for queues, stacks, and history buffers.
