---
Title: '.clear()'
Description: 'Removes all elements from the deque, leaving it empty.'
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

The **`.clear()`** method in Python’s `collections.deque` class removes all elements from the deque, leaving it empty. It’s useful when the contents of the deque need to be cleared without deleting the object itself.

The method modifies the deque in place and returns `None`. Its time complexity is `O(n)` since it removes elements one by one.

## Syntax

```pseudo
deque.clear()
```

**Parameters:**

- `None`: This method does not take any parameters as it simply resets the deque to empty.

**Return value:**

The return value of `.clear()` should be a check to determine if the deque is empty. This can be done using an `if` statement with a return value of `true` when checked if empty or simply a `print()` statement to output the length of the deque.

## Example 1: Clearing All Elements from a Deque

In this example, the `.clear()` method removes every element from the deque, and an `if` statement checks whether it is empty afterward:

```py
from collections import deque

# Create a deque
cars = deque(["toyota", "suzuki", "honda"])
print(f"Initial deque is as follows: {cars}")

# Clearing the deque
cars.clear()

# If statement to check if the deque has been sucessfully cleared
if not cars:
  print("the deque is empty")
```

The output of this code is:

```shell
Initial deque: deque(['Toyota', 'Suzuki', 'Honda'])
The deque is empty.
```

## Codebyte Example: Clearing Completed Tasks

In this example, a deque keeps track of recent tasks in a to-do list. After all tasks are completed, the `.clear()` method is used to empty the deque and prepare it for new tasks:

```codebyte/python
from collections import deque

# Create a deque of completed tasks
completed_tasks = deque(["Write report", "Send emails", "Backup files"])
print(f"Completed tasks: {completed_tasks}")

# Clear all tasks to reuse the deque for a new session
completed_tasks.clear()

print(f"Tasks after clearing: {completed_tasks}")
```
