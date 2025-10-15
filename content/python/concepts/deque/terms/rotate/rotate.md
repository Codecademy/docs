---
Title: Python deque rotate()
Description: The rotate() method of deque rotates the elements of the deque by a specified number of steps to the right (positive) or to the left (negative).
Subjects:
  - 'Computer Science'
  - 'Data Structures'
Tags:
  - 'Python'
  - 'Deque'
  - 'rotate'
CatalogContent:
  - 'learn-python-3'
  - 'data-structures'
---

## rotate()

The `rotate()` method of Python’s `collections.deque` rotates the elements in the deque by the given number of steps.

If the number is **positive**, elements are moved from right to left (the rightmost elements move to the beginning).  
If the number is **negative**, elements are moved from left to right (the leftmost elements move to the end).

---

## Syntax

```python
from collections import deque

deque.rotate(n)

from collections import deque

numbers = deque([1, 2, 3, 4, 5])
numbers.rotate(2)
print(numbers)

deque([4, 5, 1, 2, 3])

from collections import deque

letters = deque(["A", "B", "C", "D", "E"])
letters.rotate(-1)
print(letters)

deque(['B', 'C', 'D', 'E', 'A'])

```
