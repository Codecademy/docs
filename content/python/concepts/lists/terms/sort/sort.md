---
Title: '.sort()'
Description: 'Sorts the contents of the list it is called on.'
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

The `.sort()` method sorts the contents of the list it is called on.

## Syntax

```py
list.sort()
```

Numerical lists will be sorted in ascending order, and lists of strings will be sorted into alphabetical order. It modifies the original list, and has no return value.

## Example

To sort a list called `exampleList`:

```python
exampleList = [2, 1, 2]

exampleList.sort()

print(exampleList)
# Output: [1, 2, 2]
```

## Codebyte Example

To sort a list called `exampleList`:

```codebyte/python
exampleList = [4, 2, 1, 3]

exampleList.sort()

print(exampleList)
```
