---
Title: '.insert()'
Description: 'Adds an item at a specified index in the list.'
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

Adds an item at a specified index in the list.

## Syntax

```py
list.insert(index, item)
```

The `.insert()` method takes in two parameters:

- The index that you want to insert into.
- The item that you want to insert at the specified index.

## Example

To add an item at index 2 of `store_line` list:

```codebyte/python
store_line = ['Karla', 'Maxium', 'Martim', 'Isabella']

store_line.insert(2, 'Vikor')

print(store_line)
# Output: ['Karla', 'Maxium', 'Vikor', 'Martim', 'Isabella']
```
