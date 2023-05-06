---
Title: 'Iterators'
Description: 'In Python, an iterator is an object representing a collection of elements (such as data or methods) where each element can be accessed by traversing through it to perform the required tasks.'
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

In Python, an iterator is an object representing a collection of elements (such as data or methods) where each element can be accessed by traversing through the collection to perform the required tasks.

An iterator supports the `next()` function which takes no arguments and always returns the next element of the collection. When all elements are exhausted, it returns the `StopIteration` exception.

## Iterables

Objects that can be converted into iterators are called iterables. Datatypes such as lists, tuples, dictionaries, and sets are iterable, meaning that they can be converted into iterators using the `iter()` function.

The difference between an iterable and an iterator can be easily be understood by considering iterable as a birthday cake that we need to distribute to a number of people. We cut cake into several pieces using the `iter()` function to get an iterator. Then we use `next()` to distribute each piece.

Also, it is important to understand that all iterators are iterable but the converse is not true.

## Code for an Iterator using a List

The following code shows the generation of an iterator from a list using the `iter()` function and usage of the `next()` function by manually iterating through all the items of the iterator. When there are no more elements left in an iterator, it returns the `StopIteration` exception.

**Note:** Once an iterator has been iterated through, it cannot be re-iterated again.

```codebyte/py
# Defining list cake, which is iterable
cake = ["piece1", "piece2", "piece3"]

# Converting list into an iterator using iter() function
cake_ready_to_distribute = iter(cake)

# Iterating through iterator, returns piece1
print(next(cake_ready_to_distribute))

# Iterating through iterator, returns piece2
print(next(cake_ready_to_distribute))

# Iterating through iterator, returns piece3
print(next(cake_ready_to_distribute))

# Iterating through iterator, returns StopIteration exception
try:
  print(next(cake_ready_to_distribute))
except StopIteration:
  print("stop iteration error")
```

## Iterator in a `for` loop

The `for` loop has built-in `iter()` and `next()` functions, which allows running iterations more elegantly.

```codebyte/py
# Defining list cake, which is iterable
cake = ["piece1", "piece2", "piece3"]

# The for loop itself convert iterable into iterator and returns elements
for piece in cake:
  print(piece)
```

## Iteration using a `while` loop

The `while` loop does not have the built-in `iter()` and `next()` functions as in the `for` loop, so the `iter()` and `next()` functions need to be used separately.

```codebyte/py
# Defining list cake, which is iterable
cake = ["piece1", "piece2", "piece3"]

# Converting list into iterator using iter() function
cake_ready_to_distribute = iter(cake)

# Initiate a infinite loop which stops when the iterator is exhausted
while True:
  try:
    # Printing the next piece
    print(next(cake_ready_to_distribute))
  except StopIteration:
    # If StopIteration is raised, break from loop
    break
```

## Creating a User-Defined Iterable Object

Since an iterable object is an object that can be converted into Iterator, for an object to be iterable it needs to support the `iter()` function and the iterator generated must also support `next()`.

```codebyte/py
class cake:
  def __init__(self, maxPieces=0):
    self.maxPieces = maxPieces

  def __iter__(self):
    self.piece = 0
    return self

  def __next__(self):
    if self.piece < self.maxPieces:
      self.piece += 1
      return "piece" + str(self.piece)
    else:
      raise StopIteration

# Creating object cake along with number of pieces to be distributed
cake_before_cutting = cake(10)

# The object cake is iterable as we defined iter function
cake_after_cutting = iter(cake_before_cutting)

while True:
  try:
    # Printing next piece
    print(next(cake_after_cutting))
  except StopIteration:
    # If StopIteration is raised, break from loop
    break
```

In the above code, built-in `iter()` function is equivalent to user-defined `__iter__()` method, when `iter()` function is invoked it invokes `__iter__()` method after checking the data type of input argument.

Similarly, `next(cake_after_cutting)` is same as `cake_after_cutting.__next__()`. When `next()` function is invoked it invokes `__next__()` method after checking data type of input argument.
