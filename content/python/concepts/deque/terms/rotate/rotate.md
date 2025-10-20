---
Title: 'rotate()'
Description: 'Rotates the elements of the deque by a specified number of steps to the right (positive) or to the left (negative).'
Subjects:
  - 'Computer Science'
  - 'Data Structures'
Tags:
  - 'Deque'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`rotate()`** method of Python’s `collections.deque` rotates the elements in the deque by the specified number of steps. If the number is positive, elements move from right to left (the rightmost elements move to the beginning). If the number is negative, elements move from left to right (the leftmost elements move to the end).

## Syntax

```pseudo
deque.rotate(n)
```

**Parameters:**

- `n`: The number of steps to rotate the deque. Positive values rotate to the right, negative values rotate to the left.

**Return value:**

This method rotates the deque in place and returns `None`. The original deque is modified directly.

## Example 1: Rotating Numbers to the Right

This example demonstrates rotating a deque of numbers two steps to the right:

```py
from collections import deque

numbers = deque([1, 2, 3, 4, 5])
numbers.rotate(2)
print(numbers)
```

The output of this code is:

```shell
deque([4, 5, 1, 2, 3])
```

## Example 2: Rotating Letters to the Left

This example shows rotating a deque of letters one step to the left:

```py
from collections import deque

letters = deque(["A", "B", "C", "D", "E"])
letters.rotate(-1)
print(letters)
```

The output of the code is:

```shell
deque(['B', 'C', 'D', 'E', 'A'])
```

## Codebyte Example: Mixed Rotation Operations

The following example illustrates rotating multiple deques in both directions in a single program:

```codebyte/python
from collections import deque

numbers = deque([10, 20, 30, 40])
letters = deque(["X", "Y", "Z"])

# Rotate numbers right by 1
numbers.rotate(1)

# Rotate letters left by 2
letters.rotate(-2)

print("Numbers rotated right:", numbers)
print("Letters rotated left:", letters)
```
