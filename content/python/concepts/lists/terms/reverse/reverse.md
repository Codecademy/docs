---
Title: '.reverse()'
Description: 'Reverse the elements in the list.'
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

Reverse the elements in the list.

## Syntax

```py
list.reverse()
```

The `.reverse()` method does not take in any arguments.

## Example 1

```python
counting = [1, 2, 3, 4, 5]

counting.reverse()

print(counting)
# Output: [5, 4, 3, 2, 1]
```

## Example 2

To reverse a list called `hand`:

```codebyte/python
hand = ['Rock ✊', 'Paper 🖐', 'Scissors ✌️']

print('Original order: ', hand)

hand.reverse()

print('Updated order: ', hand)
```
