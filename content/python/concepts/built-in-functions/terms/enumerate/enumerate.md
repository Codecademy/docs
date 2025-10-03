---
Title: 'enumerate()'
Description: 'Adds a counter to an iterable and returns it as an enumerate object'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'Lists'
  - 'Tuples'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`enumerate()`** function is a built-in Python function that adds a counter to an iterable and returns it as an enumerate object. It takes an iterable object (like a [list](https://www.codecademy.com/resources/docs/python/lists), [tuple](https://www.codecademy.com/resources/docs/python/tuples), or [string](https://www.codecademy.com/resources/docs/python/strings)) and returns a sequence of tuples containing indices and corresponding values from the iterable. This function is particularly useful when you need to track both the position and value while looping through sequences.

## Syntax

```pseudo
enumerate(iterable, start=0)
```

**Parameters:**

- `iterable`: A sequence, an iterator, or objects that support iteration
- `start` (Optional): The index value from which the counter is to begin. The default value is 0

**Return Value:**

Returns an enumerate object (iterator) containing tuples with the count (starting from the value of `start`) and values from the iterable.

## Example 1: Enumerating a List

This example demonstrates how the `enumerate()` function is used on a list:

```py
# Create a simple list
fruits = ['apple', 'banana', 'cherry']

# Basic usage of enumerate() in a for loop
for index, fruit in enumerate(fruits):
  print(f"{index}: {fruit}")

# Using enumerate() with a custom start index
for index, fruit in enumerate(fruits, start=1):
  print(f"{index}: {fruit}")
```

This will print the following output:

```shell
0: apple
1: banana
2: cherry
1: apple
2: banana
3: cherry
```

## Example 2: Enumerating a Tuple

This example demonstrates how to work with `enumerate()` on a tuple of colors. It illustrates converting an enumerate object to different data structures and how to use the `next()` function to access items from an enumerate object sequentially.

```py
colors = ('red', 'green', 'blue')

# Basic enumeration of a tuple
enum_colors = enumerate(colors)
print(list(enum_colors))

# Converting to a dictionary
enum_colors = enumerate(colors)
colors_dict = dict(enum_colors)
print(colors_dict)

# Accessing next item in the enumerate object
enum_colors = enumerate(colors)
first_item = next(enum_colors)
print(first_item)
print(next(enum_colors))
```

This will result in the following output:

```shell
[(0, 'red'), (1, 'green'), (2, 'blue')]
{0: 'red', 1: 'green', 2: 'blue'}
(0, 'red')
(1, 'green')
```

## Codebyte Example

The following examples show how the `enumerate()` function is used with several iterable types:

```codebyte/python
# Using enumerate on a string

word = 'Python'

for index, letter in enumerate(word):
  print(index, letter)

# Using enumerate on a dictionary

animal_dict = {'Cat':1, 'Dog':2, 'Horse':3}

for index, (animal, number) in enumerate(animal_dict.items()):
  print(index, animal, number)

# Using enumerate on a list

colleges = ['Cornell', 'Yale', 'MIT']

for index, college in enumerate(colleges):
  print(index, college)
```

## Frequently Asked Questions

<details>
  <summary>1. What are the `zip()` and `enumerate()` functions in Python?</summary>
  <p>Both `zip()` and `enumerate()` are built-in Python functions that work with iterables but serve different purposes. `enumerate()` adds a counter to an iterable and returns an enumerate object with index-value pairs. `zip()` aggregates elements from multiple iterables into a single iterator of tuples, pairing corresponding elements from each iterable together.</p>
</details>

<details>
  <summary>2. What is the difference between range and enumerate in Python?</summary>
  <p>`range()` and `enumerate()` serve different purposes. `range()` generates a sequence of numbers which is commonly used for iterating a specific number of times. `enumerate()` adds counter indices to an existing iterable and returns an enumerate object with index-value pairs. While `range()` creates a new sequence of numbers, `enumerate()` works with an existing sequence and adds position information.</p>
</details>

<details>
  <summary>3. Is enumerate slower than range?</summary>
  <p>In terms of computational efficiency, `enumerate()` is not significantly slower than `range()`. The slight overhead of `enumerate()` comes from creating tuples to pair indices with values, but this is negligible in most practical applications. In fact, using `enumerate()` is generally preferred over manually tracking indices with `range()` because it leads to cleaner, more readable code and eliminates common indexing errors. The Python interpreter is also optimized to handle `enumerate()` efficiently.</p>
</details>
