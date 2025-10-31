---
Title: '.copy()'
Description: 'Returns a shallow copy of a deque.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Deques'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `.copy()` [method](https://www.codecademy.com/resources/docs/python/methods) returns a shallow copy of a `deque`.

## Syntax

```pseudo
copied_deque = original_deque.copy()
```

**Parameters:**

The `.copy()` method takes no parameters.

**Return value:**

Returns a new deque object that is a shallow copy of the original deque.

## Example 1: Reference copy using assignment

The example shows that assigning one deque to another with `=` creates a reference, not a real copy:

```py
from collections import deque

deque1 = deque([1, 2, 3, 4])
deque2 = deque1

print(deque1)
print(deque2)
```

The output of this code is:

```shell
deque([1, 2, 3, 4])
deque([1, 2, 3, 4])
```

However, modifications to `deque2` affect `deque1` since both refer to the same object.

## Example 2: Creating a shallow copy

In this example, a separate deque is created using `.copy()`, leaving the original unchanged:

```py
from collections import deque

orders = deque(['daisies', 'periwinkle'])
new_orders = orders.copy()

print(new_orders)

# Modify the new deque
new_orders.append('roses')

print(orders)
print(new_orders)
```

The output of this code is:

```shell
deque(['daisies', 'periwinkle'])
deque(['daisies', 'periwinkle'])
deque(['daisies', 'periwinkle', 'roses'])
```

The original `orders` deque remains unchanged when `new_orders` is modified.

## Codebyte Example

The following example demonstrates the difference between assignment and `.copy()`:

```codebyte/python
from collections import deque

# Using assignment operator
original = deque([10, 20, 30])
reference = original

# Modify through reference
reference.append(40)
print(f"Original after reference modification: {original}")
print(f"Reference: {reference}")

# Using .copy() method
original2 = deque([10, 20, 30])
copied = original2.copy()

# Modify the copy
copied.append(40)
print(f"Original2 after copy modification: {original2}")
print(f"Copied: {copied}")
```
