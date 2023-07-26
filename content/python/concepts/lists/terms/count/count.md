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

## Example 1

To count the number of `'pen'` within the `backpack` list:

```codebyte/python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

numPen = backpack.count('pen')

print(numPen)
# Output: 3
```
