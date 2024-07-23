---
Title: '.comb()'
Description: 'Calculates the number of ways to choose `k` items from `n` items without regard to order or repetition.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Functions'
  - 'Integers'
  - 'Math'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.comb()`** [function](https://www.codecademy.com/resources/docs/python/functions) from the `math` [module](https://www.codecademy.com/resources/docs/python/modules) calculates the number of ways to choose `k` items from `n` items without regard to order or repetition.

## Syntax

```pseudo
math.comb(n, k)
```

- `n`: A non-negative integer that represents the total number of items.
- `k`: A non-negative integer that represents the number of items to choose.

The result returned is a non-negative integer representing the number of unordered choices that can be made to select `k` items from `n` items.

## Example

The following example shows the use of the `.comb()` function:

```py
import math

n = 10
k = 4

no_of_choices = math.comb(n,k)
print("Total ways to choose: ", no_of_choices)
```

This bit of code gives out the following output:

```shell
Total ways to choose: 210
```

## Codebyte Example

The below codebyte example uses the `.comb()` function in order to find out in how many ways can someone choose `k` number of flowers from `n` number of flowers:

```codebyte/python
import math

n = 20  # Total number of flowers
k = 2  # Number of flowers to pick

ways_to_choose = math.comb(n, k)
print("There are {ways_to_choose} ways to choose {k} flowers from {n} flowers.")
```
