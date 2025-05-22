---
Title: '.insert()'
Description: 'Adds an element to a specific index in a list.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Lists'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Python, the **`.insert()`** method adds an element at a specific index in a list, shifting subsequent elements to the right.

## Syntax

```pseudo
list.insert(index, element)
```

**Parameters:**

- `index`: The position in the list where the element is to be added. If the index is greater than the length of the list, the element is added to the end of the list.
- `element`: The element to be added to the list.

**Return value:**

The `.insert()` method modifies the original list in place and does not return anything.

## Example 1: Basic Usage of `.insert()`

This example adds the [string](https://www.codecademy.com/resources/docs/python/strings) `"orange"` to index `1` in the `fruits` list:

```py
# Create a list
fruits = ["apple", "banana", "cherry"]

# Add "orange" to index '1' in the list
fruits.insert(1, "orange")

# Print the list
print(fruits)
```

Here is the output:

```shell
['apple', 'orange', 'banana', 'cherry']
```

## Example 2: Adding to the Beginning of the List Using `.insert()`

This example adds the number `1` to the beginning (index `0`) of the `numbers` list:

```py
# Create a list
numbers = [2, 3, 4, 5]

# Add the number '1' to the beginning of the list
numbers.insert(0, 1)

# Print the list
print(numbers)
```

Here is the output:

```shell
[1, 2, 3, 4, 5]
```

## Codebyte Example: Using Out-of-Bounds Index with `.insert()`

This codebyte example attempts to add the string `"purple"` to index `10` in the `colors` list:

```codebyte/python
# Create a list
colors = ["red", "green", "blue"]

# Add "purple" to index '10' in the list
colors.insert(10, "purple")

# Print the list
print(colors)
```

Though the index `10` is out of bounds for the list, Python will gracefully add `"purple"` to the end of the list.

## Frequently Asked Questions

### 1. What happens if I pass a negative index to `.insert()`?

Passing a negative index to `.insert()` will make it start counting from the end of the list.

### 2. Can I insert multiple elements at once using `.insert()`?

No, `.insert()` only allows the addition of a single element at a time.

### 3. Is `.insert()` efficient for large lists?

Not particularly. Since `.insert()` requires shifting elements to accommodate the new item, inserting near the beginning of a large list can be slow. For frequent insertions, consider using `collections.deque`.
