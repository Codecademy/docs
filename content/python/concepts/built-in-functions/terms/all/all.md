---
Title: 'all()'
Description: 'Returns True if every item in an iterable evaluates to True, otherwise, it returns False.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Dictionary'
  - 'Sets'
  - 'Strings'
  - 'Lists'
  - 'Tuples'
  - 'Iterators'
  - 'Functions'
  - 'Logic'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Returns `True` if every item in an iterable evaluates to `True`, otherwise, it returns `False`.

## Syntax

```python
all(iterable)
```

## Example 1

As long as one element in the iterable is `False`, `all()` will return `False`.

```python
my_list = [True, "hello", 17]

print(all(my_list))
# Output: True

my_list = [False, "hello", 17]

print(all(my_list))
# Output: False
```

## Example 2

If the iterable is empty, `all()` will return `True`.

```python
my_list = []

print(all(my_list))
# Output: True
```

The integer `0` evaluates to `False`; however, all non-zero numbers and strings evaluate to `True`.

```python
my_list = [4, 3, 2, 1, 0]

print(all(my_list))
# Output: False

my_list = [4, 3, 2, 1, "0"]

print(all(my_list))
# Output: True
```

## Different Types of Iterables

`all()` can be used on any iterable, such as a list, set, string, dictionary, or tuple.

### Lists

```python
my_list = [1, 1, 0, True]

print(all(my_list))
# Output: False
```

This is `False` because the integer `0` is `False`.

### Sets

```python
my_set = {1, "False", True, 7}

print(all(my_set))
# Output: True
```

This is `True` because strings and non-zero integers are `True`.

### Strings

```python
my_string = "Python is more fun than Javascript"

print(all(my_string))
# Output: True
```

This is `True` because strings and non-zero integers are `True`.

### Dictionaries

When `all()` is used with a dictionary, it evaluates the keys, not the values. That means, even if a value is `False`, `all()` will return `True` if all of the keys evaluate to `True`.

```python
my_dict = {0: "zero", 1: "one", 2: "two"}

print(all(my_dict))
# Output: False
```

This is `False` because the first key, `0`, is `False`.

### Tuples

```python
my_tuple = ("Heffalumps", "and", "Woozles")

print(all(my_tuple))
# Output: True
```

This is `True` because all items in the tuple are `True`.

## Codebyte Example

The following example demonstrates the use of `all()` function.

Checking if all elements in a list satisfy a condition:

```codebyte/python
numbers = [2, 4, 6, 8, 10]
all_even = all(num % 2 == 0 for num in numbers)
print(all_even)

names = ['Alice', 'Bob', 'Charlie']
all_long_names = all(len(name) > 3 for name in names)
print(all_long_names)
```

The `all()` function returns `True` if all elements in an iterable are considered "truthy" (i.e., they evaluate to `True` in a boolean context). Otherwise, it returns `False`.
