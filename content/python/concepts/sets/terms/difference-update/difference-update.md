---
Title: '.difference_update()'
Description: 'Modifies a set by removing all elements present in another set.'
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

In Python, the **`.difference_update()`** method modifies a set by removing all elements present in another set, keeping only the ones that are not found in the other one. Unlike the [`.difference()`](https://www.codecademy.com/resources/docs/python/sets/difference) method, which returns a new set, `.difference_update()` changes the original set in place.

## Syntax

```pseudo
set.difference_update(set1, set2, ..., setN)
```

- `set`: The set to be modified.
- `set1, set2, ..., setN`: The set(s) whose elements are to be removed from the original set.

## Example

In this example, the set `salad` is modified using the `.difference_update()` method to remove elements also present in the `larder` set. After the operation, the `salad` set will only contain elements not found in the `larder` set:

```py
salad = {'lettuce', 'beetroot', 'walnuts', 'cheese', 'seeds'}
larder = {'tomatoes', 'lettuce', 'cheese', 'seeds', 'celery'}

salad.difference_update(larder)
print(salad)
```

The above example produces the following output:

```shell
{'walnuts', 'beetroot'}
```

## Codebyte Example

In the below codebyte example, the `salad` set has elements removed if they are found in `larder`, `shopping1`, or `shopping2` sets, leaving unique elements in the `salad` set:

```codebyte/python
salad = set(['lettuce', 'beetroot', 'walnuts', 'cheese', 'seeds'])
larder = set(['tomatoes', 'lettuce', 'cheese', 'seeds', 'celery'])
shopping1 = set(['scallions', 'beetroot'])
shopping2 = set(['stilton', 'green beans'])

salad.difference_update(larder, shopping1, shopping2)

print(salad)
```
