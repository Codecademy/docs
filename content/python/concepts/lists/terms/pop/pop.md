---
Title: '.pop()'
Description: 'Removes an element at the specified position from a list and returns it.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.pop()`** method in Python removes an element from a [list](https://www.codecademy.com/resources/docs/python/lists) at a specified index and returns that element. The `.pop()` method directly modifies the original list by removing the element at the given position. If no index is provided, it removes and returns the last element by default.

Lists in Python are mutable sequences, and the `.pop()` method provides an efficient way to manipulate these lists dynamically. This is particularly useful in scenarios such as implementing stacks (using `.pop()` without an index) and queues (using `.pop(0)`), managing task lists, or processing data collections where items need to be removed after processing.

## Syntax

```pseudo
list_name.pop(index)
```

**Parameters:**

- `index` (optional): The position of the element to remove. Defaults to `-1` (the last item) if not provided.

**Return value:**

- The `.pop()` method returns the removed item from the specified index. If the index is out of range, it raises an `IndexError`.

## Example 1: Basic Usage of `.pop()` in Python Lists

This example demonstrates how to use the `.pop()` method to remove the last element from a list:

```py
# Creating a list of numbers
numbers = [10, 20, 30, 40, 50]

# Removing the last element using pop()
last_element = numbers.pop()

# Displaying the removed element and updated list
print("Removed element:", last_element)
print("Updated list:", numbers)
```

This example results in the following output:

```shell
Removed element: 50
Updated list: [10, 20, 30, 40]
```

The `.pop()` method removes the last element 50 from the list and returns it. The original list is modified to contain only the remaining elements.

## Example 2: Removing Elements at Specific Positions

This example shows how to remove elements from specific positions in a list using the `.pop()` method with an index parameter:

```py
# Creating a list of fruits
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"]

# Removing element at index 2 (the third element)
removed_fruit = fruits.pop(2)

print("Removed fruit:", removed_fruit)
print("Updated fruit list:", fruits)

# Removing the first element (index 0)
first_fruit = fruits.pop(0)

print("Removed first fruit:", first_fruit)
print("Final fruit list:", fruits)
```

This example results in the following output:

```shell
Removed fruit: Orange
Updated fruit list: ['Apple', 'Banana', 'Mango', 'Kiwi']
Removed first fruit: Apple
Final fruit list: ['Banana', 'Mango', 'Kiwi']
```

In this example, the element at index 2 ("Orange") is removed first, followed by the removal of the element at index 0 ("Apple"). After each operation, the list is updated, and the removed element is returned.

## Codebyte Example: Implementing a Stack with `.pop()`

This example demonstrates how to implement a simple stack (Last-In-First-Out data structure) using the `.pop()` method:

```codebyte/python
# Implementing a stack using a list
stack = []

# Adding elements to the stack (push operation)
stack.append("Task 1")
stack.append("Task 2")
stack.append("Task 3")

print("Stack after adding elements:", stack)

# Removing elements from the stack (pop operation)
# Processing tasks in reverse order (LIFO - Last In, First Out)
while stack:
  current_task = stack.pop()
  print(f"Processing: {current_task}")

print("Stack after processing all tasks:", stack)
```

In this example, a stack is created using a list and three elements are added to it. Then, the `.pop()` method is used without an index to remove and process the elements in Last-In-First-Out (LIFO) order, which is characteristic of a stack data structure.

## Frequently Asked Questions

### 1. What happens if I try to pop from an empty list?

Attempting to pop from an empty list will raise an `IndexError`. Here's an example:

```py
empty_list = []
try:
  empty_list.pop()
except IndexError as e:
  print(f"Error: {e}")
```

**Output:**

```shell
Error: pop from empty list
```

### 2. Is `.pop()` more efficient than other methods for removing elements?

Yes, `.pop()` is generally more efficient than other methods like `.remove()` when you know the index of the element to remove. It has `O(1)` time complexity when removing the last element (default) and `O(n)` when removing from other positions due to the need to shift elements.

### 3. How does `.pop()` differ from `.remove()`?

- `.pop(index)`: Removes the element at the specified index and returns it. Raises an `IndexError` if the list is empty or the index is out of range.
- `.remove(value)`: Finds the first occurrence of the specified value and removes it without returning anything. Raises a `ValueError` if the specified value is not found in the list.

### 4. Can I use negative indices with `.pop()`?

Yes, you can use negative indices with `.pop()`. For example, `list.pop(-1)` removes the last item, `list.pop(-2)` removes the second-to-last item, and so on.

### 5. Does `.pop()` create a copy of the list?

No, `.pop()` modifies the original list in-place and does not create a copy.
