---
Title: ".append()"
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

Adds an item to end of the list.

## Syntax

```py
list.append(item)
```

This will place the object passed in as a new element at the very end of the list. Printing the list afterwards will visually show the appended value. 

This `.append()` method is not to be confused with returning an entirely new list with the passed object.

## Example

To add `'tulips'` to the end of the `orders` list:

```codebyte/python
orders = ['daisies', 'periwinkle']

orders.append('tulips')

print(orders)
# Output: ['daisies', 'periwinkle', 'tulips']
```
