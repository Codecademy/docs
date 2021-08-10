---
Title: "abs()"
Description: "Takes in a numeric data type such as int or float and returns the absolute value of the argument."
Subjects:
  - "Computer Science"
  - "Data Science"
Tags:
  - "Functions"
  - "Methods"
  - "Strings"
CatalogContent:
  - "learn-python-3"
  - "paths/computer-science"
  - "paths/data-science"
---



Takes in a numeric data type such as `int` or `float` and returns the absolute value of the argument.

## Syntax

```py
abs(n)
```

## Example 1

Use `abs()` to return the absolute value of `-6.5`:

```py
print(abs(-6.5))
# Output: 6.5
```

## Example 2

Use `abs()` to return the absolute value of the `numbers` list:

```codebyte/python
numbers = [-19.2, 27.3, 48, -115, 302.7, -421, -2011]

print([abs(number) for number in numbers])
```
