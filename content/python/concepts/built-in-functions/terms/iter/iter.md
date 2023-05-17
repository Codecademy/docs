---
Title: 'iter()'
Description: 'Learn how to use the built-in Python function iter()'
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
my_list = ["apple", "banana", "cherry"]

# get an iterator object
my_iter = iter(my_list)

# iterate over the list using the iterator
print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

In the above code snippet, we first create a list of fruits. We then use the `iter()` function to get an iterator object for the list. Finally, we use the `next()` function to iterate over the items in the list.

## Codebyte Example

In this Codebyte example, we are doing essentially the same thing as in the previous example. However, we are using a `while True` loop to continue calling `next(my_iter)` until a `StopIteration` exception is raised, indicating that there are no more items to iterate over.

```codebyte/python
# create a list
my_list = ["apple", "banana", "cherry"]

# get an iterator object
my_iter = iter(my_list)

# iterate over the list using the iterator
try:
    while True:
        print(next(my_iter))
except StopIteration:
    pass
```
