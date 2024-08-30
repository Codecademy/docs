---
Title: 'sum()'
Description: 'Takes in an iterable object, such as a list or tuple, and returns the sum of all elements.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Iterators'
  - 'Lists'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`sum()`** function takes in an iterable object, such as a list or tuple, and returns the sum of all elements.

## Syntax

```pseudo
sum(iterable, start = 0)
```

- `iterable`: An object capable of returning its elements one at a time such as a list, tuple, or dictionary.
- `start`: A number added to the sum of the numbers in the iterable.

## Example 1

Summing up the elements of a list:

```python
numbers = [1, 2, 3, 4, 5]

total = sum(numbers)

print(total)
```

This example results in the following output:

```shell
15
```

## Example 2

Summing up the elements of a tuple:

```python
prices = (10.99, 5.99, 8.49)

total = sum(prices)

print(total)
```

This example results in the following output:

```shell
25.47
```

## Example 3

Using the `start` parameter to specify an initial value for the sum:

```python
numbers = [1, 2, 3, 4, 5]

total = sum(numbers, 10)

print(total)
```

This example results in the following output:

```shell
25
```

## Codebyte Example

Summing up a list of lists (concatenation):

```codebyte/python
num_lists = [[1, 2, 3], [4, 6, 8]]

combined_list = sum(num_lists, [])

print(combined_list)
```

> **Note:** The `sum()` function works with any iterable object that contains numbers or elements that can be added together.
