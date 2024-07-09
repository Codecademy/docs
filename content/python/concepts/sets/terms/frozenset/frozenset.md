---
Title: 'frozenset()'
Description: 'Returns a new set or frozenset object whose elements are picked from a given iterable.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Classes'
  - 'Collections'
  - 'Data Types'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`frozenset()`** [function](https://www.codecademy.com/resources/docs/python/functions) is an immutable implementation of a set object. After its creation, the elements can't be changed, added, or removed and thus, it is given the name `frozenset()`. This function is hashable and it can be used as a key in a [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries).

## Syntax

```pseudo
frozenset(iterable)
```

- `iterable`: The container having the values to be stored in the frozenset.

## Example

The below example demonstrates the use of the `frozenset()` function:

```py
fs1 = frozenset([1, 2, 3, 4])
fs2 = frozenset({5, 6, 7, 8})

print(fs1)
print(fs2)
```

The above code produces the following output:

```shell
frozenset({1, 2, 3, 4})
frozenset({8, 5, 6, 7})
```

## Codebyte Example

Here is a codebyte example showing the usage of the `frozenset()` function:

```codebyte/python
odd = frozenset([1, 3, 5])
even = frozenset([2, 4, 6])

print(odd.union(even))
print(odd.intersection(even))
print(odd.issubset(even))
```
