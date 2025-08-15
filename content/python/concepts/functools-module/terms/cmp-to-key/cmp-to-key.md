---
Title: 'cmp-to-key()'
Description: 'Transforms an old-style comparison function into a key function, which will be used as the key argument in functions that take this parameter.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Comparison'
  - 'Functions'
  - 'Obsolete'
  - 'Python'
  - 'Sort'
  - 'Sorting Algorithms'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---
The **`cmp-to-key()`** [function](https://www.codecademy.com/resources/docs/python/functions) is a _[higher order function](https://www.codecademy.com/resources/docs/python/functions#:~:text=Higher%2DOrder%20Functions)_ used as a tool to generate _key functions_ from old-style _comparison functions_. A comparison function is any callable that takes two arguments, compares them and returns:

  - a negative number for less-than, 
  - a positive number for greater-than, 
  - or zero for equality. 

A key function is a function that takes one argument and returns a value that can be used as a sorting key.

`cmp-to-key()` is used by functions that can take the `key` parameter (such as [sorted()](https://www.codecademy.com/resources/docs/python/built-in-functions/sorted), [min()](https://www.codecademy.com/resources/docs/python/built-in-functions/min), [max()](https://www.codecademy.com/resources/docs/python/built-in-functions/max),...). It is very common to use it to migrate programs written in Python 2 to Python 3.

## Syntax

The `cmp-to-key()`function is part of the `functools` [module](https://www.codecademy.com/resources/docs/python/modules):

```pseudo
from functools import cmp_to_key

cmp_to_key(comp_func)
```

**Parameters** 

`comp_func`: This is a function that takes two arguments and compares them, returning:
  - A _negative number_ if the first value is less than the second,
  - A _positive number_ if the first value is more than the second,
  - _Zero_ if both values are the same.

**Return Value**
The method returns a key function which returns a _sort key_, a value that is used by sorting functions as the argument to compare.


## Example


## Codebyte Example
```codebyte/python
```