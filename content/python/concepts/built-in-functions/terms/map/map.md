---
Title: 'map()'
Description: 'A built-in function that takes a function and applies it to every item in an iterable.'
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

'A built-in function that takes a function and applies it to every item in an iterable. The output of `map()` is a map object, in the examples below `list()` is applied to the map expression to return a new list.'

## Syntax

```py
map(func_name, iterable)
```

## Example 1

Use `map()` to return the length of each string in the following list:

```codebyte/python
some_strings = ['learn', 'how', 'to', 'code', 'online']

print(list(map(len, some_strings))

# Output: [5, 3, 2, 4, 6]
```

## Example 2

Use `map()` to change all the list items to integers:

```codebyte/python
a_list = [1.6, 5.4,12.0]

print(list(map(lambda x: int(x), a_list))

# Output: [1, 5, 12]
```
