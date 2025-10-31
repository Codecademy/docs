---
Title: 'rotate()'
Description: 'Rotates the elements of the deque by a specified number of steps to the right (positive) or to the left (negative).'
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

The **`rotate()`** method of Python’s [`collections.deque`](https://www.codecademy.com/resources/docs/python/deque) rotates the elements in the deque by the specified number of steps. If the number is positive, elements move from right to left (the rightmost elements move to the beginning). If the number is negative, elements move from left to right (the leftmost elements move to the end).

## Syntax

```pseudo
deque.rotate(n)
```

**Parameters:**

- `n`: The number of steps to rotate the deque. Positive values rotate to the right, negative values rotate to the left.

**Return value:**

This method rotates the deque in place and returns `None`. The original deque is modified directly.

## Example 1: Rotating Days of the Week to the Right

This example demonstrates rotating a deque of weekdays two steps to the right:

```py
from collections import deque

days = deque(["Mon", "Tue", "Wed", "Thu", "Fri"])
days.rotate(2)
print(days)
```

The output of this code is:

```shell
deque(['Thu', 'Fri', 'Mon', 'Tue', 'Wed'])
```

## Example 2: Rotating Movie Titles to the Left

This example showcases rotating a deque of movie titles one step to the left:

```py
from collections import deque

movies = deque(["Inception", "Avatar", "Interstellar", "Tenet"])
movies.rotate(-1)
print(movies)
```

The output of the code is:

```shell
deque(['Avatar', 'Interstellar', 'Tenet', 'Inception'])
```

## Codebyte Example: Opposite Rotations

The following example illustrates rotating two deques in opposite directions within one program:

```codebyte/python
from collections import deque

colors = deque(["red", "green", "blue", "yellow"])
numbers = deque([100, 200, 300, 400, 500])

# Rotate colors right by 1
colors.rotate(1)

# Rotate numbers left by 2
numbers.rotate(-2)

print("Colors rotated right:", colors)
print("Numbers rotated left:", numbers)
```
