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

A **tuple** is a data structure used to store an ordered and immutable collection of objects, unlike [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries) which are unordered and mutable. They are similar to [lists](https://www.codecademy.com/resources/docs/python/lists), except that tuples cannot be changed after creation. Tuple elements can be of different [data types](https://www.codecademy.com/resources/docs/python/data-types).

Tuples also support built-in sequence functions such as [`len()`](https://www.codecademy.com/resources/docs/python/built-in-functions/len), [`min()`](https://www.codecademy.com/resources/docs/python/built-in-functions/min), and [`max()`](https://www.codecademy.com/resources/docs/python/built-in-functions/max).

## Syntax

```pseudo
# With built-in function
tuple(value1, value2, ..., valueN)

# With parentheses (multi-item)
tuple = (value1, value2, ..., valueN)

# With parentheses (single item with a trailing comma)
tuple = (singleValue, )

# With no parentheses (but with a trailing comma)
tuple = singleValue,
```

There are multiple ways to create tuples in Python:

- The first way is with the built-in [`tuple()`](https://www.codecademy.com/resources/docs/python/built-in-functions/tuple) function that accepts an iterable value such as a list.
- Tuples can also be created with just parentheses.

> **Note**: If the tuple is made with just parentheses and has only one element, it must contain a trailing comma. Otherwise, Python may interpret the surrounding parentheses as an expression instead of a tuple:
>
> ```py
> # This is will be treated as an int, not a tuple.
> streaming_days = (3)
>
> print(f"Value is {streaming_days}. Type is {type  > (streaming_days)}")
> # Output: Value is 3. Type is <class 'int'>
> ```

## Packing and Unpacking Tuples

When values are assigned to a tuple, it is "packed." When those same values are utilized later on in a program, the tuple is "unpacked."

```py
# packed tuple
my_tuple = (1, 2, 3)

# unpacked tuple
(one, two, three) = my_tuple

print(one)
print(two)
print(three)

"""
Output:
1
2
3
"""
```

> **Note:** The amount of variables must be equal to the amount of values in the tuple. Otherwise, an asterisk (`*`) must be used to gather the remaining values in a list:
>
> ```py
> # packed tuple
> my_tuple = (1, 2, 3, 4, 5)
>
> # unpacked tuple
> (one, two, *three) = my_tuple
>
> print(one)
> print(two)
> print(three)
> """
> Output:
> 1
> 2
> [3, 4, 5]
> """
> ```

## Accessing and Updating Tuples

Like most sequence types in Python, tuple elements can be accessed by index:

```py
my_tuple = ("Code Ninja", "Python")

print(my_tuple[1]) # Output: Python
```

Referencing a non-existent index will raise an `IndexError`.

Tuples can also be sliced with the following syntax:

```pseudo
tuple[start_index : stop_index : step]
```

The following is an example of slicing a tuple:

```py
my_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(my_tuple[1 : 9 : 2])
# Output: (2, 4, 6, 8)
```

Like strings, tuples can also be concatenated to form a single tuple:

```py
tuple_1 = (1, 2, 3)

tuple_2 = (4, 5, 6)

print(tuple_1 + tuple_2)
# Output: (1, 2, 3, 4, 5, 6)
```

## Codebyte Example

Tuples are like lists in that they are ordered and their elements can be accessed by index. However, since tuples are immutable, existing elements cannot be modified or deleted, and new elements can't be added.

The following example attempts to re-assign an element to a existing tuple, which will throw a `TypeError`:

```codebyte/python
streaming_platforms = tuple(["Netflix", "Hulu", "Amazon", "Apple TV"])

print(streaming_platforms[1])

streaming_platforms[2] = "YouTube" # This will throw an error
```
