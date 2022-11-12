---
Title: 'next()'
Description: 'Returns the next element from an iterable object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Collections'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`next()`** function returns the next element from an [iterator](https://www.codecademy.com/resources/docs/python/iterators) object.

## Syntax

```pseudo
next(iterator_object, [default_parameter])
```

The `iterator_object` is required. The `default_parameter` is optional and is printed if the end of the iterator is reached.

> **Note:** If the next element is missing from the object, the `default_parameter` is returned. Without a set `default_parameter`, a `StopIteration` [error](https://www.codecademy.com/resources/docs/python/errors) is thrown.

## Example

In this example, a list called `list_items` is converted to an iterable object via the `iter()` function, and each element is printed by means of the `next()` function:

```py
list_items = iter(["Hi", 27, "Python", 10])
print(next(list_items))
print(next(list_items))
print(next(list_items))
print(next(list_items))
```

This outputs the following:

```shell
Hi
27
Python
10
```

If one more `print()` runs without the default parameter, an `StopIteration` error will be thrown:

```shell
Traceback (most recent call last):
  File "main.py", line 6, in <module>
    print(next(list_items))
StopIteration
```

> **Note:** This can also be done with a [`for` loop](https://www.codecademy.com/resources/docs/python/loops). However, the `for` loop actually generates its own iterator object and applies the `next()` function between each element. Since there is no risk of overflowing the list, a default parameter is not needed:
>
> ```py
> list_items = iter(["Hi", 27, "Python", 10])
> for item in list_items:
>   print(item)
> ```

## Codebyte Example

This example iterates over the same list with the `next()` function, but prevents the program from crashing with a default parameter:

```codebyte/python:
list_items = iter(["Hi", 27, "Python", 10])
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
```
