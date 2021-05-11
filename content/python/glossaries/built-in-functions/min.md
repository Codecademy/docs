---
Title: "min()"
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Methods"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

## Definition

The built-in `min()` function returns the lowest value from values given or an iterable.

## Syntax

```py
min(iterable)
```

## Example 1

Use `min()` to return the lowest value from the `shoe_sizes` list:

```codebyte/python
shoe_sizes = [6.5, 10.5, 8, 8, 13.5, 12, 7.5, 5]

print(min(shoe_sizes))
```

## Example 2

Use `min()` to return the lowest value from the values `"Tom"`, `"Jerry"`, `"Spike"`, `"Tyke"`:
```codebyte/python
lowest_value_name = min("Tom", "Jerry", "Spike", "Tyke")

print(lowest_value_name)
```
