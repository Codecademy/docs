---
Title: 'index'
Description: 'Returns the position of the first occurrence of a specified element within the deque.'
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

The **`index()`** method in a Python [deque](https://www.codecademy.com/resources/docs/python/collections-module/deque) returns the position of the first occurrence of a specified element within the deque.

## Syntax

```pseudo
deque.index(element, start=0, stop=len(deque))
```

**Parameters:**

- `element`: The element to be found within the deque.
- `start` (Optional): The zero-based inclusive index to specify the start position of the search.
- `stop` (Optional): The index to end the search (default is the length of the deque).

**Return value:**

Returns the index (`int`) of the first matching element; raises a `ValueError` if the element is not found.

> **Note:** This method raises a `ValueError` if the element is not in the deque, which can stop the code if not handled inside a [try and except](https://www.codecademy.com/resources/docs/python/keywords/try) block.

## Example 1: Finding elements by position

In this example, `index()` is used to find the position of elements in different scenarios:

```py
from collections import deque

# Create a deque
dq = deque([1, 2, 3, 1, 4, 5, 1])

# Find the very first position of (4)
print("Very first position of (4):", dq.index(4))

# Find the position of (1) after index=0
start = 0 + 1  # Since the start parameter is inclusive, add 1 to skip index=0.
print("Position of (1) after index=0:", dq.index(1, 1))

# Find the position of (1) in a given window
start = 1
stop = 6
print("Position of (1) between index=1 inclusive and index=6 exclusive:", dq.index(1, 1, 6))

# Find the position of (10), which is not in the deque
try:
  print("Position of (10):", dq.index(10))
except ValueError as ve:
  print("Trying to find the index of a nonexistent element will cause an error.")
  print(ve)
```

The output of this code is:

```shell
Very first position of (4): 4
Position of (1) after index=0: 3
Position of (1) between index=1 inclusive and index=6 exclusive: 3
Trying to find the index of a nonexistent element will give you problems.
10 is not in deque
```

## Codebyte Example: Finding elements by value range

In this example, `index()` finds the position of the element `"apple"` in different scenarios, showing its flexibility and use of parameters:

```codebyte/python
from collections import deque

# Create a deque with some initial elements
fruits = deque(["apple", "banana", "apple", "lemon", "apple", "tomato"])

# Find the index for the first occurrence of "apple"
first_occurrence_of_apple_index = fruits.index("apple")
print("First found index for apple:", first_occurrence_of_apple_index)

# Find the next occurrence of "apple" after the first occurrence
print("Next occurrence:", fruits.index("apple", first_occurrence_of_apple_index + 1))

# Find the index for "apple" between index=1 inclusive and index=4 exclusive
print("Index for apple between (1) inclusive and (4) exclusive:", fruits.index("apple", 1, 4))
```

