---
Title: '.issuperset()'
Description: 'Checks whether all elements in specified set exist in the original set.'
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

The **`.issuperset()`** method returns `True` if all the items in the specified set exists in the original set,otherwise it returns `False`.

## Syntax

```pseudo
set1.issuperset(set2)
```

## Another Syntax

```pseudo
set1 >= set2
```

- `set1`: The set whose elements are being checked for existence within `set2`.
- `set2`: The set being searched for the presence of elements from the `set1`.

## Example

The following example demonstrates the usage of the `.issuperset()` method:

```py
set_A ={"pink", "yellow", "red", "blue", "green"}
set_B ={"red", "blue", "green"} 

print(set_A.issuperset(set_B))
```

This would print `True`, because `set_B` contains all of the elements in `set_A`. It produces the following output:

```shell
True
```

## Codebyte Example

```codebyte/python
x = {"eagle", "dog", "mouse", "fish", "gorilla", "cat"}
y = {"cat", "dog", "fish"}
z = {"apple", "banana", "cherry"}

print(x.issuperset(y))
print(x >= z)
```
