---
Title: '.issubset()'
Description: 'Checks whether all elements in one set exist within another specified set.'
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

The **`.issubset()`** method checks whether all elements in one set exist within another specified set. It returns `True` if this condition is met; otherwise, it returns `False`.

## Syntax

```pseudo
set1.issubset(set2)
```

- `set1`: The set whose elements are being checked for existence within `set2`.
- `set2`: The set being searched for the presence of elements from the `set1`.

## Example

The following example demonstrate the usage of `.issubset()` method:

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
