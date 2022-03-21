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

The `filter()` function returns a filter object that contains values filtered from an iterable where a function returns `True` for a given item's value.

## Syntax

```pseudo
filter(func_name, iterable)
```

The `func_name` is the function to be applied to the iterable and can be a lambda function or the name of any defined function. The `iterable` contains the items, such as a list, the function will act on.

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

list(filter(lambda x: x.islower(), some_strings))
```
