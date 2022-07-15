---
Title: 'Tuples'
Description: 'A tuple is a data structure used to store an ordered and immutable collection of objects.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Tuples'
  - 'Lists'
  - 'Data Types'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **tuple** is a data structure used to store an ordered and immutable collection of objects, unlike [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries) which are unordered and mutable. They are similar to [lists](https://www.codecademy.com/resources/docs/python/lists), except that tuples cannot be changed after creation.

Tuples also support built-in sequence functions such as [`len()`](https://www.codecademy.com/resources/docs/python/built-in-functions/len), [`min()`](https://www.codecademy.com/resources/docs/python/built-in-functions/min), [`max()`](https://www.codecademy.com/resources/docs/python/built-in-functions/max).

## Syntax

```pseudo
# With built-in function
tuple(value1, value2, ... valueN)

# With parentheses (multi-item)
tuple = (value1, value2, ... valueN)

# With parentheses (single item with trailing comma)
tuple = (singleValue, )
```

There are multiple ways to create tuples in Python.

- The first way is with the built-in `tuple()` function that accepts an iterable value such as a list.
- Tuples can also be created with just parentheses.

**Note**: If the tuple is made with just parentheses and has only one element, it must contain a trailing comma. Otherwise, Python will interpet the surrounding parentheses as an expression instead of a tuple:

```py
streaming_days = (3)

print(f"Value is {streaming_days}. Type is {type(streaming_days)}")
# Output: Value is 3. Type is <class 'int'>
```

## Codebyte Example

The following example shows how tuples are like lists in that they are ordered and their elements can be accessed by index. However, since tuples are immutable, we cannot modify, delete, or add new elements. Attempting to re-assign an element will throw a `TypeError`:

```codebyte/python
streaming_platforms = tuple(["Netflix", "Hulu", "Amazon", "Apple TV"])

print(streaming_platforms[1])

streaming_platforms[2] = "YouTube" # This will throw an error
```
