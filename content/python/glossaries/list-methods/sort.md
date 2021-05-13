---
Title: ".sort()"
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

Sort the contents of the list it is called on.

## Syntax

```py
list.sort()
```

Numerical lists will be sorted in ascending order, and lists of strings will be sorted into alphabetical order. It modifies the original list, and has no return value.

## Example

To sort a list called `exampleList`:

```codebyte/python
exampleList = [4, 2, 1, 3]

exampleList.sort()

print(exampleList)
# Output: [1, 2, 3, 4]
```