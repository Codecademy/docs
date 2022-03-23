---
Title: 'map()'
Description: 'Returns an iterator that takes a function and applies it to every item in an iterable.'
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

The `map()` built-in function accepts a function and applies it to every item in an iterable. It outputs a map object.

## Syntax

```pseudo
map(func_name, iterable)
```

The `func_name` is the function to be applied to the iterable and can be a lambda function or the name of any defined function. The `iterable`, such as a list, contains the items the function will act on.

In the examples below `list()` is applied to the map expression to return a new list.

## Example

The following example uses `map()` to return the length of each string in the list `some_strings`:

```py
some_strings = ['learn', 'how', 'to', 'code', 'online']

print(list(map(len, some_strings)))
# Output: [5, 3, 2, 4, 6]
```

## Codebyte Example

The `map()` function can be used to transform all the list items to integers:

```codebyte/python
a_list = [1.6, 5.4,12.0]

print(list(map(lambda x: int(x), a_list)))
```
