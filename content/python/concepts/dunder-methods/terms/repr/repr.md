---
Title: '__repr__()'
Description: 'Returns the string representation of the class'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Attributes'
  - 'Classes'
  - 'Functions'
  - 'Methods'
  - 'Objects'
  - 'OOP'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`__repr__()`** method is a special method in Python that returns a string representation of an object. This method is one of Python's [dunder](https://www.codecademy.com/resources/docs/python/dunder-methods) (double underscore) methods that provides an "official" string representation of an object. The intention is to create a representation that is unambiguous and, if possible, a valid Python expression that could be used to recreate the object.

The `__repr__()` method is primarily utilized for debugging and development purposes. When printing an object or displaying it in an interactive session, Python calls this method to determine the appropriate string to show. This method is also employed when objects are displayed in collections like lists and dictionaries. Implementing a clear and informative `__repr__()` method enhances debugging and logging significantly, especially for custom objects.

## Syntax

```pseudo
def __repr__(self):
  # Code to generate a string representation
  return string
```

**Parameters:**

- `self`: Reference to the instance of the class.

**Return value:**

- The `__repr__()` method returns a string that represents the object in a way that would ideally allow it to be recreated.

## Example 1: Basic Implementation

This example demonstrates a simple implementation of the `__repr__()` method in a custom class.

```py
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __repr__(self):
    # Return a string that could be used to recreate the object
    return f"Person('{self.name}', {self.age})"

# Create a Person object
person = Person("Alice", 30)

# When we print the object, __repr__() is called
print(person)  # Output: Person('Alice', 30)

# This is also used in collections
people = [Person("Alice", 30), Person("Bob", 25)]
print(people)
```

The output produced by this code will be:

```shell
Person('Alice', 30)
[Person('Alice', 30), Person('Bob', 25)]
```

In this example, the `__repr__()` method returns a string that represents the `Person` object in a way that could be used to recreate the object. When the object is printed or included in a collection, Python calls this method to obtain a string representation.

## Example 2: Recreating Objects with `eval()`

One powerful feature of a well-implemented `__repr__()` method is that it can allow objects to be recreated using [`eval()`](https://www.codecademy.com/resources/docs/python/built-in-functions/eval). This example demonstrates this capability.

```py
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __repr__(self):
    return f"Point({self.x}, {self.y})"

  def distance_from_origin(self):
    return (self.x ** 2 + self.y ** 2) ** 0.5

# Create a Point object
p1 = Point(3, 4)
print(p1)

# We can use the string representation to recreate the object
p1_repr = repr(p1)  # Get the string representation
p2 = eval(p1_repr)  # Create a new object from the string

# p2 is a new object with the same values
print(p2)
print(p2.distance_from_origin())

# Verify they're different objects
print(p1 is p2)
```

The output produced by this code is as follows:

```shell
Point(3, 4)
Point(3, 4)
5.0
False
```

In this example, the `repr()` function is used to obtain the string representation of a `Point` object. The `eval()` function then creates a new `Point` object with the same values. This is achievable because the `__repr__()` method returns a string that serves as a valid Python expression for creating a `Point` object.

## Codebyte Example: Custom Collection Class

This example shows how to implement `__repr__()` for a custom collection class.

```py
class ShoppingCart:
  def __init__(self, owner):
    self.owner = owner
    self.items = {}

  def add_item(self, item, quantity=1):
    self.items[item] = self.items.get(item, 0) + quantity

  def __repr__(self):
    items_repr = ", ".join(f"'{item}': {qty}" for item, qty in self.items.items())
    return f"ShoppingCart('{self.owner}')" + (f".add_multiple({{{items_repr}}})" if self.items else "")

  def add_multiple(self, items_dict):
    for item, qty in items_dict.items():
      self.add_item(item, qty)
    return self  # Allow method chaining

# Create a shopping cart and add items
cart = ShoppingCart("John")
cart.add_item("apple", 5)
cart.add_item("banana", 2)

print(cart)  # Output: ShoppingCart('John').add_multiple({'apple': 5, 'banana': 2})

# This representation can be useful for debugging
empty_cart = ShoppingCart("Alice")
print(empty_cart)  # Output: ShoppingCart('Alice')
```

This example demonstrates a more complex `__repr__()` implementation for a custom collection class. The representation includes not just the initialization but also a method call to recreate the current state of the object. While this representation isn't as easy to use with [`eval()`](https://www.codecademy.com/resources/docs/python/built-in-functions/eval), it provides a complete picture of the object's state, which is valuable for debugging.

## Frequently Asked Questions

### 1. What's the difference between `__repr__` and `__str__`?

`__repr__()` is meant to be unambiguous and should ideally return a string that can be used to recreate the object. It's primarily for developers. `__str__()` is meant to be readable and is intended for users. If `__str__()` is not defined, Python falls back to `__repr__()`.

### 2. Does `print()` use `__str__` or `__repr__`?

The `print()` function calls `__str__()` if it's defined, otherwise it falls back to `__repr__()`. In contrast, the interactive interpreter directly calls `__repr__()` when displaying objects.

### 3. What are dunder methods?

Dunder methods (short for "double underscore" methods) are special methods in Python that have double underscores at the beginning and end of their names. They allow classes to define how built-in functions and operators work with instances of the class, enabling operator overloading and other custom behaviors.
