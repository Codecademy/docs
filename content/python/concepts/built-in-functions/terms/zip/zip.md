---
Title: 'zip()'
Description: 'Aggregates elements from multiple iterables into tuples'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Iterators'
  - 'Lists'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`zip()`** function in Python aggregates elements from multiple iterables (such as lists, tuples, or strings) and returns an iterator of [tuples](https://www.codecademy.com/resources/docs/python/tuples), where each tuple contains elements from the input iterables at the same position. This function provides an efficient way to iterate through multiple sequences simultaneously, making parallel iteration straightforward and pythonic.

The `zip()` function is commonly used for combining related data, creating [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries) from two sequences, and transposing matrices. When working with iterables of different lengths, `zip()` stops when the shortest iterable is exhausted.

## Syntax

```pseudo
zip(*iterables, strict=False)
```

**Parameters:**

- `*iterables`: One or more iterable objects (lists, tuples, strings, etc.). The asterisk (`*`) allows passing any number of iterables as arguments.
- `strict` (optional): If `True`, raises a `ValueError` if input iterables have different lengths (Python 3.10+). Default is `False`.

**Return value:**

- Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the input iterables.

## Example 1: Basic Usage of the `zip()` function

This example demonstrates how `zip()` combines elements from multiple iterables into tuples:

```py
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]

zipped = zip(names, ages)
zipped_list = list(zipped)

print(zipped_list)
```

This example results in the following output:

```shell
[('Alice', 25), ('Bob', 30), ('Charlie', 35)]
```

The `zip()` function creates an iterator that produces tuples containing elements from `names` and `ages` at the same position.

## Example 2: Handling Iterables of Different Lengths

When iterables have different lengths, `zip()` stops when the shortest iterable is exhausted:

```py
letters = ['a', 'b', 'c']
numbers = [1, 2, 3, 4, 5]

result = list(zip(letters, numbers))
print(result)

# Using strict=True (Python 3.10+)
try:
  result_strict = list(zip(letters, numbers, strict=True))
  print(result_strict)
except ValueError as e:
  print(f"Error: {e}")
```

> **Note:** `strict=True` requires Python 3.10 or later

This example results in the following output:

```shell
[('a', 1), ('b', 2), ('c', 3)]
Error: zip() argument 2 is longer than argument 1
```

Notice that only the first three pairs are created, and the remaining elements in `numbers` are ignored. With `strict=True`, a `ValueError` is raised because the iterables have different lengths.

## Codebyte Example: Creating Dictionaries and Unzipping

The following example shows how to use `zip()` to create a dictionary and unzip a sequence:

```codebyte/python
# Creating a dictionary from two lists
keys = ['name', 'age', 'job']
values = ['Alice', 28, 'Developer']

# Using zip() to create a dictionary
person = dict(zip(keys, values))
print("Dictionary created with zip():")
print(person)

# Unzipping a sequence using zip() with the * operator
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)

print("\nUnzipped sequence:")
print(f"Letters: {letters}")
print(f"Numbers: {numbers}")

# Parallel iteration using zip()
print("\nParallel iteration:")
for letter, number in zip(letters, numbers):
  print(f"{letter} -> {number}")
```

## Frequently Asked Questions

### 1. What is the difference between map and zip in Python?

Both [`map()`](https://www.codecademy.com/resources/docs/python/built-in-functions/map) and `zip()` are built-in functions in Python that work with iterables, but they serve different purposes:

- `map()` applies a function to each item of an iterable and returns an iterator of the results.
- `zip()` aggregates elements from multiple iterables into tuples without applying any function to them.

While `map()` transforms data, `zip()` combines related data from multiple sources.

### 2. What is zip and unzip in Python?

In Python, "zipping" refers to using the `zip()` function to combine multiple iterables into an iterator of tuples. "Unzipping" refers to the reverse operation, which can be performed by using the `zip()` function with the unpacking operator (`*`):

```py
# Zipping
zipped = zip([1, 2, 3], ['a', 'b', 'c'])  # Creates an iterator of tuples

# Unzipping
numbers, letters = zip(*zipped)  # Separates the zipped data back into individual sequences
```

Unzipping is useful when you need to separate previously combined data back into its original sequences.

### 3. What is `dict(zip())` in Python?

`dict(zip())` is a common pattern in Python that creates a dictionary by combining two iterables, where the first iterable provides the keys and the second provides the values:

```py
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

# Create a dictionary using dict(zip())
person = dict(zip(keys, values))
# Result: {'name': 'Alice', 'age': 25, 'city': 'New York'}
```

This pattern provides a concise way to create dictionaries from parallel sequences of keys and values, which is more readable than using a [dictionary comprehension](https://www.codecademy.com/article/what-is-dictionary-comprehension-in-python) for the same purpose.
