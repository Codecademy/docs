---
Title: 'sum()'
Description: 'Takes in an iterable object, such as a list or tuple, and returns the sum of all elements.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Iterators'
  - 'Lists'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

Takes in an iterable object, such as a list or tuple, and returns the sum of all elements.

## Syntax

```python
sum(iterable, start=0)
```

## Example 1

Summing up the elements of a list:

```python
numbers = [1, 2, 3, 4, 5]

total = sum(numbers)

print(total) # Output: 15
```

## Example 2

Summing up the elements of a tuple:

```python
prices = (10.99, 5.99, 8.49)

total = sum(prices)

print(total)  # Output: 25.47
```

## Example 3

Using the `start` parameter to specify an initial value for the sum:

```python
numbers = [1, 2, 3, 4, 5]

total = sum(numbers, start=10)

print(total)  # Output: 25
```

## Example 4

Summing up a list of strings (concatenation):

```python
words = ["Hello", " ", "World", "!"]

message = sum(words, start="")

print(message)  # Output: 'Hello World!'
```

> **Note:** The `sum()` function works with any iterable object that contains numbers or elements that can be added together.
