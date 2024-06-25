---
Title: '.pop()'
Description: 'Removes and returns a random element from a set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
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

> **Note:** If the set is empty, calling `.pop()` will raise a `TypeError` since there are no elements to remove from the set.

## Syntax

```pseudo
set.pop()
```
- `set`: The set from which an element will be removed.

## Example

The following example demonstrates a usage of the `.pop()` method:

```py
set = {"Alpha", "Beta", "Gamma"}

print(set.pop())

print(set)
```

The output of `.pop()` will vary each time it is executed since the method removes and returns a random element from the set. Here is one potential output of this program where `Beta` is randomly selected to be removed from `set`:


```shell
Beta
{'Gamma', 'Alpha'}
```

## Codebyte Example

Run the following code to understand how the `.pop()` method works:

```codebyte/python
set = {"Alpha", "Beta", "Gamma", "Delta", "Epsilon"}

print(set.pop())

print(set)

print(set.pop())

print(set)
```
