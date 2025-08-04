---
Title: 'sorted()'
Description: 'Takes in an iterator object, such as a list, tuple, dictionary, set, or string, and sorts it according to a parameter.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Iterators'
  - 'Lists'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

In Python, the **`sorted()`** [function](https://www.codecademy.com/resources/docs/python/functions) takes in an [iterator](https://www.codecademy.com/resources/docs/python/iterators) object, such as a [list](https://www.codecademy.com/resources/docs/python/lists), [tuple](https://www.codecademy.com/resources/docs/python/tuples), [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries), [set](https://www.codecademy.com/resources/docs/python/sets), or [string](https://www.codecademy.com/resources/docs/python/strings), and sorts it according to a parameter. This function is versatile, easy to use, and supports custom sorting logic using optional parameters.

## Python `sorted()` Syntax

```pseudo
sorted(iterable, key=None, reverse=False)
```

**Parameters:**

- `iterable` (Required): The sequence (list, tuple, string, dictionary, etc.) to be sorted.
- `key` (Optional): A function that acts as a sorting key.
- `reverse` (Optional): If `True`, the result is sorted in descending order.

**Return value:**

Returns a list that includes the elements in the iterable in sorted order.

## Example 1: Sorting a List Using `sorted()`

This example uses `sorted()` to sort the `my_list` list:

```py
my_list = ["beta", "epsilon", "alpha", "delta", "gamma"]

new_list = sorted(my_list)

print(new_list)
```

Here is the output:

```shell
['alpha', 'beta', 'delta', 'epsilon', 'gamma']
```

## Example 2: Sorting in Descending Order Using `sorted()`

This example uses `sorted()` with the `reverse` parameter set to `True` to sort the `my_list` list in descending order:

```py
my_list = [7, 2, 3, 5, 1, 4, 6]

new_list = sorted(my_list, reverse=True)

print(new_list)
```

Here is the output:

```shell
[7, 6, 5, 4, 3, 2, 1]
```

## Codebyte Example: Using `sorted()` with a Key

This codebyte example uses `sorted()` with the `key` parameter set to `len` to sort the `words` list based on the length of its items:

```codebyte/python
words = ["banana", "apple", "cherry", "date"]

sorted_words = sorted(words, key=len)

print(sorted_words)
```

## Frequently Asked Questions

### 1. What is the difference between `sorted()` and `list.sort()`?

- `sorted()` works on any iterable and returns a new sorted list.
- `list.sort()` modifies the list in-place and returns `None`.

### 2. Can I sort in descending order using `sorted()`?

Yes, you can set the `reverse` parameter in `sorted()` to `True` to sort in descending order.

### 3. What types of iterables can be used with `sorted()`?

You can sort lists, tuples, strings, dictionaries, and any other iterable using `sorted()`.
