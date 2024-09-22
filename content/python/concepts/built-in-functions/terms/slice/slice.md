---
Title: 'slice()'
Description: 'Returns a slice object from a given sequence such as a string, tuple, list, etc.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Data Structures'
  - 'Functions'
  - 'Properties'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`slice()`** function is used to create a slice object from a given sequence (e.g., a string, tuple, list, etc.).

## Syntax

```pseudo
slice(start, stop, step)
```

- `start`: This optional integer indicates where the slicing of the object begins. The default value is `None` if not provided.
- `stop`: This integer indicates up to where the slicing takes place. It stops at index `stop-1` (the last element of the sequence).
- `step`: This optional integer fixes the increment between each index for slicing. The default value is `None` if not provided.

## Example

The following example shows the use of the `slice()` function:

```py
# Create a tuple with some values in it
fruits = ("Apple", "Banana", "Orange", "Kiwi", "Strawberry", "Plum", "Watermelon")

# Create a slice object
a = slice(3)

# Return the resultant slice object
print(fruits[a])
```

The output of the code is as follows:

```shell
('Apple', 'Banana', 'Orange')
```

## Codebyte Example

The following codebyte example demonstrates how the `slice()` function is used to create a slice object from a given sequence (here, a string) between a defined range:

```codebyte/python
my_string = 'CompetitiveProgramming'
slice_obj1 = slice(5)
slice_obj2 = slice(1, 8, 2)

print("Resulting slices:")
print(my_string[slice_obj1])
print(my_string[slice_obj2])
```
