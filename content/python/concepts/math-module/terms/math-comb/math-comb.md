---
Title: '.comb()'
Description: 'Calculates the number of ways to choose `k` items from `n` items without regard to order.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Math'
  - 'Combinations'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---


In Python, the **`.comb()`** function from the `math` module determines how many unordered choices can be made to select `k` items from `n` items.

## Syntax

```pseudo
math.comb(n, k)
```

- `n`: A non-negative integer that represents the total number of items.
- `k`: A non-negative integer that represents the number of items to choose.

  The result returned is a non-negative integer value that represents the number of ways in which we can make k number of choices out of n number of items without any repetition or order.

## Example 

The following example shows the use of `.comb()` function:

```py
import math 

n = 10
k = 4 

no_of_choices = math.comb(n,k)
print(f"Total ways to choose: ", no_of_choices)
```

This bit of code gives out the following output: 
```shell
Total ways to choose: 210
```

## Codebyte Example

Run the example given below that uses 'math.comb()' in order to find out in how many ways can someone choose 'k' number of flowers from 'n' number of flowers. 

```codebyte/python
import math

n = 20  # Total number of flowers
k = 2  # Number of flowers to pick

ways_to_choose = math.comb(n, k)
print(f"There are {ways_to_choose} ways to choose {k} flowers from {n} flowers.")

```
