---
Title: '.copy()'
Description: 'Returns a shallow copy of a list.'
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

Returns a shallow copy of a list.

## Syntax

```py
list2 = list1.copy()
```

The `.copy()` method has no parameters.

## Example

A Python list can be copied using the `=` assignment operator:

```py
list1 = [1, 2, 3, 4]
list2 = list1

print(list1) # Output: [1, 2, 3, 4]
print(list2) # Output: [1, 2, 3, 4]
```

However, if you modify `list2`, `list1` is also modified. This is because `list2` is actually pointing to the `list1` object.

If you want the original list unchanged when the new list is modified, you can use the `.copy()` method.

Copying the `orders` list using `.copy()` method:

```codebyte/python
orders = ['daisies', 'periwinkle']

new_orders = orders.copy()

print(new_orders)
# Output: ['daisies', 'periwinkle']
```

Now if you change `new_orders`, `orders` stays the same.

## Shallow Copy

If you are copying nested lists, shallow copy means if you modify any of the new nested list elements, changes are reflected in both the new and old lists as they point to the same reference. Whereas in deep copy, if you modify any of the new nested list elements, only the new list changes.
