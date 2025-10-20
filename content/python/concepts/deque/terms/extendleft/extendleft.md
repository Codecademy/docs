---
Title: 'extendleft()'
Description: 'Adds multiple elements to the left end of a deque from any iterable.'
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

The **`extendleft()`** method adds multiple elements to the left end of a `deque` from any iterable (like a [list](https://www.codecademy.com/resources/docs/python/lists), [tuple](https://www.codecademy.com/resources/docs/python/tuples), or another deque), adding them in reverse order. It modifies the deque in place and returns `None`.

## Syntax

```pseudo
deque.extendleft(iterable)
```

**Parameter:**

- `iterable`: A sequence or iterable whose elements will be added to the left end of the deque.

**Return value:**

This method does not return any value. It modifies the deque in-place.

> **Note:** Elements are added in reverse order of the iterable.

## Example

In this example, `extendleft()` adds elements from a list and another deque to the left end of an existing deque:

```py
from collections import deque

# Create a deque
dq = deque([1, 2, 3])

# Extend using a list
dq.extendleft([4, 5, 6])
print("After extendleft with list:", dq)

# Extend using another deque
dq.extendleft(deque([7, 8, 9]))
print("After extendleft with another deque:", dq)
```

This example results in the following output:

```shell
After extendleft with list: deque([6, 5, 4, 1, 2, 3])
After extendleft with another deque: deque([9, 8, 7, 6, 5, 4, 1, 2, 3])
```

## Codebyte Example: Extending a deque with a list and a tuple

In this example, `extendleft()` adds elements from a list and a tuple on the left, demonstrating its ability to handle different iterables:

```codebyte/python
from collections import deque

# Create a deque with some initial elements
fruits = deque(["apple", "banana"])
print("Initial deque:", fruits)

# Add multiple elements to the left using extendleft()
fruits.extendleft(["cherry", "date"])
print("After extendleft with list:", fruits)

# Extend again using a tuple
fruits.extendleft(("elderberry", "fig"))
print("After extendleft with tuple:", fruits)
```
