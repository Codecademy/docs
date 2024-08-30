---
Title: '.isdisjoint()'
Description: 'Checks whether two sets contain a common element in them.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Collections'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.isdisjoint()`** method checks whether two [sets](https://www.codecademy.com/resources/docs/python/sets) have any common elements. If no common elements exist, it returns `True`; otherwise, it returns `False`.

## Syntax

```pseudo
set1.isdisjoint(set2)
```

- `set1`: Represents the set to be compared.
- `set2`: Represents the second set to be compared with `set1` to check for common elements.

## Example

The below example shows the usage of the `.isdisjoint()` method:

```py
# Creating three sets
set1 = {1, 2, 3}
set2 = {4, 5, 6}
set3 = {3, 4, 5}

# Checking if 'set1' and 'set2' are disjoint
print(set1.isdisjoint(set2))

# Checking if 'set1' and 'set3' are disjoint
print(set1.isdisjoint(set3))
```

The above code produces the following output:

```shell
True
False
```

In the above example, the `.isdisjoint()` method returns `True` for `set1` and `set2` since they have no elements in common and `False` for `set1` and `set3` since they share the element `3`.

## Codebyte Example

Below is a code byte example demonstrating the use of the `.isdisjoint()` method:

```codebyte/python
set_a = {'a', 'b', 'c'}
set_b = {'x', 'y', 'z'}
set_c = {'b', 'y'}

print(set_a.isdisjoint(set_b))

print(set_a.isdisjoint(set_c))
```
