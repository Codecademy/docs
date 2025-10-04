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

A **`dictionary`** is a data set of key-value pairs. It maps pieces of data to each other and allows quick access to values associated with keys.

In Python, dictionaries are dynamic and mutable, meaning they can change in size or content.

> **Note:** As of Python version 3.7, dictionaries maintain insertion order. This behavior was not guaranteed in previous versions.

## Creating a Dictionary

Syntax for creating an empty dictionary:

```python
dictionary_name = {}
```

The `dict()` [function](https://www.codecademy.com/resources/docs/python/functions) can also be used:

```python
dictionary_name = dict()
```

Syntax for creating a dictionary with entries:

```python
dictionary_name = { key1: value1,  key2: value2,  key3: value3, ... }
```

Each item is a key-value pair, separated by a comma.

Keys must be immutable types, such as numbers and [strings](https://www.codecademy.com/resources/docs/python/strings). Using mutable types like [lists](https://www.codecademy.com/resources/docs/python/lists) as keys will raise a [`TypeError`](https://www.codecademy.com/resources/docs/python/errors).

Values can be of any type, including strings, numbers, lists, and even dictionaries.

### Example

```python
# Create a dictionary
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

# Print the dictionary
print(coffee_shop)
```

**Output:**

```shell
{'cold brew': 3.5, 'latte': 4.25, 'cappucino': 3.99}
```

## Accessing Items in a Dictionary

Access a value by referencing its key:

```python
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }
print(coffee_shop["cold brew"])
```

**Output:**

```shell
3.5
```

Attempting to retrieve a value with a non-existent key raises a `KeyError`. Assigning a value to a new key adds a new pair, while assigning to an existing key updates its value.

## Adding Items to a Dictionary

To add an item:

```python
dictionary_name[new_key] = new_value
```

### Example

```python
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }
coffee_shop["espresso"] = 4.72
print(coffee_shop)
```

**Output:**

```shell
{'cold brew': 3.5, 'latte': 4.25, 'cappucino': 3.99, 'espresso': 4.72}
```

## Changing Items in a Dictionary

To change a value:

```python
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }
coffee_shop["cold brew"] = 3.18
print(coffee_shop)
```

**Output:**

```shell
{'cold brew': 3.18, 'latte': 4.25, 'cappucino': 3.99}
```

## Removing Items from a Dictionary

Use the `del` statement:

```python
del dictionary_name[key]
```

### Example

```python
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }
del coffee_shop["latte"]
print(coffee_shop)
```

**Output:**

```shell
{'cold brew': 3.5, 'cappucino': 3.99}
```

## Iterating a Dictionary

Common methods for iteration:

- `.keys()`: Accesses dictionary keys.
- `.values()`: Accesses dictionary values.
- `.items()`: Accesses key-value pairs.

### Syntax

```python
dictionary_name.keys()
dictionary_name.values()
dictionary_name.items()
```

### Codebyte Example

```codebyte/python
coffee_shop = { "cold brew": 3.50, "latte": 4.25, "cappucino": 3.99 }

for key in coffee_shop.keys():
  print(key)

for value in coffee_shop.values():
  print(value)

for item in coffee_shop.items():
  print(item)

for key, value in coffee_shop.items():
  print(key, value)
```

**Output:**

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

Yes. Both create a dictionary, but differ in syntax:

- `{}` creates an empty dictionary directly.
- `dict()` creates an empty dictionary and can also take keyword arguments or an iterable of key-value pairs.

### 2. How do I merge two dictionaries in Python?

Use the `.update()` method:

```python
dict1.update(dict2)
```

### 3. How to clear a dictionary in Python?

Use the `.clear()` method:

```python
dictionary_name.clear()
```
