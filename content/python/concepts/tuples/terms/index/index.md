---
Title: '.index()'
Description: 'Returns the index of the first occurrence of a specific value in a tuple.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Index'
  - 'Tuples'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.index()`** method returns the index of the first occurrence of a specific value in a tuple. Otherwise, an [exception](https://www.codecademy.com/resources/docs/python/errors) is raised.

## Syntax

```pseudo
tuple_instance.index(value)
```

The `value` is required in order for the `.index()` to search the `tuple_instance`.

## Example

The following is an example of the `.index()` method:

```py
my_tuple = ("I'm", "over", "here")

print(my_tuple.index("here"))
# Output: 2
```

## Codebyte Example

The following example throws a `ValueError` because the specified value does not exist in the tuple (values passed to `.index()` are case-sensitive):

```codebyte/python
my_tuple = ("Here", "we", "are")

print(my_tuple.index("here"))
```
