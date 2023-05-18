---
Title: 'iter()'
Description: 'Returns an iterator object for a given object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Iterators'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`iter()`** function is a built-in Python function used to create an `iterator` object.

## Syntax

```pseudo
iter(object, sentinel)
```

- `object`: Required. An object. The `iter()` function returns an iterator object for this.
- `sentinel`: Optional. If set, the iterator will call the object with no arguments for each call to its `__next__()` method. If the value returned is equal to `sentinel`, `StopIteration` will be raised, otherwise the value will be returned.

## Example

The code below demonstrates the use of the `iter()` function:

```py
# Create a list
fruits = ["apple", "banana", "cherry"]

# Get an iterator object
fruit_iter = iter(fruits)

# Iterate over the list using the iterator
print(next(fruit_iter))
print(next(fruit_iter))
print(next(fruit_iter))
```

In the code above a list is declared, and the `iter()` function is used to get an iterator object for the list. Finally, the `next()` function is used to step through the items in the list.

## Codebyte Example

In the following example, the code is iterating and printing the items in the `fruits` list as in the previous example. However, in this instance a `while` loop is used to continue calling `next(fruit_iter)` until a `StopIteration` exception is raised, indicating that there are no more items to iterate over.

```codebyte/python
fruits = ["apple", "banana", "cherry"]

fruit_iter = iter(fruits)

try:
    while True:
        print(next(fruit_iter))
except StopIteration:
    pass
```
