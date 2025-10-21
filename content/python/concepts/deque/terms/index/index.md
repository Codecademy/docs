---
Title: 'index'
Description: 'Used to find the position of the first occurrence of an element in a deque.'
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

The **index(x)** method is used to find the position of the first occurrence of `x` in a [deque](https://www.codecademy.com/resources/docs/python/collections-module/deque).


## Syntax

```pseudo
deque.index(x[, start[, stop]])
```

**Parameter:**

- `x`: A sequence or iterable whose elements will be added to the left end of the deque.

- `start`: A sequence or iterable whose elements will be added to the left end of the deque.

- `stop`: A sequence or iterable whose elements will be added to the left end of the deque.

**Return value:**

This method returns the zero based index of element `x` in the list.

> **Note:** This method raises a ValueError if `x` is not in the list which can potentially break your code's execution if not treated inside a [try and except](https://www.codecademy.com/resources/docs/python/keywords/try) block.


## Example

In this example, `index()` is used to find:
- The very first position of an element in a list.
- The position of an element in a list after a given postion.
- The position of an element in a list inside a given window.
- The position of an element that is not in the list.

```py
from collections import deque

# Create a deque
dq = deque([1, 2, 3, 1, 4, 5, 1])

# Find the very first position of (4)
print("Very first position of (4):", dq.index(4))

# Find the position of (1) after index=0.
start = 0 + 1 # Since the start parameter is inclusive, we add 1 to exclude index=0.
print("Position of (1) after index=0:", dq.index(1,1))

# Find the position of (1) in a given window.
start = 1
stop = 6
print("Position of (1) between index=1 inclusive and index=6 exclusive:", dq.index(1,1,6))

# Find the position of (10) which is not in the list.
try:
    print("Position of (10):", dq.index(10))
except(ValueError) as ve:
    print("Trying to find the index of a nonexistent element will give you problems.")
    print(ve)
# This will raise an error
# ValueError: 10 is not in deque
```

## Codebyte Example: Finding the index of elements in a list

In this example, `index()` finds the position of the element `"apple"` in different scenarios, showing it's possible applications and flexibility.

```codebyte/python
from collections import deque

# Create a deque with some initial elements
fruits = deque(["apple", "banana", "apple", "lemon", "apple","tomato"])

# Find the index for the first occurrence of "apple"
first_occurrence_of_apple_index = fruits.index("apple")
print("First found index for apple: ", first_occurrence_of_apple_index)

# Find the next occurrence of apple after the first occurrence
print("Next occurrence: ", fruits.index("apple",first_occurrence_of_apple_index + 1))

# Find the index for apple between index=1 inclusive and index=4 exclusive.
print("Index for apple, between (1) inclusive and (4) exclusive: ", fruits.index("apple",1,4))
```