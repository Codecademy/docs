---
Title: '.count()'
Description: 'Searches a list for a particular item and returns the number of matching entries found.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/computer-science'
---

Searches a list for a particular item and returns the number of matching entries found.

## Syntax

```py
list.count(value)
```

The `.count()` method takes a single argument:

- `value`: Required. Any type (string, number, list, tuple, etc.). The value to search for.

## Example 1

To count the number of `'pen'` within the `backpack` list:

```codebyte/python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

numPen = backpack.count('pen')

print(numPen)
# Output: 3
```

## Example 2

Count Tuple and List Elements Inside List:

```codebyte/python
# random list
random = ['a', ('a', 'b'), ('a', 'b'), [3, 4]]

# count element ('a', 'b')
count = random.count(('a', 'b'))

# print count
print("The count of ('a', 'b') is:", count)

# count element [3, 4]
count = random.count([3, 4])

# print count
print("The count of [3, 4] is:", count)

# The count of ('a', 'b') is: 2
# The count of [3, 4] is: 1
```
