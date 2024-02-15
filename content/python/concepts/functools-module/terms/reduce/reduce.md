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
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `reduce()` function returns an aggregated value that results from the application of a function to an iterable. The function is applied to the first pair of items in the iterable and the resulting value is then used with the next item in the sequence, this process repeats through item n.

## Syntax

```pseudo
reduce(func_name, iterable, initializer)
```

The `func_name` is the function to be applied to the iterable and can be a [lambda](https://www.codecademy.com/resources/docs/python/keywords/lambda) function or the name of any defined function. The `iterable` contains the items, such as a list, the function will act on. The `initializer` is an optional parameter that provides the ability to substitute an initial value for the first calculation. With the `initializer` set, the first calculation will be between the `initializer` value and the first item in the sequence in lieu of the first and second items of the sequence.

## Example

The following example uses `reduce()` to sum all the values in the `nums` list and add this value to an initial sum `start`:

```py
from functools import reduce
start = 30
nums = [x for x in range(10)]

print(reduce(lambda x, y: x + y, nums, start))
# Output: 75
```

## Codebyte Example

`reduce()` can be used to return the minimum value within a list:

```codebyte/python
from functools import reduce
foo = [5, 14, 56, 89, 4, 20]

print(reduce(lambda x, y: x if x < y else y, foo))
```
