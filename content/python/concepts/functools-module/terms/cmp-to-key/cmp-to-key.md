---
Title: 'cmp-to-key()'
Description: 'Converts an old-style comparison function into a key function, which will be used as the key argument in functions that accepts this parameter.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Comparison'
  - 'Functions'
  - 'Obsolete'
  - 'Python'
  - 'Sort'
  - 'Sorting Algorithms'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`cmp_to_key()`** [function](https://www.codecademy.com/resources/docs/python/functions) from `functools` is a [**higher-order function**](https://www.codecademy.com/resources/docs/python/functions#:~:text=Higher%2DOrder%20Functions) that converts an old-style comparison function into a key function usable with tools like [`sorted()`](https://www.codecademy.com/resources/docs/python/built-in-functions/sorted), [`min()`](https://www.codecademy.com/resources/docs/python/built-in-functions/min), or [`max()`](https://www.codecademy.com/resources/docs/python/built-in-functions/max). A comparison function is any callable that takes two arguments and returns:

- A negative number if the first argument is less than the second,  
- A positive number if the first argument is greater,  
- Or zero if they are equal.  

A key function, by contrast, takes a single argument and returns a value to be used as a sorting key. `cmp_to_key()` is especially useful when migrating code from Python 2 (which supported comparison functions) to Python 3 (which only supports key functions).

## Syntax

The `cmp-to-key()`function is part of the `functools` [module](https://www.codecademy.com/resources/docs/python/modules):

```pseudo
from functools import cmp_to_key

functools.cmp_to_key(comp_func)
```

**Parameters:** 

`comp_func`: This is a function that takes two arguments and compares them, returning:
  - A _negative number_, if the first value is less than the second
  - A _positive number_, if the first value is more than the second
  - Or _zero_, if both values are equal

**Return value:**

Returns a key function that can be used as the key argument in sorting functions like `sorted()`, `list.sort()`, `min()`, or `max()`.

## Example 1

This example demonstrates checking which of two values is heavier (larger) using `cmp_to_key()`:

```py
from functools import cmp_to_key

# Create a list of numbers
weights = [20, 200, 10, 1]

# Define the comparison function
def lighter_to_heavier(a: float, b:float):
  if a == b: return 0
  return 1 if a > b else -1

# Reorganize the list from smallest to largest
print("Unsorted weights", weights)
weights.sort(key=cmp_to_key(lighter_to_heavier))
print("Sorted weights", weights)
```

The output of this code is:

```shell
Unsorted weights [20, 200, 10, 1]
Sorted weights [1, 10, 20, 200]
```

## Example 2

This example reorganizes the list from largest to smallest by modifying the comparison function:

```py
from functools import cmp_to_key

# Create a list of numbers
weights = [20, 200, 10, 1]

# Define the comparison function
def heaviest_to_smallest(a: float, b: float):
  if a == b: return 0
  return 1 if a < b else -1

# Reorganize the list from largest to smallest
print("Unsorted weights", weights)
weights.sort(key=cmp_to_key(heaviest_to_smallest))
print("Sorted weights", weights)
```

The output of this code is:

```shell
Unsorted weights [20, 200, 10, 1]
Sorted weights [200, 20, 10, 1]
```

## Codebyte Example: Reorganize a list of strings by length

This example shows sorting strings by their length using a comparison function converted with `cmp_to_key()`:

```codebyte/python
from functools import cmp_to_key

# Old-style compare function for the length of two strings
def compare(x: str, y: str):
  if len(x) == len(y): return 0
  return 1 if len(x) > len(y) else -1

# Organize a list of strings according to their length
strings_unsorted = ["don't make it sad", "don't be so mean", "don't let me go"]
strings_sorted = sorted(strings_unsorted, key=cmp_to_key(compare))

# Print two possible versions for a verse
print("First verse lines of Hey Dude, by feel")
for i in range(len(strings_unsorted)):
    print("Hey dude,", strings_unsorted[i])

print("----------------")
print("First verse lines of Hey Dude, by length")
for i in range(len(strings_sorted)):
    print("Hey dude,", strings_sorted[i])
```
