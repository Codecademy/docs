---
Title: ".remove()"
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

Remove an item from a list by passing in the value of the item to be removed as an argument.

## Syntax

```py
list.remove(item)
```

In the case where two or more elements in the list have the same value, the first occurrence of the element is removed.

## Example

To remove the first occurance of `'eggs'`:

```codebyte/python
grocery_list = ['blueberries', 'mochi', 'eggs', 'chocolate']
 
grocery_list.remove('eggs')

print(grocery_list)
# Output: ['blueberries', 'mochi', 'chocolate']
```