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

```pseudo
any(iterable)
```

The `iterable` is any sequence or collection that can be traversed, such as a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) or [list](https://www.codecademy.com/resources/docs/python/list).

The inside of the pseudocode can be broken down in the following way:

```pseudo
def any(iterable):
  for element in iterable:
    if element:
      return True
  return False
```

Inside the loop, at the first instance of an `element` existing in the `iterable`, execution will stop and `True` will be returned. If the end of the loop is reached and the element is not found, `False` is returned instead.

## Example

Use `any()` to check if there is a `True` statement in a list `[True, 0, False]`:

```py
print(any([True, 0, False]))
print(any({1 : "On"}))
```

The following output will be printed to the shell:

```shell
True
True
```

## Codebyte Example

The following example calls the `any()` function with both a list `my_list` and a dictionary `my_dict`:

```codebyte/python
my_list = [0, 2, False]
print(any(my_list))

my_dict = {0 : "Off"}
print(any(my_dict))
```
