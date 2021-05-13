---
Title: ".count()"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Lists"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/data-science"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition 

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