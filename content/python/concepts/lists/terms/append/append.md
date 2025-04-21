---
Title: '.append()'
Description: 'Adds a single item to the end of a list in Python.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.append()`** method adds a single item to the end of an existing Python list. [Lists](https://www.codecademy.com/resources/docs/python/lists) in Python are mutable sequences that can store multiple items of different [data types](https://www.codecademy.com/resources/docs/python/data-types). When new elements need to be added to a list after it's been created, the `.append()` method provides a simple and efficient way to add items to the end of the list.

## Syntax

```pseudo
list.append(item)
```

**Parameters:**

- `item`: An element of any data type (string, number, list, etc.) to be added to the end of the list.

**Return value:**

The method doesn't return any value (returns `None`). It modifies the original list in-place.

## Example 1: Adding an item to a list

This example demonstrates how to add an item to the end of a list:

```py
# Create a list of fruits
fruits = ['apple', 'banana', 'cherry']

# Add 'orange' to the list
fruits.append('orange')

# Print the updated list
print(fruits)
```

This example results in the following output:

```shell
['apple', 'banana', 'cherry', 'orange']
```

The original list `fruits` has been modified to include `'orange'` as the last element. The `.append()` method added the new item directly to the end of the list.

## Example 2: Adding list to a list

When appending a list to another list, the entire list is added as a single element:

```py
# Create a list of fruits
fruits = ['apple', 'banana', 'cherry']

# Create a list of berries
berries = ['strawberry', 'blueberry']

# Append the berries list to the fruits list
fruits.append(berries)

# Print the updated list
print(fruits)
```

This example will generate the following output:

```shell
['apple', 'banana', 'cherry', ['strawberry', 'blueberry']]
```

Notice that the `berries` list has been added as a single item to the `fruits` list, creating a nested list structure. To add each element individually instead, the [`.extend()`](https://www.codecademy.com/resources/docs/python/lists/extend) method would be more appropriate.

## Codebyte example: Demonstrating `.append()` in Python

This example demonstrates how to use `.append()` to add various items including strings, numbers, and lists to a Python list:

```codebyte/python
# Create an empty shopping list
shopping_list = []

# Add items to the shopping list
shopping_list.append('bread')
shopping_list.append('milk')
shopping_list.append('eggs')

print("Shopping list:", shopping_list)

# Add a numeric item to the list
shopping_list.append(3)  # Number of apples

print("Updated shopping list:", shopping_list)

# Append a nested list
shopping_list.append(['cheese', 'butter'])

print("Final shopping list:", shopping_list)

# Access the nested list items
print("Dairy items:", shopping_list[4])
```

## Frequently Asked Questions

### 1. What is `.append()` and `.extend()` in Python?

`.append()` adds a single item to the end of a list as one element, even if that item is itself a list. `.extend()` adds individual elements from an iterable (like another list) to the end of the current list. For example:

```py
list1 = [1, 2, 3]
list1.append([4, 5])  # Results in [1, 2, 3, [4, 5]]
list2 = [1, 2, 3]
list2.extend([4, 5])  # Results in [1, 2, 3, 4, 5]
```

### 2. When can I use append?

You can use `.append()` whenever you need to add a single item to the end of an existing list. Common use cases include:

- Building a list dynamically as you collect data
- Adding user input to a list
- Accumulating results in a calculation
- Constructing a list step by step in algorithms

### 3. How to append a string?

Appending a string to a list works just like appending any other item. The string becomes a single element in the list:

```py
words = ['hello', 'world']
words.append('python')  # Results in ['hello', 'world', 'python']
```

If you want to append each character of a string separately, you can use the `.extend()` method instead:

```py
letters = ['a', 'b', 'c']
letters.extend('def')  # Results in ['a', 'b', 'c', 'd', 'e', 'f']
```
