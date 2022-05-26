---
Title: 'frozenset()'
Description: 'Returns a new frozenset using an optional iterable object such as a string or list.'
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

The built-in `frozenset()` function returns a new frozenset using an optional iterable object such as a [string](https://www.codecademy.com/resources/docs/python/strings) or [list](https://www.codecademy.com/resources/docs/python/lists).

Frozensets are a specific type of [set](https://www.codecademy.com/resources/docs/python/sets) that are immutable. Like [tuples](https://www.codecademy.com/resources/docs/python/tuples), their contents are frozen and cannot be changed after creation.

## Syntax

```pseudo
frozenset(iterable)
```

The `iterable` parameter is optional and must be a hashable object. If nothing is passed into the `frozenset()` function, an empty frozenset is created.

## Example

In the following example, a frozenset of `frozen_objects` is created:

```py
frozen_objects = frozenset(['ice cube', 'glacier', 'frozen_set'])

print(frozen_objects)
print(type(frozen_objects))
```

The following output will look like this:

```shell
frozenset({'glacier', 'ice cube', 'frozen_set'})
<class 'frozenset'>
```

## Codebyte Example

In the example below, the `frozenset()` function is used to create a new frozenset called `continents`:

```codebyte/python
continents = frozenset(["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"])

print(continents)
```
