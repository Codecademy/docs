---
Title: 'dict()'
Description: 'Initializes a new dictionary from mapping n-number of object (key, value) pairs.'
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

Initializes a new dictionary from mapping n-number of object (key, value) pairs.

## Syntax

```py
dict(key-value pairs)
```

## Example 1

Use `dict()` to create the `my_dict` dictionary from a list of tuples:

```codebyte/python
my_dict = dict([('a', 1), ('b', 2), ('c',3)])

print(my_dict)
```

## Example 2

Use `dict()` to create the `my_dict` dictionary from keyword arguments:

```codebyte/python
my_dict = dict(a = 1, b = 2, c = 3)

print(my_dict)
```

## Example 3

Use `dict()` to create the `d` dictionary using list comprehension:

```codebyte/python
iterable = [('a', 1), ('b', 2), ('c', 3)]

d = {}
for k, v in iterable:
  d[k] = v

print(d)
```

## Example 4

Use `dict()` to create the new empty dictionary `d`:

```codebyte/python
d = dict()

print(d)
```
