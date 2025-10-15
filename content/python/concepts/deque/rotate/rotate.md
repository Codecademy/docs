---
Title: 'rotate()'
Description: 'Rotates the elements of a deque by a specified number of steps.'
Subjects:
  - 'Computer Science'
  - 'Data Structures'
Tags:
  - 'Deque'
  - 'Collections'
  - 'Python'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`rotate()`** method in Python’s [`collections.deque`](https://docs.python.org/3/library/collections.html#collections.deque) rotates the elements of a deque (double-ended queue) by a specified number of steps.  
This method is useful for efficiently shifting elements in a circular manner without needing to rebuild or reindex the deque.

## Syntax

```python
deque.rotate(n=1)
```

**Parameters:**

- `n` _(int, optional)_ — The number of steps to rotate.
  - If `n` is positive, elements are rotated to the right.
  - If `n` is negative, elements are rotated to the left.
  - Default is `1`.

**Return Value:**

- The method modifies the deque in place and returns `None`.

## Example

```py
from collections import deque

# Create a deque
dq = deque([1, 2, 3, 4, 5])

# Rotate to the right by 2
dq.rotate(2)
print(dq)

# Rotate to the left by 1
dq.rotate(-1)
print(dq)
```

## Output

```shell
deque([4, 5, 1, 2, 3])
deque([5, 1, 2, 3, 4])
```

Here:

- `dq.rotate(2)` moves the last two elements `[4, 5]` to the front.
  <<<<<<< HEAD
- `dq.rotate(-1)` moves the first element `[4]` to the end.

## Codebyte Example

```codebyte/python
from collections import deque

# Create a deque
dq = deque(["C", "o", "d", "e", "c", "a", "d", "e", "m", "y"])

# Rotate to the right by 3
dq.rotate(3)

print(dq)
```

This produces:

```shell
deque(['d', 'e', 'm', 'y', 'C', 'o', 'd', 'e', 'c', 'a'])
```
