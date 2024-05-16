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

In Python, the **`.remove()`** method removes a specified element from a [set](https://www.codecademy.com/resources/docs/python/sets). If the element is not found, it raises a [KeyError](https://www.codecademy.com/resources/docs/python/errors).

## Syntax

```pseudo
set.remove(element)
```

- `set`: The set from which the element will be removed.
- `element`: The element to be removed from the set. If the element is not present in the set, a `KeyError` will be raised.

## Example

The below example shows the usage of the `.remove()` method:

```py
my_set = {1, 2, 3, 4, 5}

# Remove element 4 from the set
my_set.remove(4)

# Print the set after removing the element 4
print(my_set)  

# Try to remove element 6 which is not present in the set
my_set.remove(6)

# Print the set after removing the element 6, which is not present in the set
print(my_set)
```

The above code produces the following output:

```shell
{1, 2, 3, 5}
KeyError: 6
```

In the example above, it is demonstrated how the `.remove()` method can raise a `KeyError` when attempting to remove an element that doesn't exist in the set. The `KeyError` occurs because the `.remove()` method expects the specified element to be present in the set, and it cannot remove an element that is not there. Therefore, when trying to remove the element `6`, which was not present in the set, it resulted in the `KeyError` being raised.

## Codebyte Example

Below is a codebyte example demonstrating the use of the `.remove()` method:

```codebyte/python
# create a set A
my_set= {'a', 'e', 'i'}

# Remove element e from the set
my_set.remove("e")
print(my_set)
```
