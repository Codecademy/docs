---
Title: 'isinstance()'
Description: 'Checks if a given object is an instance of a specified type or class.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Booleans'
  - 'Data Types'
  - 'Development'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, the **`isinstance()`** function checks whether an object is an instance of a specified type, class, or a tuple of classes. If it is, the function returns `True`, otherwise it returns `False`. This check is useful for type validation in functions, debugging, and ensuring safe operations on data structures.

## Syntax

```pseudo
isinstance(object, class)
```

**Parameters:**

- `object`: The object, or a reference to the object, to be tested.
- `class`: The type to be used by the function in this assertion (e.g. `list`, `set`, etc.).

**Return value:**

If the given object is of the designated value type, the `isinstance()` function returns `True`, otherwise it returns `False`.

## Example 1: Basic Usage of `isinstance()`

This example uses the `isinstance()` function to check if the given value is a [string](https://www.codecademy.com/resources/docs/python/strings):

```py
value = "Hello World!"

if isinstance(value, str):
  print("String")
else:
  print("Not a string")
```

Here is the output:

```shell
String
```

## Example 2: Checking Against Multiple Types Using `isinstance()`

This example uses the `isinstance()` function to check if the given value is a [list](https://www.codecademy.com/resources/docs/python/lists) or [tuple](https://www.codecademy.com/resources/docs/python/tuples):

```py
data = [1, 2, 3]

if isinstance(data, (list, tuple)):
  print("List or tuple")
else:
  print("Not a list or tuple")
```

Here is the output:

```shell
List or tuple
```

## Codebyte Example: Custom Class Type Checking Using `isinstance()`

This codebyte example uses the `isinstance()` function to check if the given object belongs to a user-defined [class](https://www.codecademy.com/resources/docs/python/classes):

```codebyte/python
class Dog():
  pass

pet = Dog()

print(isinstance(pet, Dog))
```

Since the given object `pet` belongs to the user-defined class `Dog`, the code will return `True`.

## Frequently Asked Questions

### 1. What is the difference between `isinstance()` and `type()`?

`type()` checks for the exact type and does not consider inheritance, whereas `isinstance()` is preferred when you want to account for subclasses.

### 2. Is `isinstance()` faster or slower than `type()`?

Generally, `type()` is faster because it's a simpler check, but `isinstance()` is more flexible and recommended in most cases due to its support for inheritance.

### 3. Can `isinstance()` be used with abstract base classes?

Yes, `isinstance()` can be used with abstract base classes. This is common when working with interfaces or abstract classes using the `abc` module.
