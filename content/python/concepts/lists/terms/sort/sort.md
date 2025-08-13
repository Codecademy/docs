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

### 1. What does `list.sort()` return in Python?

The `list.sort()` method returns `None` because it sorts the list **in place**, modifying the original list rather than creating a new one.

### 2. Why is `sort()` returning `None`?

`sort()` always returns `None` to signal that the original list has been modified directly. If you need a new sorted list without changing the original, use the `sorted()` function instead.

### 3. When you use `sort()` does it permanently change the list?

Yes, `sort()` permanently changes the order of elements in the list. The original order is lost unless you make a copy before sorting.

### 4. How to sort a list without using the `sort()` function?

You can use the built-in `sorted()` function to return a new sorted list, or implement custom sorting logic such as bubble sort, selection sort, or quicksort.

### 5. What is the difference between the `sort()` method and the `sorted()` function?

- `sort()` is a method available only to lists, sorts in place, and returns `None`.
- `sorted()` is a built-in function that works with any iterable, returns a new sorted list, and leaves the original data unchanged.
