---
Title: 'count()'
Description: 'Returns the number of occurrences of a specified element in a deque.'
Subjects:
  - 'Computer Science'
  - 'Data Structures'
Tags:
  - 'Collections'
  - 'Deque'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`count()`** method of a `collections.deque` object counts how many times a given value appears in the [deque](https://www.codecademy.com/resources/docs/java/deque). It provides a direct way to determine the frequency of a specific element within the deque container.

## Syntax

```pseudo
deque_object.count(value)
```

**Parameters:**

- `value`: The element whose occurrences are to be counted in the deque.

**Return value:**

Returns an integer representing the number of elements in the deque that are equal to `value`.

## Example 1

In this example, the `count()` method is used to find how many times the value `3` appears in a deque:

```py
from collections import deque

dq = deque([1, 2, 3, 3, 4, 3, 5])
print(dq.count(3))
```

The output of this code is:

```shell
3
```

## Example 2

In this example, the method counts an element not present in the deque, returning zero:

```py
from collections import deque

dq = deque([10, 20, 30, 40])
print(dq.count(100))
```

The output of this code is:

```shell
0
```

## Codebyte Example

In this example, the `count()` method is used to compute the frequency of a specific item in a deque of strings representing colours:

```codebyte/python
from collections import deque

colours = deque(['red', 'blue', 'red', 'green', 'blue', 'red'])
target_colour = 'red'
count_red = colours.count(target_colour)
print(f"The colour {target_colour!r} appears {count_red} times in the deque.")
```

## Frequently Asked Questions

### 1. What does `size()` do in C++?

The `size()` member function returns the number of elements currently stored in a container such as `std::deque`, `std::vector`, or `std::list`, typically in constant time.

### 2. What is a deque function in C++?

A deque (double-ended queue) in C++ is an STL container that allows efficient insertion and removal of elements at both the front and back, with functions like `push_back()`, `pop_front()`, `size()`, and others.

### 3. How to get the size of a deque in C++?

By calling the `size()` method on the deque object (e.g., `d.size()`), which returns an unsigned integral value (`size_type`) indicating the element count.
