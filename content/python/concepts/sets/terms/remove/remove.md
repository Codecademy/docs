---
Title: '.remove()'
Description: 'Removes the specified element from a set.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Collections'
  - 'Sets'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`.remove()`** method removes a specified element from a [set](https://www.codecademy.com/resources/docs/python/sets). If the element is not found, it raises a [`KeyError`](https://www.codecademy.com/resources/docs/python/errors).

## Syntax

```pseudo
set.remove(element)
```

- `set`: The set from which the element is to be removed.
- `element`: The element to be removed from the set.

## Example

The below example shows the usage of the `.remove()` method:

```py
# Creating a set
my_set = {1, 2, 3, 4, 5}

# Removing '4' from the set
my_set.remove(4)

# Printing the modified set
print(my_set)

# Removing '6' from the set
my_set.remove(6)

# Printing the modified set
print(my_set)
```

The above code produces the following output:

```shell
{1, 2, 3, 5}
KeyError: 6
```

In the above example, the `.remove()` method raises a `KeyError` since the element `6` doesn't exist in `my_set`.

## Codebyte Example

Below is a codebyte example demonstrating the use of the `.remove()` method:

```codebyte/python
my_set = {'a', 'e', 'i'}

my_set.remove('e')

print(my_set)
```
