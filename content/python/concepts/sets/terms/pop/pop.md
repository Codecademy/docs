---
Title: '.pop()'
Description: 'Removes a random element of a set and returns the removed element.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.pop()`** method randomly removes an element from a [set](https://www.codecademy.com/resources/docs/python/sets), and returns the element that was removed.

> **Note:** If the set is empty, calling `.pop()` will cause an error.

## Syntax

```pseudo
set.pop()
```

## Example

The following example demonstrates a usage of the `.pop()` method:

```py
set = {"Alpha", "Beta", "Gamma"}

print(set.pop())

print(set)
```

Here is one potential output of this program where `Beta` is randomly selected to be removed from `set`:

```shell
Beta
{'Gamma', 'Alpha'}
```

## Codebyte Example (if applicable)

In this codebyte example, the `.pop()` method randomly removes 2 elements from the set:

```codebyte/python
set = {"Alpha", "Beta", "Gamma", "Delta", "Epsilon"}

print(set.pop())

print(set)

print(set.pop())

print(set)
```
