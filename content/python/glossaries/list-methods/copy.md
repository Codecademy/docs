---
Title: ".copy()"
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

Returns a shallow copy of a list.

## Syntax

```py
list.copy()
```

The `.copy()` method has no parameters.

## Example

A Python list can be copied using the `=` assignment operator:

```py
old_list = [1, 2, 3, 4]
​new_list = old_list
```

The problem with copying lists this way is that if you modify `new_list`, `old_list` is also modified. It is because the new list is referencing or pointing to the same `old_list` object.

However, if you need the original list unchanged when the new list is modified, you can use the `.copy()` method.

Copying the `orders` list:

```codebyte/python
orders = ['daisies', 'periwinkle']

new_orders = orders.copy()

print(new_orders)
# Output: ['daisies', 'periwinkle']
```

## Shallow Copy

 Shallow copy means if we modify any of the nested list elements, changes are reflected in both the list as they point to the same reference. Whereas in deep copy, when we add an element in any of the lists, only that list is modified.