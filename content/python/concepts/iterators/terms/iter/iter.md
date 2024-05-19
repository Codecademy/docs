---
Title: 'iter()'
Description: 'Returns an iterator object for a given object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'OOP'
  - 'Loops'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`iter()`** function returns an [iterator](https://www.codecademy.com/resources/docs/python/iterators) object.

## Syntax

```pseudo
iter(object, sentinel)
```

- `object`: A required object parameter. The `iter()` function returns an iterator object for this.
- `sentinel`: An optional parameter. If set, the iterator will call the object with no arguments for each call to its `__next__()` method. If the value returned is equal to `sentinel`; `StopIteration` will be raised, otherwise the value will be returned.

## Example

The example below demonstrates how the `iter()` function is used in a Python program:

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

The output will be:

```shell
apple
banana
cherry
```

## Applying a Sentinel

The following example applies the optional `sentinel` parameter through a callable class object (though the `__call__()` method):

```py
class Countdown:
  def __init__(self,start):
    self.start = start

  def __iter__(self):
    return self

  def __next__(self):
    self.start -= 1
    return self.start

  __call__ = __next__

my_iter = iter(Countdown(10), 0)

for x in my_iter:
  print(x)
```

The output will be:

```shell
9
8
7
6
5
4
3
2
1
```

## Codebyte Example

When using iterables, it usually isn't necessary to call `iter()` or deal with iterator objects. The `for` loop does this automatically by creating a temporary, unnamed variable to hold the iterator for the duration of the loop.

The following code examples use the `iter()` function and a `for` loop to produce the same results:

```codebyte/python
fruits = ['apple', 'orange', 'banana']

print("Example with iter() and next() : ")

fruits_iter = iter(fruits)

print(next(fruits_iter))
print(next(fruits_iter))
print(next(fruits_iter))
print("------------------------------------")

print("Example with for loop : ")

for fruit in fruits:
  print(fruit)
```
