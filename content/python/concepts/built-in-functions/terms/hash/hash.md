---
Title: 'hash()'
Description: 'Returns the hash value as a fixed sized integer.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Integers'
  - 'Functions'
  - 'Input'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The built-in **`hash()`** function returns a fixed-size integer hash value for an object, such as numbers, strings, tuples, or custom objects implementing the `__hash__()` method. Using type-specific algorithms, it facilitates efficient dictionary key comparisons during lookups. It can be used directly without requiring any imports.

## Syntax

```pseudo
hash(object)
```

The `hash()` function takes a single argument, `object`, which represents the object from which to obtain the hash value.

The `object` can be of any hashable type, such as numbers, strings, tuples, or custom objects that implement the `__hash__()` method.

## Example

The example below defines a class called `MyClass`, with an attribute called `value`. The `__hash__()` method is implemented to customize the hashing behavior based on the `value` attribute.

Two instances of `MyClass`, `obj1` and `obj2`, are created with different values. The `hash()` function is used to calculate the hash values of these objects. These values are then printed to the console.

This example demonstrates how to customize the hash function for a custom class using the `__hash__()` method.

```py
# Define a class
class MyClass:
    def __init__(self, value):
        self.value = value

    def __hash__(self):
        return hash(self.value)

# Create instances of MyClass
obj1 = MyClass(42)
obj2 = MyClass("Hello")

# Check the hash values
print(hash(obj1))
print(hash(obj2))
```

## Codebyte Example

In the example below, we define `my_tuple` as `(1, 2, 3)`. Subsequently, we use the `hash()` function to obtain the hash value of the input `my_tuple`. Then, we print the output of the `hash()` function.

```codebyte/python
my_tuple = (1, 2, 3)
hash_value = hash(my_tuple)
print(hash_value)
```
