---
Title: '.issubset()'
Description: 'Returns True if all elements in a set exist in another; otherwise, it returns False.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.issubset()`** method returns `True` if all elements in a set exist within another specified set. If any elements are not contained within the specified set, it returns `False`.

## Syntax

```pseudo
set.issubset(set1)
```

- set: The set whose elements are being checked for existence within `set1`.
- set1: The set being searched for the presence of elements from the `set`.

## Example

```py
set_A = {"red", "blue", "green"}
set_B = {"pink", "yellow", "red", "blue", "green"}

print(set_A.issubset(set_B))
```

This would print `True`, because `set_B` contains all of the elements in `set_A`. It produces the following output:

```shell
True
```

## Codebyte Example

```codebyte/python
x = {"cat", "dog", "fish"}
y = {"eagle", "dog", "mouse", "fish", "gorilla", "cat"}
z = {"apple", "banana", "cherry"}

print(x.issubset(y))
print(x.issubset(z))
```
