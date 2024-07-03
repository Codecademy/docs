---
Title: '.add()'
Description: 'Adds a specified single element to a set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.add()`** method adds a specified single element to a set if it is not already present, thus maintaining its unique elements property. If the element is already present in the set, the operation has no effect. The method modifies the set in-place.

> **Note:** If no argument is provided to `.add()` method, it raises an error.

## Syntax

```pseudo
set.add(element)
```

- `set`: The set to which an element will be added.
- `element`: The element to be added to the set. Only one element can be added per method call.

## Example

The following example demonstrates the use of the `.add()` method:

```py
# Create a set
set_1={1,2,4,5}

# Using .add() method to add a new unique element to set_1
set_1.add(3)

# Print the set with the additional element.
print(set_1)

# Using .add() method to add an existing element 2 to set_1
set_1.add(2)

# Print the set with no changes
print(set_1)
```

The code example above will produce the following output:

```shell
{1, 2, 3, 4, 5}
{1, 2, 3, 4, 5}
```

## Codebyte Example

```codebyte/python
# create empty set
numbers = set()

numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(5)

print(numbers)
```

> **Note:** To create an empty set, use `set()` instead of `{}`, as the latter creates an empty [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries).
