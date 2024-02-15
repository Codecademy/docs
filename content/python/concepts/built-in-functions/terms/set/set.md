---
Title: 'set()'
Description: 'Returns a new set based on an optional iterable object such as a list.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The built-in `set()` function returns a new [set](https://www.codecademy.com/resources/docs/python/sets) based on an optional iterable object such as a [list](https://www.codecademy.com/resources/docs/python/lists)

## Syntax

```pseudo
set(iterable)
```

The `iterable` parameter is optional. If nothing is passed, an empty set is created.

## Example

```py
my_set = set()

print(my_set)
print(type(my_set))

my_set = set(["A", "B", "C"])
print(my_set)
```

The following output will look like this:

```shell
set()
<class 'set'>
{'C', 'B', 'A'}
```

## Codebyte Example

In the example below, the seven root notes of a musical scale are represented in a set:

```codebyte/python
musical_notes = ["A", "B", "C", "D", "E", "F", "G"]

print(set(musical_notes))
```
