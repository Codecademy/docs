---
Title: '.index()'
Description: 'Finds the first occurrence of a particular value within the list.'
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

Finds the first occurrence of a particular value within the list.

## Syntax

```py
list.index(value, start, end)
```

The `.index()` list method has three parameters:

- `value`: The string to search for. (Required)
- `start`: The index to start the search. Default is index 0.
- `end`: The position to end the search. Default is end of the string.

## Example 1

To find the index the first `'pen'` within the `backpack` list:

```codebyte/python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

firstPen = backpack.index('pen')

print(firstPen)
# Output: 1
```

## Example 2

To find the index the first `'pen'` within the `backpack` list within index 3 to index 6:

```codebyte/python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

firstPen = backpack.count('pen', 3, 6)

print(firstPen)
# Output: 4
```
