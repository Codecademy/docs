---
Title: 'Sets'
Description: 'Stores unordered collections of unique elements.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Data Types'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **set** in Python is an unordered collection of unique elements. Sets store multiple items in a single variable and automatically eliminate duplicates. Unlike [lists](https://www.codecademy.com/resources/docs/python/lists) or [tuples](https://www.codecademy.com/resources/docs/python/tuples), sets do not maintain insertion order and cannot contain mutable objects such as lists or [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries). Sets are particularly useful for membership testing, eliminating duplicates from sequences, and performing mathematical set operations such as union, intersection, and difference.

Sets are implemented using [hash tables](https://www.codecademy.com/resources/docs/general/data-structures/hash-table), which allows for highly efficient operations, especially when working with large data collections.

## Syntax

```pseudo
# Creating a set using curly braces
my_set = {element1, element2, element3}

# Creating a set using the set() constructor
my_set = set(iterable)
```

**Parameters:**

- `elements`: Items of any immutable data type
- `iterable`: Any iterable object (list, tuple, string, etc.)

**Return Value:**

- Returns a set object containing unique, unordered elements from the input.

## Example - Basic usage of set

This example demonstrates how to create and use a set in Python, and how it automatically removes duplicate values.

```py
# Create a set using curly braces
numbers = {1, 2, 3, 4, 5, 2, 3}
print(numbers)

# Check if an element exists in the set
print(2 in numbers)
print(10 in numbers)

# Create a set using the set() constructor with a list
fruits = set(["apple", "banana", "cherry", "apple"])
print(fruits)
```

This example will generate the following output:

```shell
{1, 2, 3, 4, 5}
True
False
{'apple', 'banana', 'cherry'}
```

## Codebyte Example

In the example below, sets are created with lists and the `set()` function. The following observations can be made:

- When the `animals` set is initialized without parameters, the empty set is displayed as `set()`.
- The `dog_breeds` set contains duplicates, but only one instance of each value is retained when printed.

```codebyte/python
animals = set()
print(animals)

animals = set(['aardvark', 'snail', 'squid'])
oceans = {'Pacific', 'Atlantic', 'Indian', 'Southern', 'Arctic'}
dog_breeds = {'pug', 'golden retriever', 'corgi', 'pug', 'corgi'}

print("Animals:", animals)
print("Oceans:", oceans)
print("Dog Breeds:", dog_breeds)
```

## Frequently Asked Questions

### 1. What is the difference between set and list in Python?

**Sets** are unordered collections of unique elements, while **lists** are ordered collections that can contain duplicate elements. Sets are faster for membership testing (checking if an element exists) due to their hash-based implementation. Lists maintain insertion order and allow indexed access to elements, whereas sets do not support indexing or slicing. Lists can contain any data type including mutable objects, while sets can only contain immutable (hashable) objects.

### 2. Is set mutable or immutable in Python?

**Sets** in Python are **mutable**, meaning you can add or remove elements after creation using methods like [`.add()`](https://www.codecademy.com/resources/docs/python/sets/add), [`.remove()`](https://www.codecademy.com/resources/docs/python/sets/remove), [`.discard()`](https://www.codecademy.com/resources/docs/python/sets/discard), [`.update()`](https://www.codecademy.com/resources/docs/python/sets/update), and [`.clear()`](https://www.codecademy.com/resources/docs/python/sets/clear). If you need an immutable version of a set, you can use a [**frozenset**](https://www.codecademy.com/resources/docs/python/built-in-functions/frozenset), which has the same characteristics as a set but cannot be modified after creation.

### 3. Do sets have indexes?

No, sets in Python do not have indexes. Since sets are unordered collections, they do not support indexing, slicing, or other sequence-like operations. You cannot access set elements by position. If you need to access elements by index, you should use a list or tuple instead. To iterate through all elements in a set, you can use a for loop.
