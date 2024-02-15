---
Title: 'filter()'
Description: 'Returns a filter object that applies a function to each item in an iterable and returns the values that are True.'
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

The `filter()` function returns a filter object that contains values from an iterable. If a function returns `True` for a given item's value, that value will be included in the returned object.

## Syntax

```pseudo
filter(func_name, iterable)
```

The `func_name` is the function to be applied to the iterable and can be a lambda function or the name of any defined function. The `iterable` contains the items, such as a list, the function will act on.

In the examples below `list()` is applied to the filter expression to return a new list.

## Example

The following example uses `filter()` to return all the odd values in the `nums` list:

```py
nums = [33, 99, 63, 29, 25, 96, 61, 25, 22, 89, 90, 90]

def odds_test(n):
    n = True if n % 2 == 1 else False
    return n

print(list(filter(odds_test, nums)))
# Output: [33, 99, 63, 29, 25, 61, 25, 89]
```

## Codebyte Example

`filter()` can be used to return only the strings that are all lowercase:

```codebyte/python
some_strings = ['Learn','How', 'to', 'Code', 'Online']

filtered = list(filter(lambda x: x.islower(), some_strings))

print(filtered)
```
