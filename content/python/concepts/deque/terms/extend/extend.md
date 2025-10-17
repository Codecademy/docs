---
Title: 'extend()'
Description: 'Adds multiple elements to the right end of a deque from any iterable.'
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

The **`extend()`** method adds multiple elements to the right end of a `deque` from any iterable (like a [list](https://www.codecademy.com/resources/docs/python/lists), [tuple](https://www.codecademy.com/resources/docs/python/tuples), or another deque). It modifies the deque in place and returns `None`.

## Syntax

```pseudo
deque.extend(iterable)
```

**Parameters:**

- `iterable`: A sequence or iterable whose elements will be added to the right end of the deque.

**Return value:**

This method does not return any value. It modifies the deque in-place.

## Example

In this example, `extend()` adds elements from a list and another deque to the right end of a deque:

```py
from collections import deque

# Create a deque
dq = deque([1, 2, 3])

# Extend it
dq.extend([4, 5, 6])
print("Extending with list: ", dq)

#Extend it using another deque
dq.extend(deque([7, 8, 9]))
print("Extending with another deque: ", dq)
```

This example results in the following output:

```shell
Extending with list: deque([1, 2, 3, 4, 5, 6])
Extending with another deque: deque([1, 2, 3, 4, 5, 6, 7, 8, 9])
```

## Codebyte Example: Extending a deque with a list and a tuple

In this example, `extend()` adds elements from a list and a tuple, demonstrating its ability to handle different iterables:

```codebyte/python
from collections import deque

# Create a deque with some initial elements
fruits = deque(["apple","banana"])

print("Initital deque:", fruits)

# Add multiple elements to the right using extend()
fruits.extend(["cherry", "date", "elderberry"])

# Extend again using a tuple
fruits.extend(("fig", "grape"))
print("Deque after extending with a tuple:", fruits)
```
