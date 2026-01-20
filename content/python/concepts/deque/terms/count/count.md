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

The **`count()`** method of a [`collections.deque`](https://www.codecademy.com/resources/docs/python/collections-module/deque) object counts how many times a given value appears in the deque. It provides a direct way to determine the frequency of a specific element within the deque container.

## Syntax

```pseudo
deque_object.count(value)
```

**Parameters:**

- `value`: The element whose occurrences are to be counted in the deque.

**Return value:**

Returns an integer representing the number of elements in the deque that are equal to `value`.

## Example 1: Using `count()` to find repeated values

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

## Example 2: Counting non-existent elements returns zero

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

### 1. What is the time complexity of the `count()` method in Python deque?

The `count()` method has `O(n)` time complexity, where n is the number of elements in the deque. This is because the method must iterate through all elements in the deque to count occurrences of the specified value.

### 2. What does `count()` return if the element is not found in the deque?

The `count()` method returns 0 if the specified element is not present in the deque. It does not raise an exception or return None, it simply indicates that there are zero occurrences of that value.

### 3. How does `count()` determine equality when counting elements?

The `count()` method uses the equality operator `(==)` to compare elements. For custom objects, it will use the object's `__eq__()` method if defined. Two objects are considered equal if `obj1 == obj2` evaluates to True.
