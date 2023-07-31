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
---

Searches a list for a particular item and returns the number of matching entries found.

## Syntax

```pseudo
list.count(value)
```

The `.count()` method has just one parameter:

- `value`: The string to search for. (Required)

## Example

To count the number of `'pen'` within the `backpack` list:

```python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

numPen = backpack.count('pen')

print(numPen)
```

This results in the following output:

```shell
3
```
