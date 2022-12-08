---
Title: 'tuple()'
Description: 'Creates a new tuple.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Tuples'
  - 'Data Structures'
  - 'Iterators'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The built-in **`tuple()`** function creates a new [tuple](https://www.codecademy.com/resources/docs/python/tuples).

## Syntax

```pseudo
tuple_instance(iterable)
```

The `iterable` parameter is optional and is an object that can be looped over, such as a [list](https://www.codecademy.com/resources/docs/python/lists) or [string](https://www.codecademy.com/resources/docs/python/strings). If an `iterable` is not provided, an empty tuple is created.

## Codebyte Example

The following is an example of how the `tuple()` function is used to create a new tuple from a list:

```codebyte/python
my_list = [1, 2, 3]

my_tuple = tuple(my_list)

print(my_tuple)
```
