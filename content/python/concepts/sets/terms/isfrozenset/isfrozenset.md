---
Title: '.frozenset()'
Description: 'Returns a new set or frozenset object whose elements are picked from an iterable'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Data Types'
  - 'Class'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.frozenset()`** is an immutable implementation of `set`. After its creation, the elements cannot be changed, added, or removed and thus, it is given the name `frozenset`.

`frozenset()` is hashable, it can be used as a key in a dictionary.

## Syntax

```pseudo
frozenset(iterable)
```

- `frozenset`: The `frozenset` created to store the unique values from `iterable`.
- `iterable`: The container having the values to be stord in `frozenset`.

## Example 

```py 
fs1 = frozenset([1, 2, 3, 4])
fs2 = frozenset({5, 6, 7, 8})
print(fs1)
print(fs2)
```

This would print a list converted into a frozenset on the first line with the output `frozenset({1, 2, 3, 4})` and a set converted into a frozenset on the second line with the output `frozenset({8, 5, 6, 7})`. 

```shell
frozenset({1, 2, 3, 4})
frozenset({8, 5, 6, 7})
```

## Codebyte Example

```codebyte/python
odd = frozenset([1, 3, 5])
even = frozenset([2, 4, 6])

print(odd.union(even))
print(odd.intersection(even)) 
print(odd.issubset(even))
```
