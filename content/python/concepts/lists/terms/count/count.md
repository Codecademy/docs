---
Title: '.count()'
Description: 'Searches a list for a particular item and returns the number of matching entries found.'
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

Searches a list for a particular item and returns the number of matching entries found.

## Syntax

```py
list.count(value)
```

The `.count()` method has a single parameter:

- `value`: Can be any type (string, number, list, tuple, etc.). The value to search for... (Required)

## Example 1

To count the number of `'pen'` within the `backpack` list:

```codebyte/python
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']

numPen = backpack.count('pen')

print(numPen)
# Output: 3
```

## Example 2

To count the numbers of `77, 99, 51` within the `my_list` list:

```codebyte/python
my_list = [77, 56, 43, 99, 99, 82, 77, 51, 99, 16] 

length_77 = mylist.count(77) 
length_99 = mylist.count(99) 
length_51 = mylist.count(51) 

print('77 occurred', length_77, 'times in the list.') 
print('99 occurred', length_99, 'times in the list.') 
print('51 occurred', length_51, 'time in the list.')
```

This results in the following output:

```shell
77 occurred 2 times in the list. 
99 occurred 3 times in the list. 
51 occurred 1 time in the list.
```
