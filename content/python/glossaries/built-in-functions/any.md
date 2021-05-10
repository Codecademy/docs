---
Title: "Python Built-In Functions: `any()`"
Subjects:
  - "Language Fluency"
  - "Code Foundations"
Tags:
  - "Function"
  - "Methods"
  - "Strings"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/analyze-data-with-python"
---

## Definition
***
The built-in `any()` function takes in an iterable object such as a list or tuple and returns `True` if any of the elements in the iterable are true. If none of the elements present in the iterable are true, `any()` will return `False`.

## Syntax
***
```py
any(iterable)
```

## Example 1
***
Use `any()` to check if there is a `True` statement in a list:
```codebyte/python
print(any([True, 1, False, 0]))
```

## Example 2
***
Use `any()` to check if there is a `True` statement in a list:
```codebyte/python
print(any([False, 0]))
```

## Example 3
***
Use `any()` to check if there is a `True` statement in a dictionary:
```codebyte/python
my_dict = {1 : "On"}
print(any(my_dict))
```

## Example 4
***
Use `any()` to check if there is a `True` statement in a dictionary:
```codebyte/python
my_dict = {0 : "Off"}
print(any(my_dict))
```
