---
Title: ".pop()"
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

Remove an item from a list while also returning it.

## Syntax

```py
list.insert(index)
```

It accepts one optional input which is the index of the element to remove. If no index is provided, then the last element in the list will be removed and returned.

## Example

To add an item at index 2 of `store_line` list:

```py
courses = ["Into to Programming", "Data Structures & Algorithms", "Databases", "Discrete Math", "Computer Architecture"]

# Pop the element "Discrete Math"
courses.pop(3)

print(cs_topics)
# Output: ["Into to Programming", "Data Structures & Algorithms", "Databases", "Computer Architecture"]

# Pop the last element
courses.pop()

print(courses)
# Output: ["Into to Programming", "Data Structures & Algorithms", "Databases"]

```
