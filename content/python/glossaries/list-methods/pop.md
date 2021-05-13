---
Title: ".pop()"
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

Remove an item from a list while also returning it.

## Syntax

```py
list.pop(index)
```

It accepts one optional input which is the index of the element to remove. If no index is provided, then the last element in the list will be removed and returned.

## Example

To pop the element `'Discrete Math'` from the `courses` list:

```codebyte/python
courses = ['Into to Programming', 'Data Structures & Algorithms', 'Databases', 'Discrete Math', 'Computer Architecture']

courses.pop(3)

print(courses)
# Output: ['Into to Programming', 'Data Structures & Algorithms', 'Databases', 'Computer Architecture']
```

## Example 2

If no index is provided:

```codebyte/python
courses = ['Into to Programming', 'Data Structures & Algorithms', 'Databases', 'Discrete Math', 'Computer Architecture']

courses.pop()

print(courses)
# Output: ['Into to Programming', 'Data Structures & Algorithms', 'Databases', 'Discrete Math']
```