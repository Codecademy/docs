---
Title: '.remove()'
Description: 'Removes an item from a list by passing in the value of the item to be removed as an argument.'
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

The `.remove()` method removes an item from a list by passing in the value of the item to be removed as an argument.

## Syntax

```py
list.remove(item)
```

In the case where two or more elements in the list have the same value, the first occurrence of the element is removed.

## Example

```python
inventory = ['⚽', '🏀', '⚾️', '🎾', '🏐']

inventory.remove('⚾️')

print(inventory)
# Output: ['⚽', '🏀', '🎾', '🏐']
```

## Codebyte Example

To remove the first occurrence of `'eggs'`:

```codebyte/python
grocery_list = ['blueberries', 'mochi', 'eggs', 'chocolate']

grocery_list.remove('eggs')

print(grocery_list)
```
