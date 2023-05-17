---
Title: 'iter()'
Description: 'Returns an iterator object for a given object'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Built-in Functions'
  - 'Iterators'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`iter()`** function is a built-in Python function used to create an **iterator** object.

## Syntax

The `iter()` function has two main forms:

```pseudo
iter(object[, sentinel])
```

- `object`: Required. An object. The `iter()` function returns an iterator object for this.
- `sentinel`: Optional. If set, the iterator will call the object with no arguments for each call to its `__next__()` method. If the value returned is equal to `sentinel`, `StopIteration` will be raised, otherwise the value will be returned.

## Example

Here is an example of how you might use the `iter()` function:

```py
# create a list
fruits = ["apple", "banana", "cherry"]

# get an iterator object
fruit_iter = iter(fruits)

# iterate over the list using the iterator
print(next(fruit_iter))
print(next(fruit_iter))
print(next(fruit_iter))
```

In the above code snippet, we first create a list of fruits. We then use the `iter()` function to get an iterator object for the list. Finally, we use the `next()` function to iterate over the items in the list.

## Codebyte Example

In the following example, we are doing almost the same thing as in the previous example. However, we are using a `while True` loop to continue calling `next(fruit_iter)` until a `StopIteration` exception is raised, indicating that there are no more items to iterate over.

```codebyte/python
fruits = ["apple", "banana", "cherry"]

fruit_iter = iter(fruits)

try:
    while True:
        print(next(fruit_iter))
except StopIteration:
    pass
```
