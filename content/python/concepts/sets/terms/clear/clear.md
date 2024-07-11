---
Title: '.clear()'
Description: 'Removes all elements from a set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.clear()`** method removes all elements from a set, resulting in an empty set. This method does not return any value.

> **Note:** The `.clear()` method performs the operation in-place, modifying the original set rather than creating a new one.

## Syntax

```pseudo
set_object.clear()
```

- `set_object`: The set from which all elements will be removed.

## Example

In the example below, the `.clear()` method is used to remove all elements from the `pets` set, leaving it empty:

```py
pets = {"cats", "dogs", "hamsters", "lizards", "turtles"}
print("Original set:", pets)

pets.clear()
print("After calling clear() on pets:", pets)
```

The resulting output will look like this:

```shell
Original set: {'hamsters', 'dogs', 'turtles', 'cats', 'lizards'}
After calling clear() on pets: set()
```

> **Note:** A set in Python is unordered. That's why the order of items in `Original set` may appear different in the above output.

## Codebyte Example

Run the following code to see how the `.clear()` method works:

```codebyte/python
cat_breeds = {"Persian", "Sphynx", "Siamese", "Maine Coon", "Bengal"}
print("Cat Breeds:", cat_breeds)

cat_breeds.clear()
print(cat_breeds)
```
