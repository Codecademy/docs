---
Title: '.pop()'
Description: 'Removes and returns element from the right end of the deque.'
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

The **`deque.pop()`** method removes and returns an element from the right end of a deque. Removing an element from either end of a deque occurs in O(1) time.

## Syntax

```pseudo
deque.pop()
```

**Parameters:**

This method does not take any parameters.

**Return value:**

Returns the element that was removed from the right end of the deque.

**Exceptions:**

- `IndexError`: Raised if the deque is empty when `.pop()` is called.

## Example

In this example, a single element is removed from the right end of the deque using `.pop()`:

```py
from collections import deque

# Create a deque
dq = deque([10, 20, 30, 40])

# Remove and return the rightmost element
item = dq.pop()
print("Removed element:", item)
print("Deque after pop:", dq)
```

This example results in the following output

```shell
Removed element: 40
Deque after pop: deque([10, 20, 30])
```

## Codebyte Example: Popping the two rightmost elements

In this example, elements are removed from the right end of a deque one by one using `.pop()`:

```codebyte/python
from collections import deque

# Create a deque with some numbers
numbers = deque([1, 2, 3, 4, 5])

print("Initial deque:", numbers)

# Remove elements one by one from the right
last_item = numbers.pop()
print("Popped element:", last_item)
print("Deque after first pop:", numbers)

# Pop again
another_item = numbers.pop()
print("Popped another element:", another_item)
print("Final deque:", numbers)
```
