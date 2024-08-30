---
Title: 'sorted()'
Description: 'Takes in an iterator object, such as a list, tuple, dictionary, set, or string, and sorts it according to a parameter.'
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

Takes in an iterator object, such as a list, tuple, dictionary, set, or string, and sorts it according to a parameter.

## Syntax

```pseudo
sorted(iterable, key=None, reverse=False)
```

The `key` and `reverse` parameters are optional, and will default to `None` and `False`. `False` sorts ascending, and `True` descending. The `key` takes an input function to determine the comparison key.

## Example 1

`sorted()` can be used on either numbers or letters, but not on a combination of the two:

```python
my_list = ["beta", "epsilon", "alpha", "delta", "gamma"]

new_list = sorted(my_list)

print(new_list)
# Output: ['alpha', 'beta', 'delta', 'epsilon', 'gamma']
```

```python
my_list = [7,2,3,5,1,4,6]

new_list = sorted(my_list)

print(new_list)
# Output: [1, 2, 3, 4, 5, 6, 7]
```

## Example 2

Changing the `reverse` parameter changes the order of the sort:

```python
my_list = [7,2,3,5,1,4,6]

new_list = sorted(my_list, reverse=True)

print(new_list)
# Output: [7, 6, 5, 4, 3, 2, 1]
```

## Example 3

When `reversed` is `False`, `sorted()` will sort numbers from low to high, and letters alphabetically. However, capital letters will come before lowercase letters. In order to sort all objects with the same key, use a function with the key `parameter`:

```python
my_string = "bCEad"

after_sorted = sorted(my_string)

print(after_sorted)
# Output: ['C', 'E', 'a', 'b', 'd']

after_sorted = sorted(my_string, key=str.lower)

print(after_sorted)
# Output: ['a', 'b', 'C', 'd', 'E']
```

## Example 4

The `key` parameter can also be used to sort by other comparisons, such as length:

```python
my_list = ["aaa", "bb", "c"]

my_sorted_list = sorted(my_list)

print(my_sorted_list)
# Output: ['aaa', 'bb', 'c']

my_sorted_list = sorted(my_list, key=len)

print(my_sorted_list)
# Output: ['c', 'bb', 'aaa']
```

## Example 5

The `key` parameter can even take in custom functions:

```python
def sorting_func(i):
  return i - i**2

my_list = [2,1,4,3]

my_sorted_list = sorted(my_list)

print(my_sorted_list)
# Output: [1, 2, 3, 4]

my_sorted_list = sorted(my_list, key=sorting_func)

print(my_sorted_list)
# Output: [4, 3, 2, 1]
```

## Codebyte Example

Sorting a list of dictionaries based on a specific key:

```codebyte/python
my_list_of_dicts = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
    {"name": "Charlie", "age": 35},
    {"name": "David", "age": 28}
]

# Sort the list of dictionaries based on the "age" key in ascending order
sorted_list = sorted(my_list_of_dicts, key=lambda x: x["age"])

print(sorted_list)

# Sort the list of dictionaries based on the "name" key in alphabetical order (case-insensitive)
sorted_list_by_name = sorted(my_list_of_dicts, key=lambda x: x["name"].lower())

print(sorted_list_by_name)
```
