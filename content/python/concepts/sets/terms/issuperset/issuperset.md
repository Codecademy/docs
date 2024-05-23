---
Title: '.issuperset()'
Description: 'Checks whether all elements of the specified set exist in the original set.'
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

In Python, the **`.issuperset()`** method is used to determine if the original set contains all elements of the specified set. It returns `True` if every element of the specified set is also an element of the original set, and `False` otherwise.

## Syntax

```pseudo
set1.issuperset(set2)
```

- `set1`: The set that is being examined to determine if its elements are all present in `set2`.  
- `set2`: The set that is being checked to see if it contains all elements from `set1`.

> **Note**: In Python, the `>=` operator also can be used to check if one set is a superset of another, its functioning is equivalent to the `.issuperset()` method.

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
