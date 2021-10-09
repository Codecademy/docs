---
Title: 'Dictionaries'
Description: 'A dictionary is an ordered set of key-value pairs. It provides a way to map pieces of data to each other and allows for quick access to values associated to keys.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dictionaries'
  - 'Data Types'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A dictionary is an ordered set of key-value pairs. It provides a way to map pieces of data to each other and allows for quick access to values associated with keys. Keys must be unique in dictionaries, but the values don't have to be.

Python dictionaries are dynamic and mutable, which means they can change.

If you assign a value to an already existing dictionary key, it does not add the key a second time. Instead, it replaces the existing value. Dictionaries also have several built-in methods which make it easier to manipulate the data structure and objects contained within.

**Note:** As of Python version 3.7, dictionaries are ordered based on insertion, but this is not the case in Python 3.6 and earlier.

## Syntax

The syntax of a dictionary is as follows:

```pseudo
dictionary_name = {key1: value1,  key2: value2,  key3: value3}
```

Each entry in a dictionary is a key-value pair. Each pair is separated by a comma.

Dictionary keys must be immutable types such as numbers and strings because keys should not change. Keys cannot be lists because lists are mutable, and it will throw a `TypeError`.

Values can be any type, such as strings, numbers, lists, and even other dictionaries.

## Create a Dictionary

1. An empty dictionary is created with curly braces:

```py
diner = {}
```

2. An empty dictionary can also be created using the built-in function, `dict()`, with no arguments:

```py
diner = dict()
```

3. A dictionary with entries:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}
```

The three key-value pairs in the `coffee_shop` dictionary:

- `"cold brew": 3.50`
- `"latte": 4.25`
- `"cappucino": 3.99`

## Accessing a Dictionary

Dictionaries can be referred to by using the key name:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}

print(coffee_shop["cold brew"])
# Output: 3.5
```

When you try to access a key that does not exist, it will throw a `KeyError`.

## Iterating Through a Dictionary

There are several ways to iterate through a dictionary depending on which data you want to access: keys, values, or both.

The following codebyte consists of four `for` loops that iterate through the `coffee_shop` dictionary:

```codebyte/py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}

# Access keys
for key in coffee_shop.keys():
    print(key)

# Access values
for value in coffee_shop.values():
    print(value)

# Key-value as an item, formatted as a tuple
for item in coffee_shop.items():
    print(item)

# Individual key and value:
for key, value in coffee_shop.items():
    print(key, value)
```

The `for` loops access and print each key, value, key-value as a tuple, and individual key-values in `coffee_shop`, respectively.

## Add an Entry

To add an entry, use square brackets to index into the dictionary's `new_key` and assign it a `new_value`:

```py
my_dict[new_key] = new_value
```

## Create a Dictionary using List Comprehension 

```py
my_dict = { key: value for key, value in zip(list1, list2) }
```

The values of the first list become the keys, and the values of the second list become the values.
