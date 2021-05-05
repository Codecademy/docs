---
Title: ".remove()"
Subjects:
  - "data science"
  - "computer science"
Tags:
  - "lists"
  - "methods"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/data-science"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition 

Remove an item from a list by passing in the value of the item to be removed as an argument.

## Syntax

```py
list.remove(item)
```

In the case where two or more elements in the list have the same value, the first occurrence of the element is removed.

## Example

To pop the element `'Discrete Math'` from the `courses` list:

```py
shopping_list = ['Sonny', 'Aaron', 'Kip', 'Lillian']
 
# Removes the first occurance of 'Kip'
shopping_line.remove('Kip')

print(shopping_line)
# Output: ['Sonny', 'Aaron', 'Lillian']
```
