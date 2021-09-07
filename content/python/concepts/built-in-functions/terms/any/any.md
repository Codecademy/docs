---
Title: 'any()'
Description: 'Takes in an iterable object such as a list or tuple and returns True if any of the elements in the iterable are True. If none of the elements in the iterable are True, returns False.'
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

The `any()` built-in function takes in an iterable object such as a list or tuple and returns `True` if any of the elements in the iterable are true. If none of the elements present in the iterable are true, `any()` will return `False`.

## Syntax

```py
any(iterable)
```

## Example 1

Use `any()` to check if there is a `True` statement in a list `[True, 0, False]`:

```python
print(any([True, 0, False]))
# Output: True
```

## Example 2

Use `any()` to check if there is a `True` statement in a dictionary:

```python
my_dict = {1 : "On"}

print(any(my_dict))
# Output: True
```

## The Function

The `any()` built-in function is essentially:

```python
def any(iterable):
  for element in iterable:
    if element:
      return True
  return False
```

## Codebyte Example

```codebyte/py
# List
my_list = [0, 2, False]
print(any(my_list))

# Dictionary
my_dict = {0 : "Off"}
print(any(my_dict))
```
