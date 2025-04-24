---
Title: '.count()'
Description: 'Returns the number of occurrences of a specified element in a list.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.count()`** is a [built-in function](https://www.codecademy.com/resources/docs/python/built-in-functions) in Python [lists](https://www.codecademy.com/resources/docs/python/lists) that returns the number of occurrences of a specified element. This function provides an efficient way to count how many times a particular value appears in a list without writing custom loops or conditional statements.

It's commonly used in data analysis, frequency counting, and validation scenarios where you need to track the occurrence of specific elements.

## Syntax

```pseudo
list.count(value)
```

**Parameters:**

- `value`: The element to count in the list.

**Return value:**

- The `.count()` function returns an **integer** representing the number of times the specified element appears in the list.

## Example 1: Basic Usage of `.count()`

This example demonstrates how to use the `.count()` function to find the number of occurrences of a specific element in a list:

```py
numbers = [1, 2, 3, 1, 4, 1, 5]
count = numbers.count(1)
print(f"The number 1 appears {count} times in the list.")
```

This example results in the following output:

```shell
The number 1 appears 3 times in the list.
```

The `.count()` function iterates through the list and counts how many times the value 1 appears, which is 3 times.

## Example 2: Counting Elements in Lists with Mixed Data Types

The `.count()` function works with lists containing different data types, including strings, numbers, and even boolean values:

```py
mixed_list = [True, 'apple', 42, 'apple', False, 'apple', 1]
count_apple = mixed_list.count('apple')
count_true = mixed_list.count(True)

print(f"'apple' appears {count_apple} times in the list.")
print(f"True appears {count_true} times in the list.")
```

This example results in the following output:

```shell
'apple' appears 3 times in the list.
True appears 2 times in the list.
```

Note that `.count()` counts `True` and `1` as separate elements, even though they are equivalent in boolean operations.

## Codebyte Example: Finding the Most Frequent Element in a List

This example demonstrates how to use `.count()` to find the most frequently occurring element in a list. It demonstrates a simple technique that works with any type of list elements and provides a practical application of frequency counting:

```codebyte/python
# Find the most frequent element in a list using .count()
def find_most_frequent(elements):
  if not elements:
    return None

  most_common = elements[0]
  highest_count = elements.count(most_common)

  for element in set(elements):
    current_count = elements.count(element)
    if current_count > highest_count:
      most_common = element
      highest_count = current_count

  return most_common, highest_count

# Example with a list of numbers
numbers = [3, 7, 2, 7, 3, 7, 5, 7, 6]
most_frequent_number, count = find_most_frequent(numbers)
print(f"Most frequent number: {most_frequent_number} (appears {count} times)")

# Example with a list of strings
fruits = ['apple', 'banana', 'apple', 'orange', 'grape', 'apple', 'kiwi']
most_frequent_fruit, count = find_most_frequent(fruits)
print(f"Most frequent fruit: {most_frequent_fruit} (appears {count} times)")
```

## Frequently Asked Questions

### 1. Can `.count()` be used with nested lists?

Yes, the `.count()` method can count nested lists as elements, but it doesn't search within them. It treats each nested list as a single element and only counts exact matches.

```py
nested_list = [1, [2, 3], 4, [2, 3], 5]
count = nested_list.count([2, 3])
print(f"The sublist [2, 3] appears {count} times.")
# Output: The sublist [2, 3] appears 2 times.
```

### 2. Does `.count()` distinguish between uppercase and lowercase in strings?

When used with lists containing strings, `.count()` is case-sensitive. It treats uppercase and lowercase letters as different elements.

```py
words = ['Python', 'python', 'PYTHON', 'Python']
count_lower = words.count('python')
count_title = words.count('Python')
print(f"'python' appears {count_lower} time(s).")
print(f"'Python' appears {count_title} time(s).")
# Output:
# 'python' appears 1 time(s).
# 'Python' appears 2 time(s).
```

### 3. Is the `.count()` method time-efficient for large lists?

The `.count()` method has a time complexity of O(n), where n is the length of the list. This means it needs to iterate through the entire list to count occurrences. For very large lists where you need to count multiple elements, it might be more efficient to use a dictionary or Counter from the collections module.
