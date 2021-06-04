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
list2 = list1.copy()
```

The `.copy()` method has no parameters.

## Example

A Python list can be copied using the `=` assignment operator:

```py
list1 = [1, 2, 3, 4]
list2 = list1

print(list1) # Ouptut: [1, 2, 3, 4]
print(list2) # Ouptut: [1, 2, 3, 4]
```

However, if you modify `list2`, `list1` is also modified. This is because the new list is pointing to the same `list1` object.

If you need the original list unchanged when the new list is modified, you can use the `.copy()` method.

Copying the `orders` list:

```codebyte/python
orders = ['daisies', 'periwinkle']

new_orders = orders.copy()

print(new_orders)
# Output: ['daisies', 'periwinkle']
```

## Shallow Copy

Shallow copy means if we modify any of the nested list elements, changes are reflected in both the list as they point to the same reference. Whereas in deep copy, when we add an element in any of the lists, only that list is modified.
