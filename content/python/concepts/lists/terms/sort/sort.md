---
Title: '.sort()'
Description: 'Sorts the elements of a list in ascending or descending order.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Elements'
  - 'Lists'
  - 'Methods'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The Python **`.sort()`** method is used to sort list elements in ascending or descending order. It modifies the original list instead of returning a new one, making it a fast and memory-efficient operation for in-place sorting.

## Python `.sort()` Syntax

```pseudo
list.sort(key=None, reverse=False)
```

**Parameters:**

- `key` (Optional): A [function](https://www.codecademy.com/resources/docs/python/functions) that acts as a sorting key.
- `reverse` (Optional): A boolean value. If `True`, the list is sorted in descending order.

**Return value:**

Returns `None` because the sorting happens in place.

## Example 1: Sorting Numbers Using Python `.sort()`

This example uses Python `.sort()` to sort the `numbers` list in ascending and descending order:

```py
numbers = [5, 2, 9, 1, 7]

numbers.sort()
print("Ascending:", numbers)

numbers.sort(reverse=True)
print("Descending:", numbers)
```

Here is the output:

```shell
Ascending: [1, 2, 5, 7, 9]
Descending: [9, 7, 5, 2, 1]
```

## Example 2: Sorting Strings Using Python `.sort()`

This example uses Python `.sort()` to sort a list of [strings](https://www.codecademy.com/resources/docs/python/strings) in alphabetical order:

```py
fruits = ["apple", "banana", "cherry", "date"]

fruits.sort()

print(fruits)
```

Here is the output:

```shell
['apple', 'banana', 'cherry', 'date']
```

## Codebyte Example: Using Python `.sort()` with a Custom Key

This codebyte example uses Python `.sort()` with a custom key to sort a list of strings. The `key` parameter is set to `len`, so the list is sorted by word length instead of alphabetical order:

```codebyte/python
words = ["Python", "is", "amazing", "AI"]

words.sort(key=len)

print(words)
```

## Frequently Asked Questions

### 1. Is Python `.sort()` in place?

Yes. Python `.sort()` modifies the original list directly and returns `None`. If you need a sorted copy of the list, use the built-in `sorted()` function instead.

### 2. What is the use of `.sort()`?

Python `.sort()` is used to arrange list elements in ascending or descending order efficiently, with optional custom sorting rules via the `key` parameter.

### 3. What sort does Python use?

Python uses Timsort, a hybrid sorting algorithm derived from merge sort and insertion sort. It’s highly efficient for real-world data, with a time complexity of _O(n log n)_.
