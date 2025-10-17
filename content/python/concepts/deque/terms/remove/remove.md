---
Title: 'remove()'
Description: 'Removes the first occurrence of a specified value from a deque.'
Subjects:
  - 'Computer Science'
  - 'Data Structures'
Tags:
  - 'Deque'
  - 'Methods'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

# remove()

The **`remove()`** method removes the first occurrence of a specified value from a **deque**. If the value is not found in the deque, a `ValueError` is raised. The method modifies the deque in-place and does not return a value.

## Syntax

```
deque.remove(value)
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | Any | The item to be removed from the deque. Only the first occurrence is removed. |

### Return Value

The `remove()` method returns `None`.

### Exceptions

- **`ValueError`**: Raised when the specified value is not found in the deque.

## Example

```python
from collections import deque

# Create a deque with integer elements
numbers = deque([10, 20, 30, 20, 40])

# Remove the first occurrence of 20
numbers.remove(20)

print(numbers)  # Output: deque([10, 30, 20, 40])
```

In the example above, the `remove()` method removes only the first occurrence of `20` from the deque, leaving the second occurrence of `20` intact.

## Codebyte

```codebyte/python
from collections import deque

# Create a deque with string elements
colors = deque(['red', 'blue', 'green', 'blue', 'yellow'])

print('Original deque:', colors)

# Remove the first occurrence of 'blue'
colors.remove('blue')

print('After remove("blue"):', colors)

# Remove another element
colors.remove('red')

print('After remove("red"):', colors)
```