---
Title: '.add()' 
Description: 'Adds a specified element to a set, ensuring no duplicates.' 
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

In Python, the **`.add()`** method adds an element to a set if it is not already present, thus maintaining its unique element property. However, if no value is provided in the parenthesis, it will cause an error or, if the element is already present in the set, the set remains unchanged.

## Syntax

```pseudo
set.add(elem)
```

- `set`: The name of the set to add an element to.
- `elem`: The element to be added to the set. Only one element can be added at a time.

## Example

The following example denotes the `.add()` method in use:

```py
# Make a set
set_1={1,2,4,5}

# Using .add() to add the number 3 to set_1. 3 doesn't exist in set_1.
set_1.add(3)

# Print the set with the additional element.
print(set_1)

# Using .add to add the number 2 to set_1. Since 2 already exists in set_1, there will be no change.
set_1.add(2)

# Print the unchanged set
print(set_1)
```

The code above generates the output as follows:

```shell
{1, 2, 3, 4, 5}
{1, 2, 3, 4, 5}
```

> **Note:** Initialize an empty set using `{}` before adding elements to ensure error-free operations.

## Codebyte Example 

```codebyte/python
numbers={1,2,3}
numbers.add(5)

print(numbers)
```
