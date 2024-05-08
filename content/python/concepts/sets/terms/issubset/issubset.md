---
Title: ".issubset()"
Description: "Returns True if all elements in a set exist in another; otherwise, it returns False."
Subjects:
  - "Code Foundations"
  - "Computer Science"
Tags:
  - "Collections"
  - "Functions"
  - "Methods"
  - "Sets"
CatalogContent:
  - "learn-python-3"
  - "paths/computer-science"
---

The **`issubset()`** method returns True if all of the elements in a set exist within another given set. If all of the elements are not contained within the given set, it will return False instead.

## Syntax

```pseudo
set_A.issubset(set_B)

# Alternatively, a shorter syntax version can be used to do the same thing.
set_A <= set_B
```

## Example

```py
set_A = {"red", "blue", "green"}
set_B = {"pink", "yellow", "red", "blue", "green"}

print(set_A.issubset(set_B))
```

This would print `True`, because `set_B` contains all of the elements in `set_B`:

```py
True
```

## Codebyte Example

```codebyte/python
x = {"cat", "dog", "fish"}
y = {"eagle", "dog", "mouse", "fish", "gorilla", "cat"}
z = {"apple", "banana", "cherry"}

print(x.issubset(y)) # True, because y contains all of the elements in x.
print(x.issubset(z)) # False, because z doesn't contain all of the elements in x.
```
