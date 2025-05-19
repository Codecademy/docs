---
Title: 'Tuples'
Description: 'Stores an ordered collection of items that cannot be changed after creation.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Data Types'
  - 'Python'
  - 'Tuples'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **tuple** in Python is an immutable, ordered collection of elements. Tuples are similar to [lists](https://www.codecademy.com/resources/docs/python/lists), but unlike lists, they cannot be changed after their creation (i.e., they are immutable). Tuples can hold elements of different data types and are defined by enclosing the elements in parentheses.

Tuples are commonly used in Python for returning multiple values from functions, as [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) keys (when they contain only immutable elements), and for representing fixed collections of data that should not be modified, such as days of the week or coordinates. Their immutability makes them more memory efficient and faster than lists for large data.

## Key Characteristics of Tuples

- **Ordered**: Elements in a tuple maintain a defined order, which can be accessed by index.
- **Immutable**: Once created, elements in a tuple cannot be added, removed, or modified.
- **Heterogeneous**: A tuple can contain elements of different data types, including other tuples.
- **Indexed**: Elements in a tuple can be accessed using zero-based indexing.
- **Nestable**: Tuples can contain other tuples, creating nested structures.
- **Iterable**: Tuples can be iterated through using loops.

## Creating Tuples

There are several ways to create tuples in Python:

### Using Parentheses

The most common way to create a tuple is by placing elements inside parentheses `()`, separated by commas:

```py
# Creating a tuple with different data types
mixed_tuple = (1, "Hello", 3.14, True)
print(mixed_tuple)
```

The output of this code will be:

```shell
(1, 'Hello', 3.14, True)
```

### Without Parentheses (Tuple Packing)

Python allows tuple creation without parentheses, simply by separating items with commas. This is known as tuple packing:

```py
# Creating a tuple without parentheses
coordinates = 10.5, 20.7, 30.9
print(coordinates)
print(type(coordinates))
```

The output of this code will be:

```shell
(10.5, 20.7, 30.9)
<class 'tuple'>
```

### Empty Tuple

To create an empty tuple, use empty parentheses`()`:

```py
# Creating an empty tuple
empty_tuple = ()
print(empty_tuple)
print(type(empty_tuple))
```

The output of this code will be:

```shell
()
<class 'tuple'>
```

### Single-Element Tuple

Creating a tuple with just one element requires a trailing comma, otherwise, Python interprets it as a regular expression in parentheses:

```py
# Incorrect way - this is not a tuple
not_a_tuple = (42)
print(not_a_tuple)
print(type(not_a_tuple))

# Correct way - with trailing comma
single_element_tuple = (42,)
print(single_element_tuple)
print(type(single_element_tuple))
```

The output of this code will be:

```shell
42
<class 'int'>
(42,)
<class 'tuple'>
```

### Using the `tuple()` Constructor

The `tuple()` function can convert other iterable objects like lists, strings, or dictionaries (keys) into tuples:

```py
# Creating tuples from other iterables
tuple_from_list = tuple([1, 2, 3, 4])
tuple_from_string = tuple("Python")
tuple_from_range = tuple(range(5))

print(tuple_from_list)
print(tuple_from_string)
print(tuple_from_range)
```

The output of this code will be:

```shell
(1, 2, 3, 4)
('P', 'y', 't', 'h', 'o', 'n')
(0, 1, 2, 3, 4)
```

## Accessing Tuple Elements

Tuple elements can be accessed using indexing, similar to lists. Indexing starts at 0 for the first element.

### Using Positive Indexing

```py
# Accessing elements with positive indexing
colors = ('red', 'green', 'blue', 'yellow', 'purple')
print(colors[0])  # First element
print(colors[2])  # Third element
```

The output of this code will be:

```shell
red
blue
```

### Using Negative Indexing

Negative indexing allows access from the end of the tuple. The last element is at index -1, the second-to-last at -2, and so on:

```py
# Accessing elements with negative indexing
colors = ('red', 'green', 'blue', 'yellow', 'purple')
print(colors[-1])  # Last element
print(colors[-3])  # Third-to-last element
```

The output of this code will be:

```shell
purple
blue
```

## Tuple Operations

### Concatenation

Tuples can be concatenated using the `+` operator to create a new tuple:

```py
# Concatenating tuples
tuple1 = (1, 2, 3)
tuple2 = ('a', 'b', 'c')
concatenated = tuple1 + tuple2
print(concatenated)
```

The output of this code will be:

```shell
(1, 2, 3, 'a', 'b', 'c')
```

### Repetition

Tuples can be repeated using the `*` operator:

```py
# Repeating a tuple
repeated = (1, 2, 3) * 3
print(repeated)
```

The output of this code will be:

```shell
(1, 2, 3, 1, 2, 3, 1, 2, 3)
```

### Membership Testing

Checking if an element exists in a tuple can be done using the `in` keyword.

```py
# Checking membership
fruits = ('apple', 'banana', 'orange', 'grape')
print('banana' in fruits)
print('mango' in fruits)
```

The output of this code will be:

```shell
True
False
```

### Slicing of Tuple

Slices allow for the extraction of a portion of a tuple using the syntax `tuple[start:stop:step]`:

```py
# Slicing a tuple
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print(numbers[2:7])      # Elements from index 2 to 6
print(numbers[::2])      # Every second element
print(numbers[::-1])     # Reversed tuple
```

The output of this code will be:

```shell
(2, 3, 4, 5, 6)
(0, 2, 4, 6, 8)
(9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
```

### Deleting a Tuple

Since tuples are immutable, individual elements cannot be deleted. However, the entire tuple can be deleted using the `del` keyword:

```py
# Deleting a tuple
coordinates = (10.5, 20.7, 30.9)
del coordinates
# print(coordinates)  # This would raise a NameError
```

## Frequently Asked Questions

### 1. Which of the following is a Python tuple: `4 5 6`, `(4 5 6)`, `[4, 5, 6]`, `{4, 5, 6}`?

Only `(4, 5, 6)` is a valid Python tuple. The notation `4 5 6` without commas is a syntax error, `[4, 5, 6]` is a list, and `{4, 5, 6}` is a set.

### 2. What is the difference between a tuple and a list?

The main differences between tuples and lists are:

1. **Mutability**: Tuples are immutable (cannot be changed after creation), while lists are mutable (can be modified).
2. **Syntax**: Tuples use parentheses `()`, while lists use square brackets `[]`.
3. **Performance**: Tuples are slightly faster and use less memory than lists.
4. **Usage**: Tuples are typically used for heterogeneous data (different types), while lists are used for homogeneous items (similar types).
5. **Methods**: Lists have more built-in methods because they're mutable (e.g., `append()`, `insert()`, `remove()`).

### 3. Can you edit a tuple?

No, tuples cannot be edited after creation because they are immutable. Once a tuple is created, you cannot add, remove, or change its elements. If you need to modify the data, you must create a new tuple:

```py
# Converting to list, modifying, and converting back to tuple
original = (1, 2, 3, 4)
temp_list = list(original)
temp_list[1] = 20
modified = tuple(temp_list)
print(modified)
```

The output of this code will be:

```shell
(1, 20, 3, 4)
```

### 4. How to sort a tuple in Python?

Since tuples are immutable, you cannot sort a tuple in-place like you can with lists. You have two options:

1\. Create a new sorted tuple using the `sorted()` function:

```py
# Creating a new sorted tuple
unsorted = (5, 2, 8, 1, 9, 3)
sorted_tuple = tuple(sorted(unsorted))
print(sorted_tuple)
```

Output:

```shell
(1, 2, 3, 5, 8, 9)
```

2\. To sort in descending order, add the `reverse=True` parameter:

```py
# Sorting in descending order
unsorted = (5, 2, 8, 1, 9, 3)
sorted_desc = tuple(sorted(unsorted, reverse=True))
print(sorted_desc)
```

Output:

```shell
(9, 8, 5, 3, 2, 1)
```
