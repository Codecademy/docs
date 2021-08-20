---
Title: "Dictionaries" 
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Dictionaries"
  - "Data Types"
CatalogContent: 
  - "learn-python-3"
  - "paths/computer-science"
---

A dictionary is an ordered set of `key: value` pairs. It provides a way to map pieces of data to each other, and allows for quick access to values associated to keys. Keys must be unique in dictionaries, but the values don't have to be.

Python dictionaries are dynamic and mutable which means they can be changed.

If you assign a value to an already existing dictionary key, it does not add the key a second time, but instead replaces the existing value. Dictionaries also have a number of built in methods which make it easier to manipulate the datastructure and objects containted within.

**Note:** As of Python version 3.7, dictionaries are ordered, but in Python 3.6 and earlier, dictionaries are unordered.

## Syntax

The syntax of a dictionary is as follows:

```py
dict = {key1: value1, key2: value2, key3: value3}
```

Each entry in a dictionary is a `key: value` pair. Each pair is separated by a comma.

Dictionary keys must be immutable types such as numbers and strings, because keys should not change. Keys cannot be lists, as lists are mutable and can change. Otherwise, it will throw a `TypeError`.

Values can be any type such as strings, numbers, lists, even other dictionaries.

## Create a Dictionary

A empty dictionary is created using curly braces `{` `}`:

```py
diner = {}
```

Or with the built-in function `dict()` without any arguments:

```py
diner = dict()
```

A dictionary with entries:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}
```

- `"cold brew": 3.50`
- `"latte": 4.25`
- `"cappucino": 3.99`

## Using a Dictionary

Dictionaries can be referred to by using the key name:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}

print(coffee_shop["cold brew"])
# Output: 3.5
```

## Add an Entry

```py
dict[new_key] = new_value
```

When you try to access a key that does not exist, it will throw a `KeyError`.


## Create a Dictionary using List Comprehension

```py
dict = {key: value for key, value in zip(list1, list2)}
```

The values of the first list become the keys, and the values of the second list become the values.
