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
next(iterator_name, [default_parameter])
```
The required `iterator_name` parameter is the iterator object with the set of values. The `default_parameter` is optional and is printed if the end of the iterator is reached.

> **Note:** If the next element is missing from the object, the `default_parameter` is returned. Without a set `default_parameter`, a `StopIteration` [error](https://www.codecademy.com/resources/docs/python/errors) is thrown.

## Example

This code iterates a list containing four elements, printing each on screen by means of `next()` function.

```codebyte/python
listems = ['Hi', 27, 'Python', 10] # Here's the initial item's list

listemsIt = iter(lisitems) # First of all, we need to convert list into an iterator
print(listemsIt) # Shows the object reference of the iterator created

print(next(listemsIt)) # Output on screen: Hi

print(next(listemsIt)) # Output on screen: 27

print(next(listemsIt)) # Output on screen: Python

print(next(listemsIt)) # Output on screen: 10
```

## Codebyte Example

This example iterates over the same list, but prevents the program from crashing the using a default parameter:

```codebyte/python
list_items = iter(["Hi", 27, "Python", 10])

print(next(list_items, "That's all folks"))

print(next(list_items, "That's all folks"))

print(next(list_items, "That's all folks"))

print(next(list_items, "That's all folks"))

print(next(list_items, "That's all folks"))
```

If the last `print()` runs without the default parameter,  a `StopIteration` error will be thrown.

> **Note:** This can also be done with a [`for` loop](https://www.codecademy.com/resources/docs/python/loops). However, the `for` loop actually generates its own iterator object and applies the `next()` function between each element.
