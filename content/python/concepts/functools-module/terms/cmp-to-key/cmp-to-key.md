---
Title: 'cmp-to-key()'
Description: 'Transforms an old-style comparison function into a key function, which will be used as the key argument in functions that take this parameter.'
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
The **`cmp-to-key()`** [function](https://www.codecademy.com/resources/docs/python/functions) is a _[higher order function](https://www.codecademy.com/resources/docs/python/functions#:~:text=Higher%2DOrder%20Functions)_ used as a tool to generate _key functions_ from old-style _comparison functions_. A comparison function is any callable that takes two arguments, compares them and returns:

  - a negative number for less-than, 
  - a positive number for greater-than, 
  - or zero for equality. 

A key function is a function that takes one argument and returns a value that can be used as a sorting key.

`cmp-to-key()` is used by functions that can take the `key` parameter (such as [sorted()](https://www.codecademy.com/resources/docs/python/built-in-functions/sorted), [min()](https://www.codecademy.com/resources/docs/python/built-in-functions/min), [max()](https://www.codecademy.com/resources/docs/python/built-in-functions/max),...). It is very common to use it to migrate programs written in Python 2 to Python 3.

## Syntax

The `cmp-to-key()`function is part of the `functools` [module](https://www.codecademy.com/resources/docs/python/modules):

```pseudo
from functools import cmp_to_key

cmp_to_key(comp_func)
```

**Parameters** 

`comp_func`: This is a function that takes two arguments and compares them, returning:
  - A _negative number_, if the first value is less than the second,
  - A _positive number_, if the first value is more than the second,
  - _Zero_, if both values are the same.

**Return Value**
The method returns a _key function_ which is used as the _sort key_ for functions that take the `key` parameter.


## Example 1
In this example, we check which one of two values is heavier(larger) than the other

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

The result is
```shell
[20, 200, 10, 1]
[1, 10, 20, 200]
```

## Example 2
Here, we organize the list from largest to smallest by changing the comparison function.

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

Resulting in
```shell
Unsorted weights [20, 200, 10, 1]
Sorted weights [200, 20, 10, 1]
```

## Codebyte Example
```codebyte/python
from functools import cmp_to_key

# Old-style compare function for the length of two strings
def compare(x: str, y: str):
  if len(x) == len(y): return 0
  return 1 if len(x) > len(y) else -1

# Organize a list of strings according to their length
strings_unsorted = ["don't make it sad", "don't be so mean", "don't let me go"]
strings_sorted = sorted(strings_unsorted, key=cmp_to_key(compare))

print("First verse lines of Hey Dude, by feel")
for i in range(len(strings_unsorted)):
    print("Hey dude,", strings_unsorted[i])

print("----------------")
print("First verse lines of Hey Dude, by length")
for i in range(len(strings_sorted)):
    print("Hey dude,", strings_sorted[i])
```