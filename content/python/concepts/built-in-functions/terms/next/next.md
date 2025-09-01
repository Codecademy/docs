---
Title: 'next()'
Description: 'Returns the next element from an iterator object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Functions'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, the **`next()`** function returns the next element from an [iterator](https://www.codecademy.com/resources/docs/python/iterators) object. It is especially useful when:

- Manually iterating through items in a loop
- Working with generators
- Handling potentially infinite sequences or data streams

## Syntax

```pseudo
next(iterator, default)
```

**Parameters:**

- `iterator`: An object that implements the iterator protocol.
- `default` (Optional): A value returned if the iterator is exhausted. If not provided, `StopIteration` is raised when there are no more items.

**Return value:**

Returns the next item from the iterator. If the iterator is exhausted and a `default` is provided, returns the `default`; otherwise, raises `StopIteration`.

## Example 1: Using `next()` with an Iterator

In this example, a list called `list_items` is converted into an iterator object via the `iter()` function, and each element is printed by means of the `next()` function:

```py
list_items = iter(["Hi", 27, "Python", 10])
print(next(list_items))
print(next(list_items))
print(next(list_items))
print(next(list_items))
```

Here is the output:

```shell
Hi
27
Python
10
```

## Example 2: Handling `StopIteration` with Default Value

This example iterates over a list with the `next()` function, but prevents the program from crashing with a default parameter:

```py
list_items = iter(["Hi", 27, "Python", 10])
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
print(next(list_items, "That's all folks"))
```

Here is the output:

```shell
Hi
27
Python
10
That's all folks
```

## Codebyte Example: Using `next()` with a Generator

This codebyte example uses a generator function that yields numbers in descending order. Here, `next()` is used to manually fetch each value, and the optional default parameter helps avoid exceptions:

```codebyte/python
def countdown(n):
  while n > 0:
    yield n
    n -= 1

counter = countdown(3)

print(next(counter))
print(next(counter))
print(next(counter))
print(next(counter, "Finished"))
```

## Frequently Asked Questions

### 1. What happens if `next()` is called on a non-iterator object?

If you call `next()` on a non-iterator object, you’ll get a `TypeError`. The object must be an iterator, or you can convert an iterable into one using `iter()`.

### 2. What is the difference between `for` loops and `next()`?

`for` loops internally use `next()` but also handle `StopIteration` automatically. Using `next()` gives you manual control over iteration.

### 3. How is `next()` useful with files?

File objects are iterators. You can use `next()` to read one line at a time from a file:

```py
with open('sample.txt') as f:
  print(next(f)) # Reads the first line
```
