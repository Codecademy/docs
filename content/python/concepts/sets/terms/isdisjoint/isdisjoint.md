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

The **`.isdisjoint()`** method checks whether two [sets](https://www.codecademy.com/resources/docs/python/sets) contains a common Element.If no common Element Exists then **`.isdisjoint()`** method returns `True` otherwise `False`.

## Syntax

```pseudo
set.isdisjoint(other_set)
```

- `set`: The set to be compared.
- `other_set`: The second set to compare with.

## Example

The below example shows the usage of the **`.isdisjoint()`** method:

```py
# Creating Three sets
set1 = {1, 2, 3}
set2 = {4, 5, 6}
set3 = {3, 4, 5}

# Checking if set1 and set2 are disjoint
print(set1.isdisjoint(set2))  # Output: True

# Checking if set1 and set3 are disjoint
print(set1.isdisjoint(set3))  # Output: False
```

The above code produces the following output:

```shell
True
False
```

In the above Example, the **`.isdisjoint()`** method returns `True` for set1 and set2 since they have no elements in common, and `False` for set1 and set3 since they share the element `3`.

## Codebyte Example

Below is a codebyte example demonstrating the use of the **`.isdisjoint()`** method:

```codebyte/python
set_a = {'a', 'b', 'c'}
set_b = {'x', 'y', 'z'}
set_c = {'b', 'y'}

print(set_a.isdisjoint(set_b))
# Output: True
print(set_a.isdisjoint(set_c))
# Output: False
```
