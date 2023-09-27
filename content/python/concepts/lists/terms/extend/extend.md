---
Title: '.extend()'
Description: 'Adds list elements to end of the list.'
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

Adds list elements to end of the list.

## Syntax

```py
list.extend(iterable)
```

This will place elements passed in an iterable (list, tuple, or string) as new elements at the very end of the list.

`.extend()` does not return any value.

## Examples

To add `grocery_new` to the end of the `grocery` list:

```codebyte/python
grocery = ['blueberries', 'eggs', 'artichoke']
grocery_new = ['milk', 'cookies']

grocery.extend(grocery_new)

print(grocery)
# Output: ['blueberries', 'eggs', 'artichoke', 'milk', 'cookies']
```

It works for any other type of iterables:

```codebyte/python
to_do_list = ['respond to email', 'check github']
targets = (4, 1, 6, 20)

to_do_list.extend(targets)

print(to_do_list)
# Output: ['respond to email', 'check github', 4, 1, 6, 20]
```
