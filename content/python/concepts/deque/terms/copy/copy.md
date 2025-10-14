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
  - 'paths/data-science'
---

The `.copy()` [method](https://www.codecademy.com/resources/docs/python/methods) returns a shallow copy of a deque.

## Syntax

```py
deque2 = deque1.copy()
```

**Parameters:**

The `.copy()` method has no parameters.

**Return value:**

Returns a new deque object that is a shallow copy of the original deque.

## Example

A Python deque can be copied using the `=` assignment operator:

```py
from collections import deque

deque1 = deque([1, 2, 3, 4])
deque2 = deque1

print(deque1)  # Output: deque([1, 2, 3, 4])
print(deque2)  # Output: deque([1, 2, 3, 4])
```

However, if you modify `deque2`, `deque1` is also modified. This is because `deque2` is actually pointing to the `deque1` object.

If you want the original deque unchanged when the new deque is modified, you can use the `.copy()` method:

```py
from collections import deque

orders = deque(['daisies', 'periwinkle'])

new_orders = orders.copy()

print(new_orders)
# Output: deque(['daisies', 'periwinkle'])

# Modify the new deque
new_orders.append('roses')

print(orders)      # Output: deque(['daisies', 'periwinkle'])
print(new_orders)  # Output: deque(['daisies', 'periwinkle', 'roses'])
```

The original `orders` deque remains unchanged when `new_orders` is modified.

## Codebyte Example

The following example demonstrates the difference between assignment and using `.copy()`:

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

## Shallow Copy

If you are copying deques containing nested objects (like lists or other deques), shallow copy means that the nested objects themselves are not copied. If you modify any nested object in the new deque, changes are reflected in both the new and old deques as they reference the same nested objects. For a deep copy where nested objects are also duplicated, use the `copy.deepcopy()` function from Python's copy module.
