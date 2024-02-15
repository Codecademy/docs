---
Title: '.append()'
Description: 'Adds an item to end of the list.'
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

The Python list method `.append()` adds an item to the end of a list.

## Syntax

```py
list.append(item)
```

The `.append()` will place the object passed in as a new element at the very end of the list. Printing the list afterwards will visually show the appended value.

This method is not to be confused with returning an entirely new list with the passed object.

## Example

To add `'🥚'` to the end of the `grocery` list:

```py
grocery = ['🍉', '🍪', '🥬', '🥕']

grocery.append('🥚')

print(grocery)
# Output: ['🍉', '🍪', '🥬', '🥕', '🥚']
```

## Codebyte Example

To add `'tulips'` to the end of the `orders` list:

```codebyte/python
orders = ['daisies', 'periwinkle']

orders.append('tulips')

print(orders)
```
