---
Title: .count()
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
  - "Functions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---

## Definition

Takes in a list of values of any data type, and returns the number of times(count) a particular value is present within the list.

## Syntax

```py
list.count()
```

## Example 1

Use `count()` to count the number of occurrences of the string `"cat"` in the `pets` list:

```codebyte/python
pets = ['fish', 'dog', 'dog', 'turtle', 'cat', 'cat', 'cat']

print(pets.count('cat'))
```

## Example 2

Use `count()` to count the number of occurrences of the integer `3` in the `treats_per_pet` list:

```codebyte/python
treats_per_pet = [1, 3, 3, 1.5, 2, 2, 2]

x = treats_per_pet.count(3)
print(x)
```
