---
Title: 'reduce()'
Description: 'Returns an aggregated value that results from the application of a passed function to each item in an iterable.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, the **`reduce()`** [function](https://www.codecademy.com/resources/docs/python/functions) returns an aggregated value that results from the application of a function to an [iterable](https://www.codecademy.com/resources/docs/python/iterators). The function is applied to the first pair of items in the iterable and the resulting value is then used with the next item in the sequence. This process repeats until item `n` is reached.

## Syntax

The `reduce()` function is included in the `functools` [module](https://www.codecademy.com/resources/docs/python/modules):

```pseudo
from functools import reduce

reduce(func_name, iterable, initializer)
```

**Parameters:**

- `func_name`: The function to be applied to the iterable. It can be a [`lambda`](https://www.codecademy.com/resources/docs/python/keywords/lambda) function or any other function defined beforehand.
- `iterable`: The iterable contains the items the function will act upon. It can be a [list](https://www.codecademy.com/resources/docs/python/lists), [tuple](https://www.codecademy.com/resources/docs/python/tuples), or [string](https://www.codecademy.com/resources/docs/python/strings).
- `initializer`: Provides the ability to specify an initial value for the first calculation. With the `initializer` set, the first calculation will be between the `initializer` and the first item in the sequence instead of the first and second items of the sequence.

**Return value:**

The `reduce()` function returns an aggregated value.

## Example 1: Summing Elements in a List

This example uses the `reduce()` function to sum all the elements in the `nums` list:

```py
from functools import reduce

# Create a list of numbers
nums = [15, 4, 66, 29, 34, 80]

# Sum the elements in the list
print(reduce(lambda x, y: x + y, nums))
```

Here is the output:

```shell
228
```

## Example 2: Finding the Minimum Value in a List

This example uses the `reduce()` function to determine the minimum value in a list:

```py
from functools import reduce

# Create a list of numbers
foo = [5, 14, 56, 89, 4, 20]

# Find the minimum value in the list
print(reduce(lambda x, y: x if x < y else y, foo))
```

Here is the output:

```shell
4
```

## Codebyte Example: Concatenating Strings in a List

This codebyte example uses the `reduce()` function to concatenate the strings in a list:

```codebyte/python
from functools import reduce

# Create a list of strings
words = ["Python", "is", "fun"]

# Concatenate the strings in the list
sentence = reduce(lambda x, y: x + " " + y, words)

# Print the result
print(sentence)
```

## Frequently Asked Questions

### 1. Why is `reduce()` in the `functools` module and not a built-in function in Python?

Python 3 moved `reduce()` to `functools` because it's not as universally useful or intuitive as the other functions like `map()` or `filter()`.

### 2. Can I use a normal function instead of `lambda` with `reduce()`?

Yes. Any function that takes two arguments can be used.

### 3. When should I use `reduce()` instead of a loop?

Use `reduce()` when:

- You want concise, functional-style code.
- The operation is naturally associative and cumulative.
- Readability is not sacrificed (i.e., the logic remains clear).
