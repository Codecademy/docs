---
Title: "Dictionaries in Python" 
Subjects:
  - "Computer Science"
  - "Data Science"
Tags: 
  - "Dictionaries"
  - "Data Types"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

A dictionary is an unordered set of `key: value` pairs. It provides a way to map pieces of data to each other, and allows for quick access to values associated to keys.

## Syntax

The syntax of a dictionary is as follows:

```py
dict = {key1: value1, key2: value2, key3: value3}
```

Each entry in a dictionary is a `key: value` pair. Each pair is separated by a comma.

Dictionary keys can must be immutable types such as numbers and strings, because keys should not change. Keys cannot be lists, as lists are mutable and can change. Otherwise, it will throw a `TypeError`.

Values can be any type such as strings, numbers, lists, even other dictionaries.

## Creating a Dictionary

A dictionary is created using curly braces `{` `}`:

```py
diner = {}
```

A dictionary with entries:

```py
coffee_shop = {"cold brew": 3.50, "latte": 4.25, "cappucino": 3.99}
```
- `"cold brew": 3.50`
- `"latte": 4.25`
- `"cappucino": 3.99`

## Adding a new entry

```py
dict[new_key] = new_value
```

When you try to access a key that does not exist, it will throw a `KeyError`.


## Creating a dictionary using list comprehension

```py
dict = {key: value for key, value in zip(list1, list2)}
```

The values of the first list become the keys, and the values of the second list become the values.
