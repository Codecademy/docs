---
Title: 'filter()'
Description: 'A built-in function that applies a function to each item in an iterable and returns the values that are true.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

'A built-in function that applies a function to each item in an interable and returns the values that are true. The output of `filter()` is a filter object, in the examples below `list()` is applied to the filter expressions to return a new list.'

## Syntax

```py
filter(func_name, iterable)
```

## Example 1

Use `filter()` to return all the odd values in the following list:

```codebyte/python
nums = [33, 99, 63, 29, 25, 96, 61, 25, 22, 89, 90, 90]

print(list(filter(lambda x: x % 2 != 0, nums)))

# Output: [33, 99, 63, 29, 25, 61, 25, 89]```

## Example 2

Use `filter()` to return only the strings that are all lowercase:

```codebyte/python
some_strings = ['Learn','How', 'to', 'Code', 'Online']

list(filter(lambda x: x.islower(), some_strings))

# Output: ['to']```
