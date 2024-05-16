---
Title: '.remove()'
Description: 'Removes a specified element from a set.'
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

In Python, the **`.remove()`** method removes a specified element from a [set](https://www.codecademy.com/resources/docs/python/sets). If the element is not found, it raises  [KeyError](https://www.codecademy.com/resources/docs/python/errors).

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

# Output: {1, 2, 3, 5}
print(my_set)  

# Try to remove element 6 which is not present in the set
try:
    my_set.remove(6)
except KeyError:
    print("Element 6 is not present in the set")

# Output: Element 6 is not present in the set
```

The above code produces the following output:

```shell
{1, 2, 3, 5}
Element 6 is not present in the set
```

In the above example, we use a `try-except` block to handle the `KeyError` that would be raised if we attempted to remove an element `(6)` that doesn't exist in the set.

## Codebyte Example

Here is a codebyte example demonstrating the use of the `.remove()` method:

```codebyte/python
# create a set A
my_set= {'a', 'e', 'i'}

# Remove element e from the set
my_set.remove("e")
print(my_set)

```
