---
Title: '.pop()'
Description: 'Removes and returns a randomly chosen element from the set.'
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

The following example demonstrates the usage of `.pop()` method:

```py
set1 = {"Alpha", "Beta", "Gamma"}

print(set1.pop())

print(set1)
```

The output of `.pop()` will vary each time it is executed since the method removes and returns a random element from the set. Here is one potential output of this program where `Beta` is randomly selected to be removed from `set1`:

```shell
Beta
{'Gamma', 'Alpha'}
```

## Codebyte Example

Run the following code to understand how the `.pop()` method works:

```codebyte/python
set2 = {"Alpha", "Beta", "Gamma", "Delta", "Epsilon"}

print(set2.pop())

print(set2)

print(set2.pop())

print(set2)
```
