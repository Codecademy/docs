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
list.count(value, start, end)
```

The `.count()` method has three parameters:

- `value`: The string to search for. (Required)
- `start`: The index to start the search. Default is index 0.
- `end`: The position to end the search. Default is end of the string.

## Example 1

To count the number of `'pen'` within the `backpack` list:

```codebyte/python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

numPen = backpack.count('pen')

print(numPen)
# Output: 3
```

## Example 2

To count the number of `'pen'` within the `backpack` list from index 0 to index 5:

```codebyte/python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

numPen = backpack.count('pen', 0, 5)

print(numPen)
# Output: 2
```
