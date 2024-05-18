---
Title: '.difference_update()'
Description: 'Modify a given set of objects to be unique when compared to other sets.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.difference_unique()`** method modifies a given set of objects to be unique when compared to another set or sets. 

Things to note about this method:
- the original set is modified by discarding any of the content that appears in the sets it is compared with
- the return value is `None`
- as no new set is created, this method is more resource-efficient than using the [.difference()](https://www.codecademy.com/resources/docs/python/sets/difference) method, which returns a new set

## Syntax

The following syntaxes can be used:

```pseudo
set1.difference_update(set2, set3, setN)

set1 -= set2 | set3 | setN
```

- The `.difference_update()` method can be called directly against `set1` with multiple sets passed as arguments.
- Optionally, the `-=` [operator](https://www.codecademy.com/resources/docs/python/operators) can be used between the original and the comparative sets where it will produce the same result as the `.difference_update()` method.

## Example

This example calls the `.difference_update()` method to find out which ingredients need to be bought for the `salad`:

```py
salad = {'lettuce', 'beetroot', 'walnuts', 'cheese', 'seeds'}
larder = {'tomatoes', 'lettuce', 'cheese', 'seeds', 'celery'}

salad.difference_update(larder)
```

The set `salad` has been modified and when it is printed it displays only the items that are not in `larder`:

```shell
{'beetroot', 'walnuts'}
```

## Codebyte Example

In the example, we went shopping in a couple of our favorite shops but forgot to take a shopping list. This time we use the -= operator to see if we bought everything needed for the `salad`:

```codebyte/python
salad = set(['lettuce', 'beetroot', 'walnuts', 'cheese', 'seeds'])
larder = set(['tomatoes', 'lettuce', 'cheese', 'seeds', 'celery'])
shopping1 = set(['scallions', 'beetroot'])
shopping2 = set(['stilton', 'green beans'])

salad -= larder | shopping1 | shopping2

print(salad)
```