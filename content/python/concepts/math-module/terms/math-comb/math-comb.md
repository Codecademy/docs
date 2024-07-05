---
Title: 'math.comb()'
Description: 'Finds out how many unordered choices can be made in order to choose "k" amount of items from "n" number of items.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Math'
  - 'Combinations'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---


**Math.comb()** function allows you to find out how many unordered choices can be possibly made in order to choose 'k' amount of items from 'n' number of items.

## Syntax

```pseudo
math.comb(n, k)
```
where: 

    n, k - non-negative integers

  The result returned is a non-negative integer value that represents the number of ways in which we can make k number of choices out of n number of items without any repetition or order.

## Example 

We use 'math.comb(n,k)' to find the number of unordered choices made to choose 'k' items from 'n' items. 

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
