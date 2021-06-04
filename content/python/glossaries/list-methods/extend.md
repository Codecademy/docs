---
Title: ".extend()"
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

Adds list elements to end of the list.

## Syntax

```py
list.append(iterable)
```

This will place passed in iterable (list, tuple, or string) as new elements at the very end of the list.

`.append()` does not return any value.

## Examples

To add `grocery2` to the end of the `grocery1` list:

```codebyte/python
grocery1 = ['blueberries', 'eggs', 'artichoke']
grocery2 = ['milk', 'cookies']

grocery1.extend(grocery2)

print(grocery1)
# Output: ['blueberries', 'eggs', 'artichoke', 'milk', 'cookies']
```

It works for any other type of iterables:

```codebyte/python
orders = ['daisies', 'periwinkle']
points = (1, 4, 5, 9)

orders.extend(1, 4, 5, 9)

print(orders)
# Output: ['daisies', 'periwinkle', 1, 4, 5, 9]
```
