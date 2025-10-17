---
Title: 'insert()'
Description: 'Inserts a single element at the specified index in the deque, shifting elements to the right.'
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

The **`insert()`** method of Python’s [`collections.deque`](https://www.codecademy.com/resources/docs/python/collections-module) inserts an element at a specified index within the deque. Unlike `append()` or `appendleft()`, which add elements only to the ends, `insert()` can add an element at any valid position.

While deques are optimized for fast appends and pops at both ends, using `insert()` in the middle may affect performance because it shifts elements internally.

## Syntax

```pseudo
deque.insert(index, element)
```

**Parameters:**

- `index` : The position where the new element will be inserted.
- `element` : The item to insert into the deque.

**Return value:**

- `None`: This method modifies the deque in place.

## Example 1: Inserting an Element at a Specific Position

This example demonstrates inserting elements at specific positions within a deque:

```py
from collections import deque

# Create a deque
fruits = deque(["apple", "banana", "cherry"])
print("Original deque:", fruits)

# Insert 'orange' at index 1
fruits.insert(1, "orange")
print("After inserting 'orange' at index 1:", fruits)
```

The output of this code is:

```shell
Original deque: deque(['apple', 'banana', 'cherry'])
After inserting 'orange' at index 1: deque(['apple', 'orange', 'banana', 'cherry'])
```

## Example 2: Using Negative Indices and Edge Insertions

This example demonstrates inserting elements at the beginning and end using positive and negative indices:

```py
from collections import deque

colors = deque(["red", "green", "blue"])

# Insert at the beginning
colors.insert(0, "purple")

# Insert at the end using len(colors)
colors.insert(len(colors), "yellow")

# Insert before the last item using negative index
colors.insert(-1, "cyan")

print(colors)
```

The output of this code is:

```shell
deque(['purple', 'red', 'green', 'blue', 'cyan', 'yellow'])
```

Here, the `insert()` method demonstrates its flexibility that it can insert items anywhere in the deque.

## Codebyte Example: How to Use `deque.insert()` for Dynamic Insertions

In this example, `insert()` adds elements at various positions in a deque, demonstrating dynamic insertions at the beginning, middle, and end:

```codebyte/python
from collections import deque

# Create a deque of numbers
numbers = deque([10, 20, 30, 40])
print("Original deque:", numbers)

# Insert elements at various positions
numbers.insert(2, 25)       # Insert at index 2
numbers.insert(0, 5)        # Insert at beginning
numbers.insert(len(numbers), 50)  # Insert at end

print("Updated deque:", numbers)

# Access elements to verify insertion
print("First element:", numbers[0])
print("Middle element:", numbers[2])
print("Last element:", numbers[-1])
```
