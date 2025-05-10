---
Title: 'Dictionaries'
Description: 'A dictionary is a data set of key-value pairs.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Dictionaries'
  - 'Python'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A dictionary is a data set of key-value pairs. It provides a way to map pieces of data to each other and allows for quick access to values associated with keys.

In Python, dictionaries are dynamic and mutable, which means they can change.

> **Note:** As of Python version 3.7, dictionaries are ordered based on insertion, but this is not the case in previous versions.

## Creating a Dictionary

Here is the syntax for creating an empty dictionary:

```pseudo
dictionary_name = {}
```

The `dict()` [function](https://www.codecademy.com/resources/docs/python/functions) is also used to create an empty dictionary:

```pseudo
dictionary_name = dict()
```

Here is the syntax for creating a dictionary with entries:

```pseudo
dictionary_name = { key1: value1,  key2: value2,  key3: value3, ... }
```

Each item in a dictionary is a key-value pair. Each pair is separated by a comma.

Dictionary keys must be immutable types, such as numbers and [strings](https://www.codecademy.com/resources/docs/python/strings), because keys should not change. Keys cannot be [lists](https://www.codecademy.com/resources/docs/python/lists) because lists are mutable and it will raise a [`TypeError`](https://www.codecademy.com/resources/docs/python/errors).

Values can be of any type, such as strings, numbers, lists, and even other dictionaries.

### Example

The following example demonstrates the usage of dictionaries:

```py
# Create a dictionary
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

# Print the dictionary
print(coffee_shop)
```

Here is the output:

```shell
{'cold brew': 3.5, 'latte': 4.25, 'cappucino': 3.99}
```

## Accessing Items in a Dictionary

A particular value in a dictionary can be accessed by passing the associated key in the `dictionary[key]` syntax:

```py
# Create a dictionary
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

# Print the value of a key
print(coffee_shop["cold brew"])
```

Here is the output:

```shell
3.5
```

If there is an attempt to retrieve a value from a key that does not exist, a `KeyError` is raised. If a value is assigned to a key that doesn't exist, the new key-value pair will be added. If a value is assigned to an existing key, it replaces the existing value.

## Adding Items to a Dictionary

The `dictionary[key]` syntax can also be used to add an item to a dictionary:

```pseudo
dictionary_name[new_key] = new_value
```

### Example

This example adds an item to a dictionary:

```py
# Create a dictionary
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

# Add an item to the dictionary
coffee_shop["espresso"] = 4.72

# Print the dictionary
print(coffee_shop)
```

Here is the output:

```shell
{'cold brew': 3.5, 'latte': 4.25, 'cappucino': 3.99, 'espresso': 4.72}
```

## Changing Items in a Dictionary

The `dictionary[key]` syntax can be used to change the value of a key in a dictionary as well:

```py
# Create a dictionary
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

# Change the value of a key in the dictionary
coffee_shop["cold brew"] = 3.18

# Print the dictionary
print(coffee_shop)
```

Here is the output:

```shell
{'cold brew': 3.18, 'latte': 4.25, 'cappucino': 3.99}
```

## Removing Items from a Dictonary

The `del` statement helps in removing an item from a dictionary:

```pseudo
del dictionary_name[key]
```

### Example

This example removes an item from a dictionary:

```py
# Create a dictionary
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

# Remove an item from the dictionary
del coffee_shop["latte"]

# Print the dictionary
print(coffee_shop)
```

Here is the output:

```shell
{'cold brew': 3.5, 'cappucino': 3.99}
```

## Iterating a Dictionary

There are several methods to iterate a dictionary depending on the data accessed:

- `.keys()`: Used to access the keys in the dictionary.
- `.values()`: Used to access the values in the dictionary.
- `.items()`: Used to access the items in the dictionary.

### Syntax

Here is the syntax for the methods:

```pseudo
dictionary_name.keys()
dictionary_name.values()
dictionary_name.items()
```

### Codebyte Example

Here is a codebyte example that uses the `for` loop to iterate a dictionary:

```codebyte/python
# Create a dictionary
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

# Print the keys in the dictionary
for key in coffee_shop.keys():
  print(key)

# Print the values in the dictionary
for value in coffee_shop.values():
  print(value)

# Print the items in the dictionary in 'item' format
for item in coffee_shop.items():
  print(item)

# Print the items in the dictionary in 'key, value' format
for key, value in coffee_shop.items():
  print(key, value)
```

Here is the output:

```shell
cold brew
latte
cappucino
3.5
4.25
3.99
('cold brew', 3.5)
('latte', 4.25)
('cappucino', 3.99)
cold brew 3.5
latte 4.25
cappucino 3.99
```

## Frequently Asked Questions

### 1. Are `dict()` and `{}` the same?

Yes, both `dict()` and `{}` create a dictionary in Python, but their syntax usage differs:

- `{}` creates an empty dictionary directly.
- `dict()` also creates an empty dictionary but can take keyword arguments or an iterable of key-value pairs.

### 2. How do I merge two dictionaries in Python?

The `.update()` method is used to merge two dictionaries in Python:

```py
dict1.update(dict2)
```

### 3. How to clear a dictionary in Python?

The `.clear()` method can be used to remove all the items from a dictionary:

```py
dictionary_name.clear()
```
